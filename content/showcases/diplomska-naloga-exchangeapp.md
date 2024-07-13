---
title: Diplomska naloga ExchangeApp
subtitle: Diplomska naloga Implementacija informacijskega sistema za medsebojno
  izmenjavo testnih primerov
coverImage: /img/exchangeapp-00.png
highlights:
  - highlightTitle: Orodja
    highlightData:
      - Angular
      - SpringBoot
      - MongoDB
      - MariaDB
      - Docker
abstract: Zaključna diplomska naloga Implementacija informacijskega sistema za
  medsebojno izmenjavo testnih primerov
highlightIntro: >-
  V letu 2021 sem diplomiral na dodiplomskem univerzitetnem študijskem programu
  računalništvo in informatika Fakultete za računalništvo in informatika
  Univerze v Ljubljani po mentorstvom doc. dr. Luka Fürst. Diplomska naloga je
  nosila naslov **Implementacija informacijskega sistema za medsebojno izmenjavo
  testnih primerov**.


  Namen diplomska naloge je bila izdelava sistema, ki bi omogočala izmenjavo testnih primerov, ki jih študenti pri študiju uporabljajo za testiranje pravilnosti kode, pri čemer je bilo potrebno izvesti **testiranje pravilnosti testnih primerov** in **testiranje podobnosti testnih primerov**, ki preprečuje plagiatorstvo.


  Na podlagi naloženih testnih primerov je uporabnik pridobil določeno število *žetonov*, ki jih je lahko uporabil za pridobitev testnih primerov ostalih uporabnikov.
descriptions:
  - superTitle: Motivacija in cilji
    title: Idejna zasnova
    content: >-
      Motivacija za nalogo izhaja iz potrebe po večjem nadzoru nad kakovostjo
      testnih primerov, saj so le-ti ključni za preverjanje znanja študentov. V
      trenutnem sistemu je priprava testnih primerov pogosto neenakomerno
      porazdeljena, kar vodi do neenakomerne obremenitve med študenti in
      pedagoškimi delavci. Poleg tega se pogosto pojavljajo težave z
      nepravilnimi ali ponavljajočimi se testnimi primeri, kar zmanjšuje
      učinkovitost učenja. 


      Cilj diplomske naloge je bil **razviti sistem, ki bi omogočil enostavno izmenjavo testnih primerov med študenti**, s čimer bi se **izboljšala kakovost testiranja** in **pravična delitev bremena priprave** testnih primerov. Sistem naj bi omogočal tudi **avtomatsko preverjanje pravilnosti** in **podobnosti testnih** primerov, kar bi dodatno prispevalo k izboljšanju kakovosti izobraževalnega procesa.
  - superTitle: Mikrostoritvena arhitektura
    title: Uporabljene tehnologije
    content: >-
      Celoten sistem je razvit na podlagi mikrostoritvene arhitekture, pri čemer
      posamezne mikrostoritve opravljajo svojo primarno nalogo, medsebojno pa
      komunicirajo preko internih in eksternih REST API klicev.


      ![](/img/exchangeapp-01.png)


      Čelni del sistema je implementiran v **Angularju**, kar omogoča dinamično in odzivno uporabniško izkušnjo. Uporabniški vmesnik je oblikovan z uporabo **CSS ogrodja Bulma**, ki omogoča hitro in enostavno oblikovanje spletnih strani. **Preko uporabniškega vmesnika lahko uporabniki dostopajo do vseh operacij sistema**.


      ![](/img/exchangeapp-02.png)


      ![](/img/exchangeapp-06.png)


      Zaledni del sistema je implementiran z uporabo **Spring Boot**, ki je robusten okvir za razvoj mikrostoritev v Javi. Spring Boot omogoča hitro in enostavno konfiguracijo ter integracijo z različnimi podatkovnimi bazami in drugimi storitvami. **Zaledni del sistema vključuje različne storitve, ki medsebojno komunicirajo preko REST vmesnika**, kar omogoča modularnost in skalabilnost sistema.


      ![](/img/exchangeapp-05.png)


      **Sistem uporablja dve podatkovni bazi, MongoDB in MariaDB**. MongoDB je dokumentno usmerjena podatkovna baza, ki omogoča shranjevanje podatkov v obliki JSON dokumentov. To omogoča fleksibilno in hitro shranjevanje ter iskanje podatkov. MariaDB je relacijska podatkovna baza, ki temelji na MySQL in omogoča shranjevanje strukturiranih podatkov. Kombinacija obeh podatkovnih baz omogoča učinkovito shranjevanje in iskanje podatkov glede na različne potrebe sistema. Upravljanje in vzdrževanje podatkovnih baz v celoti poteka preko zalednega sistema z uporabo **Hibernate**.
  - superTitle: Arhitektura sistema
    title: Načrt in implementacija
    content: >-
      Informacijski sistem temelji na mikrostoritveni arhitekturi, kjer so
      posamezne komponente sistema medsebojno neodvisne in komunicirajo preko
      REST vmesnika. Mikrostoritvena arhitektura omogoča enostavno skaliranje in
      vzdrževanje sistema, saj se lahko posamezne komponente razvijajo,
      testirajo in nameščajo neodvisno ena od druge. Sistem omogoča registracijo
      in prijavo uporabnikov, kar zagotavlja varnost in zasebnost podatkov.
      Uporabniki lahko dodajajo in upravljajo predmete ter naloge, kar omogoča
      prilagodljivost in enostavno upravljanje vsebine. Avtomatsko preverjanje
      pravilnosti in podobnosti testnih primerov zagotavlja, da so testni
      primeri kakovostni in ne vsebujejo napak ali podvajanj.


      ![](/img/exchangeapp-03.png)


      ![](/img/exchangeapp-04.png)
  - superTitle: Uporaba sistema
    title: Delovanje sistema v praksi
    content: >-
      Sistem omogoča študentom, da za vsak oddan testni primer pridobijo žetone,
      ki jih lahko uporabijo za nakup dodatnih testnih primerov. Ta mehanizem
      **spodbuja študente k aktivnemu sodelovanju in prispevanju k skupni bazi
      testnih primerov**. 


      Pedagoški delavci imajo vpogled v testne primere študentov, kar jim omogoča spremljanje razvoja znanja pri predmetu in prilagajanje učnega načrta glede na potrebe študentov. Sistem omogoča tudi enostavno iskanje in filtriranje testnih primerov, kar olajša uporabo in upravljanje sistema. Poleg tega sistem omogoča avtomatsko generiranje poročil o uspešnosti študentov, kar prispeva k boljši analizi in spremljanju napredka.


      ![](/img/exchangeapp-07.png)


      ![](/img/exchangeapp-08.png)


      ![](/img/exchangeapp-09.png)


      ![](/img/exchangeapp-10.png)


      ![](/img/exchangeapp-11.png)


      ![](/img/exchangeapp-12.png)


      ![](/img/exchangeapp-13.png)


      ![](/img/exchangeapp-14.png)


      ![](/img/exchangeapp-15.png)
  - superTitle: Zaključek in rezultati
    title: Kaj smo dosegli
    content: >-
      Implementacija sistema je **uspešno rešila težave trenutnega sistema
      testiranja rešitev**. Sistem omogoča pravično delitev bremena priprave
      testnih primerov, kar zmanjšuje obremenitev posameznih študentov in
      pedagoških delavcev. 


      Izboljšana kakovost testiranja prispeva k boljši pripravi študentov na izpite in druge oblike preverjanja znanja. **Sistem omogoča tudi boljši nadzor nad razvojem znanja študentov**, saj pedagoški delavci lahko spremljajo napredek in prilagajajo učni načrt glede na potrebe študentov. Poleg tega sistem omogoča enostavno upravljanje in iskanje testnih primerov, kar prispeva k večji učinkovitosti in preglednosti izobraževalnega procesa.
---
