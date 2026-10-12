# Dětská minutka 🌈

Vizuální časovač pro malé děti – obrázky se odspodu postupně vybarvují a pomáhají dětem pochopit, kolik času ještě zbývá.
Motiv Duha - Ciferník je potom klasickou reprezentací analogových hodin, s možností úpravy minut na ciferníku. 

## Motivy

12 motivů: **dinosaurus, jednorožec, vesmírná raketa, bagr, žirafa, autíčko, traktor, hasičské auto, mořský svět, princezna, rytíř a duha**. Výchozí je dinosaurus, duha s nastavitelným ciferníkem je poslední. Motivy jsou v burger menu; srdíčkem si lze označit oblíbené.

Ilustrace jsou vlastní SVG kresby přímo v aplikaci, bez externích obrázků. Ilustrace jsou optimalizované pro odpočítávání: barevné vyplnění postupuje podle skutečné výšky kresby, takže poslední horní detaily získají barvu těsně před koncem.

## Použití

- Otevřete [index.html](./index.html) v prohlížeči.
- Rozsah je **1–60 minut**. Posuvník, ▶ / ⏸, ↻ a ☰ jsou v jedné **spodní liště**, pohodlně ovladatelné palcem. V nabídce ☰ najdeš i **Předvolené časy** (1, 2, 5, 10, 15, 20, 25, 30, 45, 60 minut).
- Výběr **Motivy** najdeš v burger menu ☰. Stejné menu obsahuje přepínání zvuku, vyzkoušení zvonečku a přepnutí na celou obrazovku.
- Ikony **▶ / ⏸ / ↻** ve spodní liště spouštějí, pozastavují a restartují odpočítávání. Burger menu se otevírá vzhůru.
- Konec oznámí animace a příjemná zvonkohra (lze vypnout nebo vyzkoušet).
- Duhový motiv navíc umožňuje změnit měřítko ciferníku.
- Při běžícím odpočtu se na podporovaných zařízeních automaticky žádá o **udržení rozsvícené obrazovky (Screen Wake Lock API)**. Při pauze nebo dokončení se žádost uvolní. Vyžaduje HTTPS, aktivní kartu a podporovaný prohlížeč; může být omezeno úsporným režimem telefonu.

Funguje na počítači, tabletu i telefonu a nepotřebuje přihlášení, databázi, externí JavaScript, fonty ani obrázky. Oblíbené motivy se ukládají do prohlížeče (`localStorage`) a mezi zařízeními se nesynchronizují.

**Upozornění ke zvuku:** Mobilní prohlížeče někdy omezují zvuk na pozadí. Pokud telefon aplikaci uspí, závěrečné upozornění se může přehrát až po návratu do otevřené stránky.


Projekt je statický. Pro sdílení stačí poslat URL nasazené aplikace.

Favicon je v souboru `favicon.svg`. 


## Výkon a úsporný režim

- Animace mění pouze **právě zobrazený motiv**; skryté SVG obrázky se během odpočtu nepřekreslují. Duhový ciferník se aktualizuje pouze při zvoleném motivu Duha.
- Běžný režim překresluje přibližně **24× za sekundu** (interval 42 ms). Přesnost odpočítávání se počítá podle skutečného času, takže nesouvisí s frekvencí vykreslování. Zvuk na konci zůstává řízen samostatným časovačem.
- V burger menu je **Úsporný režim** (ukládá se lokálně do prohlížeče). Ten sníží překreslování na **1× za sekundu**, vypne některé náročné grafické efekty a **nevyžaduje udržování displeje rozsvíceného**.
- **Pozor:** pokud telefon v úsporném režimu zamkne displej nebo uspí prohlížeč, nemusí na iPhonu zaznít konečný zvoneček včas. Pro spolehlivější vizuální odpočítávání ponechte běžný režim.
- Při pauze se čas aktualizuje podle okamžiku stisku, nikoli podle posledního vykresleného snímku.

## Ikona na ploše telefonu

Na iPhonu slouží `apple-touch-icon.png` (180 × 180 px), na Androidu `manifest.webmanifest` spolu s `icon-192.png` a `icon-512.png`. Favicon pro záložku prohlížeče je `favicon.svg`. Pokud už máte na ploše starého zástupce s písmenem D, odstraňte jej a po nasazení aktuální verze znovu použijte **Přidat na plochu**.

## Offline provoz a posuvník času

Po prvním otevření **s internetem** se přes `sw.js` (service worker) uloží základní stránka, SVG motivy zabudované v HTML, ikony a manifest. Po dokončení prvotního uložení lze minutku spouštět bez internetu, včetně zástupce na ploše telefonu. Nevyžaduje backend. Na iOS může být cache časem automaticky odstraněna, proto je vhodné aplikaci občas otevřít online.

Spodní posuvník je odsazený od levého okraje. Dotykový výpočet respektuje skutečnou polohu středu jezdce a umožňuje nastavit i **1 minutu** bez sjíždění prstu ze skla. Běžný režim má nyní obnovování na **24× za sekundu**; volitelný úsporný režim nadále **1× za sekundu**.


☕ Podpořit Dětskou minutku

Dětská minutka je a zůstane zdarma pro všechny děti a rodiče.

Pokud vám doma pomáhá a chcete podpořit její další vývoj, můžete nám dobrovolně koupit kávu.

Děkujeme! ❤️
