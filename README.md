# Dětská minutka 🌈

Vizuální časovač pro malé děti – obrázky se odspodu postupně vybarvují a pomáhají dětem pochopit, kolik času ještě zbývá.

## Motivy

12 obrázků: **duha, dinosaurus, jednorožec, vesmírná raketa, bagr, žirafa, autíčko, traktor, hasičské auto, mořský svět, princezna a rytíř**. Všechny motivy jsou v jedné nabídce; srdíčkem si lze označit oblíbené.

Ilustrace jsou vlastní SVG kresby přímo v aplikaci, bez externích obrázků. Ilustrace jsou optimalizované pro odpočítávání: barevné vyplnění postupuje podle skutečné výšky kresby, takže poslední horní detaily získají barvu těsně před koncem.

## Použití

- Otevřete [index.html](./index.html) v prohlížeči.
- Rozsah je **1–60 minut**. Čas nastavíš posuvníkem nebo tlačítkem **Předvolené časy** pod ovládáním časovače (1, 2, 5, 10, 15, 20, 25, 30, 45, 60 minut).
- Tlačítko **Motivy** pod ovládáním časovače otevře obrázkovou nabídku.
- Ikony **▶ / ⏸ / ↻** pod posuvníkem spouštějí, pozastavují a restartují odpočítávání.
- Konec oznámí animace a příjemná zvonkohra (lze vypnout nebo vyzkoušet).
- Duhový motiv navíc umožňuje změnit měřítko ciferníku.
- Při běžícím odpočtu se na podporovaných zařízeních automaticky žádá o **udržení rozsvícené obrazovky (Screen Wake Lock API)**. Při pauze nebo dokončení se žádost uvolní. Vyžaduje HTTPS, aktivní kartu a podporovaný prohlížeč; může být omezeno úsporným režimem telefonu.

Funguje na počítači, tabletu i telefonu a nepotřebuje přihlášení, databázi, externí JavaScript, fonty ani obrázky. Oblíbené motivy se ukládají do prohlížeče (`localStorage`) a mezi zařízeními se nesynchronizují.

**Upozornění ke zvuku:** Mobilní prohlížeče někdy omezují zvuk na pozadí. Pokud telefon aplikaci uspí, závěrečné upozornění se může přehrát až po návratu do otevřené stránky.


Projekt je statický. Pro sdílení stačí poslat URL nasazené aplikace.
