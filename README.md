# Dětská minutka 🌈

Vizuální časovač pro malé děti – obrázky se odspodu postupně vybarvují a pomáhají dětem pochopit, kolik času ještě zbývá.

## Motivy

12 obrázků: **duha, dinosaurus, jednorožec, vesmírná raketa, bagr, žirafa, autíčko, traktor, hasičské auto, mořský svět, princezna a rytíř**. Všechny motivy jsou v jedné nabídce; srdíčkem si lze označit oblíbené.

Ilustrace jsou vlastní SVG kresby přímo v aplikaci, bez externích obrázků. Ilustrace jsou optimalizované pro odpočítávání: barevné vyplnění postupuje podle skutečné výšky kresby, takže poslední horní detaily získají barvu těsně před koncem.

## Použití

- Otevřete [index.html](./index.html) v prohlížeči.
- Rozsah je **1–60 minut**. Rychlé předvolby: 1, 2, 5, 10, 15, 20, 25, 30, 45, 60.
- **Vybrat motiv** otevře obrázkovou nabídku.
- **Spustit čas / Pozastavit / Pokračovat / Znovu** ovládá odpočet.
- Konec oznámí animace a příjemná zvonkohra (lze vypnout nebo vyzkoušet).
- Duhový motiv navíc umožňuje změnit měřítko ciferníku.

Funguje na počítači, tabletu i telefonu a nepotřebuje přihlášení, databázi, externí JavaScript, fonty ani obrázky. Oblíbené motivy se ukládají do prohlížeče (`localStorage`) a mezi zařízeními se nesynchronizují.

**Upozornění ke zvuku:** Mobilní prohlížeče někdy omezují zvuk na pozadí. Pokud telefon aplikaci uspí, závěrečné upozornění se může přehrát až po návratu do otevřené stránky.

## Nasazení na Vercel

1. V [novém projektu Vercelu](https://vercel.com/new) importujte repozitář `susty91/detska_minutka`.
2. **Framework Preset**: `Other`; **Root Directory**: `./`.
3. Nechte prázdný **Build Command** a nepřidávejte proměnné prostředí.
4. Klikněte na **Deploy**. Aplikace poběží na přidělené adrese `*.vercel.app`.
5. Každá další změna v GitHub větvi `main` se po propojení automaticky znovu nasadí.

Projekt je statický. Pro sdílení s rodiči stačí poslat URL nasazené aplikace.