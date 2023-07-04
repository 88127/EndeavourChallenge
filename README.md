# EndeavourChallenge
Client-Side-Programming Assessment

Bij het maken van deze opdracht heb ik twee libraries gebruikt: jQuery en Select2. Ik heb deze gebruikt omdat jQuery goed samenwerkt met JavaScript. Select2 heb ik gebruikt voor de zoekbalk, omdat het gebaseerd is op jQuery.

De eerste stap bij het maken van het project was het maken van een verbinding met de API. Nadat ik de sleutel voor de Rijksmuseum API had aangevraagd, kon ik snel een verbinding maken.

Als tweede stap ben ik de informatie van de API gaan filteren. Dit heb ik gedaan met behulp van for loops, waarbij ik alleen de relevante informatie eruit heb gehaald. Samen met een foto heb ik deze informatie weergegeven op mijn indexpagina.

Vervolgens heb ik een tweede pagina genaamd "detail" gemaakt, die wordt getoond wanneer je op een kunstobject klikt. Ik heb de ID van het kunstobject in een URL parameter geplaatst, zodat ik het op de detailpagina opnieuw kon ophalen. Na het ophalen van de ID heb ik nog connectie gemaakt met de api maar dan met een anderen URL. Van deze url kreeg je meer specfieke informatie van het kunstobject. 

Nadat ik de informatie voor de detailpagina had gefilterd en weergegeven, ben ik de zoekbalk gaan maken.

Ik heb geprobeerd alle kunstenaars in de zoekbalk te plaatsen, maar er was geen gemakkelijke manier om die informatie uit de API te halen. Uiteindelijk heb ik de facetten gebruikt die je verkrijgt met een GET-request. Deze facetten heb ik allemaal in de zoekbalk geplaatst.

Tot slot heb ik een zoekfunctie toegevoegd voor kleuren. Hierbij heb ik een div toegevoegd die de gekozen kleur weergeeft
