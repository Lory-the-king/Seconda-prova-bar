const prodotti = [
  {
    id: 'aa589bbf-53d6-4432-8e27-7e10cc8de807',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Cotoletta',
    descrizione: 'Cotoletta di pollo, ketchup',
    prezzo: 2.3,
  },
  {
    id: '39bb1190-cf48-4069-83e1-4984d63e7582',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Hot Dog',
    descrizione: 'Wurstel, ketchup',
    prezzo: 2,
  },
  {
    id: '820bd902-cd7a-4414-8b8a-860861a28204',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Cordon Bleu',
    descrizione: 'Cordon bleu, insalata, formaggio',
    prezzo: 2.5,
  },
  {
    id: 'eae9c4af-cfd3-4655-b117-0abf4efef04c',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Casereccio',
    descrizione: 'Speck, formaggio, rucola, salsa rosa',
    prezzo: 2.5,
  },
  {
    id: '4cb43de1-767a-43fb-8882-81fa4a3d1a5a',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Kebab',
    descrizione: 'Kebab, pomodoro, insalata, salsa rosa',
    prezzo: 2.2,
  },
  {
    id: 'ed765c77-f5db-4a43-90fe-93d8609a9b9b',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Genovese',
    descrizione: 'Salsa tonnata, prosciutto cotto, formaggio',
    prezzo: 2.2,
  },
  {
    id: '51950c17-0d89-4faa-8933-b59e2391e5b1',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Primavera',
    descrizione: 'Salame, formaggio, peperoni, insalata',
    prezzo: 2.3,
  },
  {
    id: 'd212e51c-5aa4-41f6-a400-8e88c0764779',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Schiacciata',
    descrizione: 'Speck, porchetta, formaggio',
    prezzo: 2.5,
  },
  {
    id: 'f3ddc616-31eb-40c1-ad29-73ad56915dce',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Real',
    descrizione: 'Prosciutto cotto, formaggio, pomodoro',
    prezzo: 2.3,
  },
  {
    id: '946cbc8d-8677-4f12-8845-a3a2b7e3e206',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Tostone',
    descrizione: 'Prosciutto cotto, formaggio',
    prezzo: 2.5,
  },
  {
    id: '627b7b41-28be-45a8-9f87-d98d4c14f33b',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Piadina',
    descrizione: 'Prosciutto crudo, formaggio',
    prezzo: 2.2,
  },
  {
    id: '3e980570-fcd8-4e2b-9253-25566dc30b32',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Caprese',
    descrizione: 'Pomodoro, mozzarella, origano',
    prezzo: 1.3,
  },
  {
    id: '88eba2a4-6b44-4605-a2d0-a74d59205094',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Campagnolo',
    descrizione: 'Porchetta, formaggio, pomodoro, olive',
    prezzo: 2.3,
  },
  {
    id: 'bee85271-aa20-42f3-852d-047aedc13dc8',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Hamburgher',
    descrizione: 'Hamburgher di manzo, insalata, ketchup',
    prezzo: 2.5,
  },
  {
    id: '3b127abb-2d0b-404c-a6dd-c7f4bde74033',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Tramezzino',
    descrizione: 'Prosciutto, funghi',
    prezzo: 1.2,
  },
  {
    id: 'dffa5340-fcca-41d5-a261-3fa45da45607',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Tramezzino',
    descrizione: 'Caprese',
    prezzo: 1.2,
  },
  {
    id: '4cb7f6b1-c366-4168-81fd-77bb19f748aa',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Romano',
    descrizione: 'Porchetta, insalata, salsa tartara',
    prezzo: 2.3,
  },
  {
    id: '1a0e115e-b354-445f-981f-5bd07dfc1f34',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Tramezzino',
    descrizione: 'Bresaola, rucola',
    prezzo: 1.2,
  },
  {
    id: 'ef8f5579-1fd3-4f61-a2b5-34b81fa9395a',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Tramezzino',
    descrizione: 'Prosciutto, formaggio, insalata',
    prezzo: 1.2,
  },
  {
    id: 'e2a6b63b-2d77-4d56-aea6-7f52ce3c86c3',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Tramezzino',
    descrizione: 'Vegetariano',
    prezzo: 1.2,
  },
  {
    id: 'a063ae9f-9642-441d-b2b3-9c1746c9018d',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Vegetariano',
    descrizione: 'Verdure miste, formaggio',
    prezzo: 2.5,
  },
  {
    id: 'fb9caf42-2b0b-4e8e-9152-289d3ccfe38a',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Tirolese',
    descrizione: 'Speck, formaggio, funghi, insalata',
    prezzo: 2.3,
  },
  {
    id: '9259714c-45ef-477f-a17e-a03b940bfcd5',
    tipoprodotto: 'Pizza',
    nomeprodotto: 'Pizza Wurstel',
    descrizione: 'Pomodoro, mozzarella, wurstel',
    prezzo: 2,
  },
  {
    id: 'a5a875cf-a156-4d1b-9638-9ada2c2f65b9',
    tipoprodotto: 'Pizza',
    nomeprodotto: 'Pizza Salamino',
    descrizione: 'Pomodoro, mozzarella, salamino',
    prezzo: 2,
  },
  {
    id: 'b819c3ea-7c92-4c73-8dd9-86d40605a2e7',
    tipoprodotto: 'Pizza',
    nomeprodotto: 'Pizza Salsiccia',
    descrizione: 'Pomodoro, mozzarella, salsiccia',
    prezzo: 2,
  },
  {
    id: '85d1010b-218b-4b44-ae96-1d795fefcb7f',
    tipoprodotto: 'Pizza',
    nomeprodotto: 'Pizza Prosciutto',
    descrizione: 'Pomodoro, mozzarella, prosciutto',
    prezzo: 2,
  },
  {
    id: '1090acdc-5789-4cb0-954d-abff93ee965c',
    tipoprodotto: 'Panino',
    nomeprodotto: 'Messico',
    descrizione: 'Salame piccante, formaggio, insalata, salsa ayvar',
    prezzo: 2.3,
  },
  {
    id: 'dd254020-6858-40c3-8623-df268b47da55',
    tipoprodotto: 'Pizza',
    nomeprodotto: 'Pizza Speck&Brie',
    descrizione: 'Pomodoro, mozzarella, speck, brie',
    prezzo: 2,
  },
  {
    id: '557449c4-b1d0-409b-9dbc-3f48e147ee50',
    tipoprodotto: 'Pizza',
    nomeprodotto: 'Pizza Patatine',
    descrizione: 'Pomodoro, mozzarella, patatine',
    prezzo: 2,
  },
  {
    id: '15a16fd2-ea03-4aa8-a0e6-c6ce3b33b08e',
    tipoprodotto: 'Pizza',
    nomeprodotto: 'Pizza Margherita',
    descrizione: 'Pomodoro, mozzarella, origano',
    prezzo: 1.5,
  },
];

module.exports = prodotti;
