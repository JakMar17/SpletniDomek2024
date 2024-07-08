---
title: Majske igre
subtitle: Prenova spletne strani največjega študentskega dogodka
link: www.majske-igre.si
coverImage: /img/mi.png.webp
highlights:
  - highlightTitle: Orodja
    highlightData:
      - NuxtJS
      - BulmaCSS
      - DecapCMS
      - Figma
highlightIntro: >-
  Majske igre so festival s 40-letno tradicijo. Vse se je začelo leta 1983, ko
  so stanovalci doma Gerbičeva prenesli svoje tradicionalne domske igre v Rožno
  dolino in skupaj z ostalimi domovi organizirali športna tekmovanja in večerni
  koncert. Takrat še niso slutili ー a organizirali so prve Majske igre.


  Majske igre so prerasle okvir študentskih domov in so odprte za vse študente in mlade po srcu, a njihov duh še vedno bije v študentskih naseljih, kjer se odvija večina dogajanja. Organizator vseh dogodkov pa ostajajo stanovalci študentskih domov, dandanes povezani v Študentski svet stanovalcev.


  Kot največji študentski festival v Sloveniji pa je domača stran festivala v zadnjih nekaj letih postala **popolnoma neuporabna** - zaradi slabega in nestrokovnega vzdrževanja, uporabljeno zastarelo tehnologijo in verzijami Wordpressa in vtičnikov.


  Iz tega razloga smo se **v letu 2024 odločili za popolno prenovo spletne strani** v moji izvedbi.
descriptions:
  - superTitle: Predhodno stanje
    title: Neuporabna stara spletna stran
    content: >-
      Predhodna spletna stran je bila razvita z uporabo **Wordpressa** in
      številnih **vtičnikov.** Sčasoma so bili nekateri vtičniki posodobljeni,
      tema in ostale komponente pa so z verzioniranje ostale neposodobljene. To
      je pripomoglo k temu, da je **spletna stran v zadnjih letih postala
      neuporabna.**


      Stili spletne strani in JS skripte se v okrog 60% časa niso pravilno in popolno naložile, kar je privedlo k temu, da so na strani manjkale slike, stili so bili "pokvarjeni". Hkrati stran ni bila uporabna na mobilnih napravah, saj se določene komponente niso prikazovale.


      ![](/img/mi-showcase-1.png)
  - superTitle: Zasnova prenovljenega spletnega mesta
    title: Pot k prenovi
    content: >-
      Odločitev o prenovi spletne strani je bila sprejeta po neuspešnem poskusu
      ureditve stare spletne strani z namenom, da se približno **40 000 letnim
      obiskovalcem omogočimo vpogled v vsebino festivala**.


      Spletna stran je bila zasnova z namenom, da bodo spletno stran **urejali in upravljali tehnično neizobraženi člani organizacijske ekipe.** Zaradi tega je bila tehnična zahteva ta, da bo vsebino mogoče urejati preko centralnega sistema CMS. Druga tehnična zahteva je bila, da je gostovanje omogočeno preko trenutnega ponudnika gostovanja, ki uporablja sistem **cPanel**.


      Za ogrodje spletne strani je bil izbran **NuxtJS**, za urejanje vsebine je bil izbran **DecapCMS**. Kot osnova močno prilagojenih CSS stilov je bilo izbrano ogrodje **BulmaCMS**.
  - superTitle: CICD spletnega mesta
    title: Avtomatska gradnja in gostovanje
    content: >-
      Za enostavno gradnjo nove verzije spletnega mesta po vsakršni vsebinski
      spremembi je bil izbran VCS sistem GitHub, na katerem se izvede **GitHub
      akcija**, ki spletno stran sprva zgradi in jo potem prenese na strežnik
      gostovanja. Vsebina se spreminja preko vmesnika DecapCMS.


      Edina omejitev, ki jo infrastruktura predstavlja, je omejitev minut gradnje na sistemu GitHub actions, vendar v letošnjem letu težav z omejitvami nismo imeli.


      ![](/img/mi-showcase-2.png)
  - superTitle: Ohranitev celostne grafične podobe
    title: Grafična podoba spletnega mesta
    content: >-
      Pri gradnji novega spletnega mesta smo ohranili staro celostno grafično
      podobo, ki predvideva temno modro barvo kot primarno ter deli podpodročja
      festivala s tremi barvami - zeleno (šport), svetlo modro (zabavo) in
      oranžno (kultura).


      Pri tem je primarna barva uporabljena na vseh podstraneh, s tem se ohranja celota spletnega mesta, posamezne barve podkategorij pa so uporabljene za posamezna področja.


      ![](/img/mi-showcase-3.png)


      Ohranjeni, prilagojeno, so bili tudi elementi stare spletne strani. S tem smo omogočili uporabnikom najenostavnejšo migracijo na novo spletno stran.
  - superTitle: Rezultat
    title: Končna podoba
    content: |-
      ![](/img/mi-showcase-5.png)

      ![](/img/mi-showcase-6.png)
---
