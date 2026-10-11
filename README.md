# Dětská minutka 🌈

Vizuální časovač pro malé děti – obrázky se odspodu postupně vybarvují a pomáhají dětem pochopit, kolik času ještě zbývá.

## Motivy

12 motivů: **dinosaurus, jednorožec, vesmírná raketa, bagr, žirafa, autíčko, traktor, hasičské auto, mořský svět, princezna, rytíř a duha**. Výchozí je dinosaurus, duha s nastavitelným ciferníkem je poslední. Motivy jsou v burger menu; srdíčkem si lze označit oblíbené.

Ilustrace jsou vlastní SVG kresby přímo v aplikaci, bez externích obrázků. Ilustrace jsou optimalizované pro odpočítávání: barevné vyplnění postupuje podle skutečné výšky kresby, takže poslední horní detaily získají barvu těsně před koncem.

## Použití

- Otevřete [index.html](./index.html) v prohlížeči.
- Rozsah je **1–60 minut**. Posuvník, ▶ / ⏸, ↻ a ☰ jsou v jedné horní liště. V nabídce ☰ najdeš i **Předvolené časy** (1, 2, 5, 10, 15, 20, 25, 30, 45, 60 minut).
- Výběr **Motivy** najdeš v burger menu ☰. Stejné menu obsahuje přepínání zvuku, vyzkoušení zvonečku a přepnutí na celou obrazovku.
- Ikony **▶ / ⏸ / ↻** pod posuvníkem spouštějí, pozastavují a restartují odpočítávání.
- Konec oznámí animace a příjemná zvonkohra (lze vypnout nebo vyzkoušet).
- Duhový motiv navíc umožňuje změnit měřítko ciferníku.
- Při běžícím odpočtu se na podporovaných zařízeních automaticky žádá o **udržení rozsvícené obrazovky (Screen Wake Lock API)**. Při pauze nebo dokončení se žádost uvolní. Vyžaduje HTTPS, aktivní kartu a podporovaný prohlížeč; může být omezeno úsporným režimem telefonu.

Funguje na počítači, tabletu i telefonu a nepotřebuje přihlášení, databázi, externí JavaScript, fonty ani obrázky. Oblíbené motivy se ukládají do prohlížeče (`localStorage`) a mezi zařízeními se nesynchronizují.

**Upozornění ke zvuku:** Mobilní prohlížeče někdy omezují zvuk na pozadí. Pokud telefon aplikaci uspí, závěrečné upozornění se může přehrát až po návratu do otevřené stránky.


Projekt je statický. Pro sdílení stačí poslat URL nasazené aplikace.\n\nFavicon je v souboru `favicon.svg`. 
