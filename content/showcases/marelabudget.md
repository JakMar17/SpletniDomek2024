---
title: MarelaBudget
subtitle: Spletna aplikacija za spremljanje osebnih financ
links:
    - linkTitle: MarelaBudget
      linkUrl: https://budget.marela.team
attachments: []
coverImage: /img/mb-2.png
highlights:
    - highlightTitle: Orodja
      highlightData:
          - Angular
          - SpringBoot
          - MariaDB
          - BulmaCSS
highlightIntro: >-
    MarelaBudget je spletna aplikacija za spremljanje osebnih financ. Izhaja iz
    potrebe po rednem spremljanju trenutnega finančnega stanja, ki je razdeljen na
    več računov - gotovinskih, bančnih, varčevalnih.


    Aplikacija omogoča spremljanje odhodkov in prihodkov po različnih kategorija, časovnih obdobjih in računih.
descriptions:
    - superTitle: Izhodišče
      title: Idejna zasnova
      content: >-
          Idejna zasnova izhaja iz lastne potrebe po učinkovitem pregledu finančnih
          transakcij na različnih osebnih računih (gotovina, bančni računi različnih
          bank, varčevalnih računih, investicijskih skladih,..). V času začetka
          projekta namreč nobena izmed zastonjsko dostopnih aplikacij ni omogočala
          dovolj natančnega pregleda.


          Predhodnik aplikacije je bil osebna preglednica izdelana v Excelu, ki je pa omogočala zgolj mesečni pregled s premalo dodatnih funkcionalnosti.


          ![](/img/mb-7.png)
    - superTitle: Angular + SpringBoot
      title: Tehnična zasnova
      content: >-
          Aplikacija je izdelana iz več komponent, ki omogočajo urejanje financ
          preko **spletnega uporabniškega vmesnika** ali strojnega REST API
          servisa. 


          Čelni del je spletna aplikacija spisana v ogrodju **Angular.** Za hitrejše prototipiranje uporabniškega vmesnika je bila uporabljena **BulmaCSS,** grafični elementi sledijo jeziku **Fluent.**


          Zaledni del je spisan v ogrodju **SpringBoot** in je sestavljen iz poslovne logike, spletnega vmesnika REST API in **Hibernate** nivoja za povezavo na podatkovno bazo **MariaDB.** Celotno bazno logiko tako upravlja zaledni sistem brez potrebe po "ročnih" posegih SQL.


          Uporabniški podatki so varovani z uporabniškim imenom in geslom, posamezni zahtevki so avtorizirani z uporabo **žetona JWT.**
    - superTitle: Končna podoba
      title: Uporabniški vmesnik aplikacije
      content: >-
          Uporabniški vmesnik omogoča uporabniku upravljanje računov, kategorij
          transakcij in transakcije, hkrati uporabniku omogoča pregled prihodkov in
          odhodkov za posamezen račun, kategorijo ali časovno obdobje.


          ![](/img/mb-1.png)




          ![](/img/mb-2.png)


          ![](/img/mb-3.png)


          ![](/img/mb-4.png)


          ![](/img/mb-5.png)


          ![](/img/mb-6.png)
---
