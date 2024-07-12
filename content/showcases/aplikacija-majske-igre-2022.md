---
title: Aplikacija Majske igre 2022
subtitle: Neuraden Android klient za največji študentski festival v Sloveniji
coverImage: /img/mi-app-00.png
highlights:
  - highlightTitle: Orodja
    highlightData:
      - Flutter
      - SpringBoot
      - MariaDB
      - Firebase Cloud Messaging
links:
  - linkTitle: Izvorna koda
    linkUrl: https://github.com/JakMar17/MajskeIgre-mobileApp
abstract: Neuraden mobilni klient festivala Majske igre 2022
highlightIntro: >-
  Majske igre združujejo več kot 30 športnih tekmovanj, 20 kulturnih otočkov in
  4 velike koncertne dogodke. Vsi dogodki se odvijajo v mesecu maju.


  Zaradi nedelovanja takratne spletne strani in nepreglednosti terminov dogodkov, sem se v letu 2022 odločil spisati **aplikacijo za sisteme Android**, ki bo omogočala lažji pregled nad dogodki in **obveščanje na dan dogodka** za želene entitete.


  Aplikacija je delovala v letu 2022 in 2023 ter tekom meseca maja imela obe leti okrog 700 aktivnih uporabnikov. V letu 2024 aplikacija ne deluje več - potrebno bi bilo ponovno vzpostaviti podporno infrastrukturo (zaledne sisteme) in popraviti parser, ki je podatke bral iz stare spletne strani.
descriptions:
  - superTitle: Idejni načrt
    title: Zasnova aplikacije
    content: >-
      Aplikacija je bila zasnovana na način, da se je preko koledarja lahko
      pregledovalo dogodke posameznega dneva, hkrati pa je bilo mogoče posamezen
      dogodek označiti kot priljubljen in za njega dobiti obvestilo na jutro
      dogodka.


      Za vsak dogodek je bilo mogoče prebrati opis dogodka, uro in kraj začetka ter dostopati do prijavnega obrazca.


      Tehnična zasnova sistema je bila sestavljena iz:


      1. **mobilne aplikacije (klienta)**, ki je bil spisan v programskem jeziku **Flutter**

      2. **zalednega sistema SpringBoot**, ki je služil kot vmesnik **REST API** za dostop do podatkov, ki jih je potrebovala aplikacija

      3. **spletnega parserja**, ki je iz uradne spletne strani enkrat dnevno pridobival vsebino in jo shranil v podatkovno bazo

      4. **podatkovne baze MariaDB** v kateri so se shranjevali podatki o dogodkih in podatki o uporabnikih, ki so želeli biti obveščeni o posameznih dogodkih

      5. **Firebase Cloud Messaging** za obveščanje uporabnikov


      ![](/img/mi-app-04.png)
  - superTitle: Uporabniški vmesnik in elementi
    title: Končni izdelek
    content: >-
      Aplikacija, ki je bila dostopna (in uporabna) v letih 2022 in 2023, je
      tekom meseca maja uporabljalo približno 700 uporabnikov, kar predstavlja
      10% vseh stanovalcev Študentskih domov v Ljubljani.


      V letu 2024 je aplikacija z novo zasnovano uradno spletno stranjo postala nedelujoča, saj parser ne pridobiva več pravilnih informacij. V letu 2025 se predvideva ponovna vzpostavitev sistema in ponovno delovanje aplikacije.


      ![](/img/mi-app-01.png)


      ![](/img/mi-app-02.png)


      ![](/img/mi-app-03.png)
---
