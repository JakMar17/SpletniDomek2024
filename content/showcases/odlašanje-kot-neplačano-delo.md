---
title: Odlašanje kot neplačano delo
subtitle: Intervencija v družbeni prostor z merjenjem porabljenega časa
coverImage: /img/majcazakras-3.png
highlights:
    - highlightTitle: Avtorji konceptualnega projekta
      highlightData:
          - Jakob Marušič
          - Neja Berger
          - Rok Roudi
    - highlightTitle: Avtor tehnične izvedbe
      highlightData:
          - Jakob Marušič
    - highlightTitle: Trajanje projekta
      highlightData:
          - '2022'
highlightIntro: >-
    Interdisciplinarni projekt "Odlašanje kot neplačano delo" je širši družbeni
    projekt, ki predstavlja intervencijo v družbeni prostor z željo po opozarjanju
    na *neplačano delo*, ki ga opravljamo za tehnološka podjetja z uporabo
    njihovih brezplačnih aplikacij.


    Konceptualno sta projekt zasnovala študenta Akademije za likovno umetnost in oblikovanje Neja Berger in Rok Roudi. 


    V projekt sem se vključil kot realizant osrednjega elementa projekta, mobilne aplikacije za beleženje porabljenega časa.
descriptions:
    - superTitle: Uvod in motivacija
      title: Teoretično ozadje projekta
      content: >-
          Teoretično ozadje projekta definira Neja Berger, ki v okolju definira
          ključni termin *temačno odlašanje.*


          > Kot začasen in skrajno razumen oddih se mi ponuja ta ali oni monitor,

          >

          > saj obljublja kratke vsebine, pobeg v pasivnost za tistih nekaj sekund, preden

          >

          > nadaljujem z delom na istem monitorju. Potem pa se vsebine začnejo seštevati.

          >

          > Se en klik. Še en kratek izsek iz nečesa, še en mem, še en mail, še ena epizoda. Samo še ena. Čedalje teže se je vrniti na začetek, ker me zdaj poleg nerazložljive sluzi imobilizira še krivda. Fak, stran vržen dan. In nove “za brezveze” skenslane kave.


          Kot rešitev *temačnega odlašanja* Neja predlaga dvoje:


          1. vpeljavo elementov v javni prostor, ki opozarjajo na problematiko

          2. **implementacijo mobilne aplikacije**, ki bi na podlagi uporabnikovih podatkov beležila *"koliko enot strojnega učenja je v času uporabe aplikacij proizvedel in kakšno materialno škodo si je s tem ustvaril, ko ni opravljal produktivnega dela"*
    - superTitle: Mobilna aplikacija
      title: Cilj projekta
      content: >-
          V začetni fazi je bil cilj projekta mobilna aplikacija, ki omogoča
          spremljanje porabljenega časa v skupku aplikacij, ki pripadajo določenemu
          podjetja, preračun "plače", ki bi jo povprečen zaposleni zaslužil in
          kreiranje kombiniranega povprečnega uporabnika. Slednje je zahtevalo
          dodatno implementacijo podatkovne baze in zalednega sistema.


          V začetni fazi smo se izognili implementaciji "enot strojnega učenja", saj konceptualna avtorja termina ne definirata na tehničnem nivoju. Ravno tako se zaradi tehničnih omejitev, omejimo na implementacijo zgolj **aplikacije na sistemu Android.**
    - title: Tehnična implementacija
      superTitle: Osnovne funkcionalnosti aplikacije
      content: >-
          Implementirana aplikacija je omogočala naslednje funkcionalnosti:


          1. **prikaz uporabe mobilnih aplikacij** Google, Bytedance, Snap in Meta v zadnjem dnevu, tednu, mesecu

          2. **preračun zneska** glede na porabo v posameznem časovnem obdobju

          3. **aproksimacija videnih oglasov** glede na posamezno časovno obdobje in podjetje

          4. prikaz skupne porabe vseh izbranih aplikacij

          5. **anonimizirano zbiranje podatkov** za kreacijo povprečnega uporabnika


          Aplikacija je bila implementirana v ogrodju **Flutter**, za zaledni sistem se je uporabilo ogrodje **SpringBoot**, za hrambo podatkov pa podatkovna baza **MariaDB**.
    - title: Grafična podoba aplikacije
      superTitle: UI & UX
      content: >-
          Grafična podoba aplikacije v veliki meri sledi *dizajnerskemu jeziku*
          Cupertino, večina gradnikov je bila sprogramiranih na novo z namenom
          prilagoditve dotični problematiki.


          V ospredje gradnikov je postavljena **informacija, ki uporabnika *zmoti***, z namenom odvračanja od nadaljnjega odlašanja. Ostale informacije uporabniku po večini ostajajo zakrite, s tem se lahko osredotoči na bistveno informacijo aplikacije, hkrati pa še vedno dostopa do podatkov o načinu generiranja podatkov in razlag.
    - superTitle: Zaključek
      title: Širša uporabnost aplikacije
      content: >-
          Avtorja projekta se po prejemu izdelane prve verzije aplikacije, nista
          odločila za realizacijo projekta in vstop v javni prostor, tako ostaja
          aplikacija edina zaključena celota idejnega projekta.


          Implementirana aplikacija bi sicer omogočala širši poseg v javni prostor in hkrati pridobivala anonimizirane podatke za preostale elemente projekta, kar je osnovni namen konceptualne ideje načrta.


          Vendar pa pod drugi strani tudi samostojno zagotavlja dodano vrednost za posameznega uporabnika, saj mu nakaže lastne vzorce uporabe aplikacij na preprost in uporabniku prijazen način.
---
