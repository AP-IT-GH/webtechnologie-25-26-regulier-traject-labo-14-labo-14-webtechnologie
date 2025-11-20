# Oefeningen uitleg labo 14

Zorg dat je de volgende folder structuur volgt:

```
webtechnologie/
├─ labo-01/
│  ├─ oefening-01/
│  │  ├─ index.html
│  │  ├─ images/
│  │  │  ├─ image-1.jpg
│  │  │  └─ image-n.jpg
│  │  ├─ css/
│  │  │   ├─ reset.css
│  │  │   └─ style.css
│  │  └─ js/
│  │     └─ script.js
│  ├─ oefening-02/
│  └─ oefening-n/
├─ labo-02/
└─ labo-n/
```

- Gebruik steeds JS modules om globale variabelen te vermijden (`<script type="module" src="./path/to/script.js" defer></script>`)
- Zet je Javascript file steeds in strict mode (`"use strict"`);
- Volg de [Coding Guidelines](https://apwt.gitbook.io/webtechnologie/coding-guidelines)

## Oefening 1: Hello World!

### Leerdoelen

- String interpolatie
- Beslissingen maken (conditionals)

### Functionele analyse

Het programma leest een naam, achternaam en leeftijd in en toont de informatie enkel als de invoer correct is.

### Technische analyse

Schrijf JavaScript dat:

1. Drie variabelen inleest met behulp van de prompt-functie: voornaam, achternaam en leeftijd.
2. Controleert dat naam en achternaam niet leeg zijn.
3. Controleert dat de leeftijd tussen 12 en 60 jaar ligt.
4. Geeft passende meldingen bij ongeldige invoer:
   - **Naam/Achternaam ontbreekt:** "Vul zowel voornaam als achternaam in!"
   - **Leeftijd niet tussen 12 en 60:** "U behoort niet tot de gezochte leeftijdsklasse!"
5. Vormt de boodschap correct en toont deze met `console.log()`.

> **TIP**: de prompt-functie zal altijd een string teruggeven, aan jou om deze input om te zetten naar een geheel nummer mbhv. de parseInt functie.

## Oefening 2: Schrikkeljaar

#### Leerdoelen

- Beslissingen maken

#### Functionele analyse

Het programma vraagt de gebruiker om een jaartal en jouw programma bepaalt of het een schrikkeljaar is.

#### Technische analyse

1. Vraag een gebruiker om een jaartal met de prompt-functie.
2. Het programma bepaalt of het een schrikkeljaar is volgens de regels:
   - Een jaar is een schrikkeljaar als het deelbaar is door **4**,
   - Behalve als het deelbaar is door **100**, tenzij het ook deelbaar is door **400**.
3. Zet volgende flowchart om in code: ![flowchart](./flowchart-schrikkeljaar.png)

## Oefening 3: Simpele Rekenmachine (if-statements)

#### Leerdoelen

- Beslissingen
- Geneste `if`-statements

#### Functionele analyse

Het programma voert een eenvoudige berekening uit met twee getallen en een operator (`+`, `-`, `*`, `/`).

#### Technische analyse

1. Vraag de gebruiker eerst om twee getallen met de prompt-functie.
2. Vraag de gebruiker daarna om een operator.
3. Gebruik `if`-statements om de juiste berekening uit te voeren.
4. Voer een controle uit zodat er niet door **0** wordt gedeeld.
5. Toon een foutmelding bij een ongeldige operator.

## Oefening 4: Simpele Rekenmachine (switch-case)

#### Leerdoelen

- Beslissingen
- Gebruik van `switch`

#### Functionele analyse

Zelfde opdracht als oefening 3, maar nu met een `switch`-statement.

#### Technische analyse

1. Gebruik een `switch`-constructie voor de operator-keuze.
2. Controleer dat delen door **0** niet gebeurt.
3. Toon een foutmelding bij een ongeldige operator.

## Oefening 5: Days, Hours and Minutes

#### Leerdoelen

- Gebruik van de **modulo-operator**

#### Functionele analyse

Het programma simuleert een klok die een tijdstip berekent na optelling van een bepaalde duur.

#### Technische analyse

1. De gebruiker voert een **startuur** en **startminuten** in.
2. Twee extra variabelen bevatten de uren en minuten die moeten worden opgeteld.
3. Bereken het nieuwe tijdstip:
   - **Minuten overschrijden 60?** → Tel extra uren op.
   - **Uren overschrijden 24?** → Bereken hoeveel dagen erbij komen.
4. Geef de output correct weer:
   - "Dit tijdstip valt nog op dezelfde dag."
   - "Dit is het tijdstip **1 dag later**."
   - "Dit is het tijdstip **X dagen later**."

> **TIP**: Gebruik **modulo (`%`)** en `Math.floor()` voor de berekening.

## Oefening 6: Cijfer omzetten naar tekst

### Leerdoelen

- Switch-statements
- Beslissingen

### Functionele analyse

Een student krijgt een cijfer (0-10). Het programma zet dit cijfer om in een tekstuele beoordeling.

### Technische analyse

- Vraag een gebruiker om een cijfer tussen de 0 en 10 in te voeren via de prompt-functie
- Gebruik een switch-statement om het cijfer om te zetten naar:
  - 0-2: "Zeer slecht"
  - 3-4: "Onvoldoende"
  - 5-6: "Voldoende"
  - 7-8: "Goed"
  - 9-10: "Uitstekend"
- Als het cijfer buiten de 0-10 range ligt, geef dan een foutmelding.
- Toon het resultaat in de console.

## Oefening 7: Omrekenen van graden

### Leerdoelen

- Functies
- Rekenkundige operaties

### Functionele analyse

Schrijf een programma dat temperaturen kan omrekenen tussen Celsius en Fahrenheit.

### Technische analyse

- Vraag de gebruiker om een temperatuur en een eenheid (C of F).
- Gebruik een functie die:
  - Celsius omzet naar Fahrenheit met de formule: (C × 9/5) + 32
  - Fahrenheit omzet naar Celsius met de formule: (F - 32) × 5/9
- Toon de omgezette waarde in de console.
- Geef een foutmelding als de eenheid niet correct is ingevoerd.

## Oefening 8: Getal raden

### Leerdoelen

- Beslissingen
- Willekeurige getallen

### Functionele analyse

**Kies** zelf een getal tussen 1 en 10 en sla het op in een variabele `answer`. De gebruiker moet raden welk getal het is.

### Technische analyse

- Genereer een willekeurig getal tussen 1 en 10.
- Vraag de gebruiker om een gok met behulp van de prompt-functie.
- Controleer of het getal juist is:
  - Zo ja, toon: "Gefeliciteerd, je hebt het juiste getal geraden!"
  - Zo nee, toon: "Helaas, het juiste getal was X."
- Toon het resultaat in de console.

> **Tip**: Om een willekeurig getal te genereren kun je gebruik maken van de `Math.random()` functie. Deze functie zal altijd een kommagetal tussen 0 en 1 teruggeven (soms exact 0, maar nooit exact 1). Met de volgende functie kun je dit willekeurig kommagetal omzetten naar een geheel getal tussen twee getallen: `Math.floor(Math.random() * (maximumGetal - minimumGetal) + minimumGetal)`.

## Oefening 9: Maaltafelgenerator

### Leerdoelen

- Werken met een for-loop
- Wiskundige bewerkingen
- Variabelen declareren met let en const
- Werken met controlestructuren

### Functionele analyse

Je programma genereert op basis van een hardgecodeerde waarde een maaltafelreeks voor een bepaalde maaltafel met een vast aantal iteraties.

### Technische analyse

- Declareer een const genaamd `baseNumber` (het getal dat we telkens gaan vermenigvuldigen) en ken hier een getal aan toe.
- Declareer een const genaamd `numberOfIterations` (de lengte van de maaltafel) en ken hier een getal aan toe.
- Gebruik een stringvariabele om de maaltafel bij te houden.
- Gebruik een for-loop om de maaltafelreeks op te bouwen en voeg elk resultaat toe aan de string, gescheiden door een ", ".
- Print de maaltafel uit in de console.

## Oefening 10: Raster Generator

### Leerdoelen

- Werken met een for-loop
- Werken met strings
- Variabelen declareren met let en const

### Functionele analyse

Je programma genereert een raster van kruisjes op basis van hardgecodeerde waarden.

### Technische analyse

- Declareer een const `columns` (kolommen) en ken hier een getal aan toe.
- Declareer een const `rows` (rijen) en ken hier een getal aan toe.
- Gebruik een for-loop om de rijen te doorlopen.
- Gebruik een geneste for-loop om de kolommen te doorlopen.
- Print elke rij met kruisjes (`X`), gescheiden door een spatie.

---

## Oefening 11: Raad het Getal

### Leerdoelen

- Werken met een do-while-loop
- Werken met getallen
- Werken met controlestructuren

### Functionele analyse

Het programma laat de gebruiker een getal raden tussen 0 en 30. De invoer is hardcoded en wordt gecontroleerd in een loop.

### Technische analyse

- Stel een variabele `secretNumber` in op een vaste waarde.
- Gebruik een array met hardgecodeerde gokpogingen.
- Gebruik een do-while-loop om de ingevoerde waarde te controleren.
- Geef aan of het getal hoger of lager moet zijn.
- Stop zodra het juiste getal geraden is.

## Oefening 12: Som van Even Getallen

### Leerdoelen

- Werken met een for-loop
- Wiskundige bewerkingen
- Variabelen declareren met let en const

### Functionele analyse

Je programma berekent de som van alle even getallen tot en met een bepaalde hardgecodeerde grens.

### Technische analyse

- Declareer een const `limit` (de grens) en ken hier een getal aan toe.
- Declareer een variabele om de som bij te houden.
- Gebruik een for-loop om door de getallen te itereren.
- Controleer of het getal even is en tel het op bij de som.
- Print de uiteindelijke som uit.

## Oefening 13: Aftellen

### Leerdoelen

- Werken met een while-loop
- Werken met aftellussen
- Variabelen declareren met let en const

### Functionele analyse

Je programma telt af vanaf een hardcoded startwaarde tot nul en print bij elke stap een melding.

### Technische analyse

- Declareer een const `initialValue` (de startwaarde) en ken hier een getal aan toe.
- Gebruik een while-loop om af te tellen.
- Print bij elke iteratie het huidige getal.
- Stop zodra het getal nul bereikt.
