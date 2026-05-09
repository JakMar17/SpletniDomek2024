---
title: Aplikacija Majske igre (2026)
subtitle: Uradna mobilna aplikacija za Android in iOS
coverImage: /img/shot.png
highlights:
  - highlightTitle: Orodja
    highlightData:
      - Flutter
      - Angular
      - Spring Boot
      - Firebase
links:
  - linkTitle: Google Play
    linkUrl: https://play.google.com/store/apps/details?id=si.majskeigre.app
  - linkTitle: Apple AppStore
    linkUrl: https://apps.apple.com/us/app/majske-igre/id6759839164
abstract: Uraden mobilni klient Majskih iger
highlightIntro: >-
  Aplikacija Majske igre je uradna mobilna spremljevalka največjega študentskega
  festivala v Sloveniji, zasnovana za hitro, pregledno in zanesljivo spremljanje
  programa na telefonu.



  Uporabnikom Androida in iOS ponuja jasen pregled športnih, kulturnih in zabavnih dogodkov, koledarski pogled ter opise z lokacijami, poleg tega pa omogoča prijavo na potisna obvestila na dan posameznega dogodka.



  Za kulisami jo poganja namenski zaledni sistem, prek katerega lahko organizatorji v realnem času pošiljajo obvestila o spremembah in novostih, kar je prineslo bistveno bolj tekoče in takojšnje obveščanje udeležencev v primerjavi s preteklimi leti.
descriptions:
  - content: >-
      Majske igre so največji študentski dogodek v Sloveniji z več kot
      štiridesetletno tradicijo, ki vsako pomlad v Rožni dolini združi več kot
      30 športnih tekmovanj, okoli 20 kulturnih otočkov in štiri velike
      koncertne večere.


      Trenutna spletna stran dogodka sem zasnoval in implementiral v letu 2024, ko je po letih slabega delovanja stara spletna stran bila dokončno definirana kot neprimerna za nadlajnje vzdrževanje.


      Z željo po še bolj preglednem spremljanju programa in hitrem obveščanju o spremembah lokacij ter ur dogodkov sem bil **v letu 2026 povabljen še k pripravi uradne mobilne aplikacije za Majske igre**.


      Aplikacija je za uporabnike Androida in iOS zaživela aprila 2026 in že v prvem festivalskem letu zbrala okoli tisoč aktivnih uporabnikov, ki so program festivala prvič zares nosili v žepu.


      ![](/img/majske1.webp)
    superTitle: Preambula
    title: Ozadje razvoja
  - content: >-
      Mobilna aplikacija ponuja dostop do vseh informacij objavljenih na spletni
      strani na še preglednejši način, popolnoma prilagojen za manjše zaslone
      mobilnih naprav.


      Uporabnik lahko preko seznamov ali koledarja dostopa do celotnega programa, od jutranjih športnih turnirjev do večernih koncertov. Pri tem lahko dostopa do podrobnega opisa, ure, lokacije in podatkov glede prijave.


      Poseben del aplikacije je namenjen urniku info točke, kjer obiskovalci urejajo prijave in pridobivajo vse ključne informacije v živo ter dostop do kontaktov organizatorjev.


      ![](/img/majske2.webp)


      ![](/img/majske3.webp)


      ![](/img/majske4.webp)
    title: Oris funcionalnosti
    superTitle: Uporabniški vmesnik in funkcionalnosti
  - title: Potisna obvestila
    superTitle: Obveščanje o dogodkih in spremembah
    content: >-
      Ena največjih dodanih vrednosti aplikacije je tekoče in takojšnje
      obveščanje uporabnikov prek potisnih obvestil.


      Pri posameznem športnem in kulturnem dogodku se lahko uporabnik prijavi na prejem obvestila na dan dogodka, tako da ga telefon pravočasno opomni na začetek.


      Namesto da bi moral ves čas preverjati spletno stran ali družbena omrežja, udeleženec ključne informacije prejme neposredno na zaslon telefona in si lahko bolj mirno organizira svoj festivalski dan.


      Poleg tega aplikacija omogoča organizatorjem takojšnje sporočanje morebitnih sprememb, marketinških in drugih obvestil. Ta sporočila organizator pripravi preko implementiranega zalednega sistema, uporabnik pa je lahko obveščen nemudoma ali z zamikom.


      ![](/img/majske5.webp)
  - title: Zaledni sistem za obveščanje
    content: >-
      Za organizatorje prireditve je bil razvit namenski zaledni sistem, s
      katerim lahko v realnem času dodajajo obvestila in posodobitve ter jih
      pošiljajo neposredno v aplikacijo.


      Preko tega sistema lahko organizator pošilja obvestila v enega izmed 5 kanalov (zabava, šport, kultura, splošna obvestila in marketing) na katerega se uporabniki prijavijo ali odjavijo preko aplikacijie. Organizator tako obvešča uporabnike o spremembah lokacije, ur, pogojev udeležbe in drugih obvestilih.


      Prav tako lahko organizator preko sistema nastavi obvestila, ki se bodo poslala ob kasnejšem času.


      Tako aplikacija ni le pasivni prikaz programa, temveč živ komunikacijski kanal med organizatorji in udeleženci, ki omogoča, da se festival odvija bolj gladko in pregledno za vse.


      ![](/img/portfolio-mockup-laptop.jpg)
    superTitle: Nadzorna plošča za organizatorje
  - superTitle: Tehnična implementacija
    title: Načrt in implementacija
    content: >-
      Aplikacija je implementirana z ogrodjem Flutter, kar omogoča enotno
      platformo tako za naprave s sistemom Android kot naprave s sistemom iOS.
      Aplikacija večino podatkov (razen potisnih obvestila) prejme neposredno iz
      statičnih datotek JSON, ki so na voljo preko spletne strani.


      Zaledni sistem za organizatorje je implementiran z uporabo ogrodja Spring Boot za strežnik API in Angular za nadzorno ploščo.


      Obvestila se na naprave pošiljajo preko platforme Firebase Cloud Messaging.


      ![](/img/untitled-diagram.drawio.png)
  - superTitle: Statistika uporabe
    title: Uvedba sistema
    content: >-
      Aplikacija je bila uradno predstavljena v začetku meseca aprila, dober
      mesec pred začetkom Majskih iger. V mesecu maju je aplikacijo na obeh
      platformah uporabljalo približno 1000 uporabnikov, kar predstavlja
      približno sedmino vseh stanovalcev Študentskega doma Ljubljana, katerim so
      Majske igre prvotno namenjene.


      Za namen hitrega dosega željenih uporabnikov, smo na spletno stran dodali direktne povezave do aplikacije (Google Play in Apple AppStore). 


      Aplikacija v mesecu maju 2026 predstavlja približno četrtino skupnega obiska spletne strani in mobilne aplikacije, prav tako pa je opazno zmanjšanje uporabnikov, ki do spletne strani dostopajo preko mobilnih naprav.
---
