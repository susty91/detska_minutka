/* Dětská minutka: offline provoz po prvním načtení přes HTTPS. */
const CACHE_NAME='detska-minutka-offline-v1-20261012';
const CACHE_PREFIX='detska-minutka-offline-';
const SCOPE=self.registration.scope;
const ROOT_URL=new URL('./',SCOPE).href;
const FALLBACK_URL=new URL('./index.html',SCOPE).href;
const APP_SHELL=[
  './','./index.html','./favicon.svg','./manifest.webmanifest',
  './apple-touch-icon-2026.png','./icon-192.png','./icon-512-2026.png'
].map(path=>new URL(path,SCOPE).href);

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const names=await caches.keys();
    await Promise.all(names.filter(name=>name.startsWith(CACHE_PREFIX)&&name!==CACHE_NAME).map(name=>caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin||!url.href.startsWith(SCOPE))return;
  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const response=await fetch(request);
        if(response.ok){
          const cache=await caches.open(CACHE_NAME);
          await cache.put(FALLBACK_URL,response.clone());
        }
        return response;
      }catch(_){
        return (await caches.match(request))||(await caches.match(FALLBACK_URL))||(await caches.match(ROOT_URL))||Response.error();
      }
    })());
    return;
  }
  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response.ok){
        const cache=await caches.open(CACHE_NAME);
        await cache.put(request,response.clone());
      }
      return response;
    }catch(_){return Response.error();}
  })());
});
