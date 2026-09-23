# Przepisy Piętro Cafe — jedno źródło

**`przepisy.html` to JEDYNE aktualne źródło przepisów.** 121 przepisów
w 11 kategoriach. Ta sama strona służy pracownikom na telefonach.

Nie zakładaj drugiej listy. Wcześniej istniały trzy równoległe kopie
(`SOGA_mojPOS/receptury/data.json`, `pietrocafe_inventory.html`, tabele
w Supabase) i różniły się między sobą — przez to np. „Herbata z Prądem"
wyglądała na przepis, którego nie ma. Wszystkie zostały wycofane.

## Jak dodać przepis

W `przepisy.html` znajdź `const DRINKS = [` i dopisz na końcu tablicy:

```js
,{id:174,name:"Nazwa",category:"kategoria",icon:"☕",tags:["tag1","tag2"],
  variants:[{label:null,ingredients:["Naczynie","30ml czegoś"],
  steps:["Krok pierwszy.","Krok drugi."]}]}
```

- `id` — kolejny wolny numer, nie może się powtórzyć
- `category` — jedna z: `kawy`, `kawy_mrozone`, `herbaty`, `herbaty_mrozone`,
  `lemoniady`, `soki_smoothie`, `czekolady`, `koktajle`, `grzance`, `shoty`, `kuchnia`
- `variants` — gdy napój ma warianty (mały/duży), dodaj kolejne obiekty z `label`
- `image` w wariancie jest opcjonalny: `image:"zdjecia przepisy/nazwa.jpg"`

Nową kategorię trzeba dopisać też jako przycisk:
`<button class="cat-btn" data-cat="nazwa">🔥 Nazwa</button>`

## Archiwum

`backup/` — stare wersje strony. Nie są linkowane z `index.html` i nie służą
do pracy.
