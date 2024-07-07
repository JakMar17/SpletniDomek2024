---
title: Jakobov spletni domek
subtitle: Redesign osebne spletne strani z inspiracijo Mondrianovega minimalizma
link: ""
coverImage: /img/izdelek-brez-naslova-1-.png
highlights:
  - highlightTitle: Uporabljena orodja
    highlightData:
      - NuxtJS
      - BulmaCSS
      - DecapCMS
      - Figma
  - highlightTitle: Časovni okvir
    highlightData:
      - julij 2024
highlightIntro: >-
  Zadnjo osebno spletno stran s prikazom mojih izkušenj in projektov sem razvil
  v letu 2022. Po dveh letih stara spletna stran ni predstavljala več mojega
  spletnega doma - ne karakterno, ne oblikovalsko in ne tehnološko.


  Po dveh letih je torej prišel čas za revizijo osebne spletne strani in kreiranje nove, ki bo bolje odražala **moja znanja, projekte in izkušnje.**


  Pri razvoju nove spletne strani sem se želel osredotočiti **na 3 faktorje razvoja:** **trajnostno uporabniško izkušnjo** za uporabnike mobilnih naprav, tablic in večjih zaslonov, **minimalističen UI** sledeč trenutnim trendom, ki bo svojo uporabnost ohranjal tudi v prihodnje in **tehnološko dovršenost** z namenom zagotavljanja preprostega vzdrževanja in brezplačnega hostinga.


  Končni izdelek je **statična spletna stran** z možnostjo urejanja vsebine (*JAM stack*). Uporabniški vmesnik je **fuzija modernega stilskega jezika z veliko praznega prostora** *(ang. whitespace) in **Mondrianovega minimalizma.***
descriptions:
  - superTitle: Predhodno stanje
    title: Jakobov spletni domek (2022)
    content: >-
      Predhodnik trenutne spletne strani je bil zasnovan v letu 2022 z namenom
      predstavitve **projektov, izkušenj in znanja.**


      Spletna stran je bila zasnovana kot dinamična spletna stran, ki bo vsebino pridobivala iz statične HTML vsebine**,** REST API JSON poizvedbin iz zunanjih storitev za pisanje urejenega (Markdown) besedila, pri čemer so bile vse **komponente odprtokodne in gostovane na lastni infrastrukturi**.


      Kompleksnost spletne strani se je kazala v številu storitev, ki jih je bilo potrebno gostovati, poleg strežnika za spletno stran, se je v vsebnikih gostilo še storitev za pisanje člankov v Markdownu in storitev za pisanje dinamične vsebine.


      ![](/img/1.drawio.png)




      Takšno konfiguracijo spletne strani je bilo težko vzdrževati, saj je zahtevala lastno infrastrukturo. Zaradi tehničnih težav in odpovedi diska je spletna stran postala nedostopna v začetku leta 2024.


      Ob ponovni vzpostavitvi stanja je bilo ugotovljeno, da spletna stran po dveh letih ne zagotavlja želene enostavnosti vzdrževanja, hkrati pa ne odraža več pridobljenega znanja in izvedenih projektov. Iz tega razloga se odločimo, da spletno stran naredimo na novo.
  - superTitle: JAM stack
    title: Tehnološki stack nove strani
    content: >-
      Pri zasnovi spletne strani se poslužimo **JAM stack-a,** ki omogoča
      generiranje skoraj statičnih HTML datotek. Vsebina spletne strani se ureja
      preko **DecapCMS,** ki omogoča grafični vmesnik in veliko število
      različnih tipov vsebin.


      Vsebina se nato v času gradnje aplikacije pretvori v markdown in JSON datoteke, ki postanejo del spletne strani.


      Celotna spletna stran je gostovana na **Netlify platformi,** kar omogoča brezplačno gostovanje brez potrebe po vzdrževanju. Spletna stran se posodobi ob vsakem commit-u izvorne kode na repozitorij na GitHub-u.
  - superTitle: Mondrialovo minimalistično platno
    title: Zasnova uporabniškega vmesnika
    content: >-
      Prvotna zasnova uporabniškega vmesnika je sledila trendom uporabe veliko
      praznega belega prostora in velikih CSS gridov.


      Ob prvotnemu zastavljanju celic začetne strani in barvanju posamezne celice z eno izmed osnovnih CSS barv, pa sem spregledal povezavo med zasnovo strani in Mondrialovimi asimetričnimi kvadrati, od koder sem v nadaljevanju črpal navidh.


      ![](/img/dodajte-nekaj-besedila-telesa-1-.png)


      Značilno Mondrialovih kvadratov je **asimetričnost** in **velika količina bele barve** s črnimi obrobami. Skozi celotno spletno stran se tako pojavljajo **asimetrični elementi**, ki se **medsebojno dopolnjujejo.**


      ![](/img/2.png)


      Naslednja značilnost Mondrialovih del je uporaba **osnovnih barv**, ki se na spletni strani kaže v barvni paleti.


      Ta je povečini zasnovana na **sivinskih odtenkih**, z redkimi in preudarnimi elementi v **rdeči, modri in rumeni** barvni podlagi - ti poudarki spominjajo na Mondrialove kvadrate.


      ![](/img/dodajte-nekaj-besedila-telesa.png)
  - superTitle: Lighthouse
    title: Optimizacija kvalitete spletne strani
    content: >-
      Spletna stran je bila s pomočjo testa **Lighthouse** posebej optimizirana
      za **hitrost, dostopnost in SEO.** 


      Določene dobre prakse, ki so bile upoštevane pri izdelavi spletne strani:


      * naknadno nalaganje fotografij *(ang. lazy loading)*

      * uporaba formata `webp` za grafike in zmanjšane velikosti grafik

      * uporaba html značk v skladu z njihovim namenom *(npr. `a` `h*` `button`)*

      * uporaba `alt` in ostalih značk namenjenih izboljšanju dostopnosti spletnega mesta

      * uporaba dovoljšnih kontrastov, velikosti pisav in barv za izboljšanje dostopnosti spletnega mesta


      Uporaba dobrih praks je proizvedel rezultate LIghthouse testa, kjer so vse kategorije ocenjene z oceno 90 ali več tako na namiznih napravah kot na mobilnih klientih.


      ![](/img/lighthouse.png)
---
