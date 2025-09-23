// src/data/algarve.ts

export const algarve = {
    region: {
      id: "algarve",
      name: "Algarve",
      country: "Portugal",
      capital: "Faro",
      zones: ["Barlavento (West)", "Sotavento (East)"],
      summary:
        "Southernmost region of Portugal; famous for beaches, tourism, and expat living; 16 municipalities; Faro is the capital with the main airport and university.",
    },
    municipalities: [
      { id: "faro", name: "Faro", mainCities: ["Faro", "Montenegro"] },
      { id: "lagos", name: "Lagos", mainCities: ["Lagos"] },
      { id: "lagoa", name: "Lagoa", mainCities: ["Lagoa", "Carvoeiro"] },
      { id: "albufeira", name: "Albufeira", mainCities: ["Albufeira"] },
      { id: "portimao", name: "Portimão", mainCities: ["Portimão", "Alvor"] },
      { id: "tavira", name: "Tavira", mainCities: ["Tavira", "Cabanas"] },
      { id: "loulo", name: "Loulé", mainCities: ["Loulé", "Quarteira", "Vilamoura"] },
      { id: "silves", name: "Silves", mainCities: ["Silves", "Armação de Pêra"] },
      { id: "olhao", name: "Olhão", mainCities: ["Olhão", "Fuseta"] },
      { id: "monchique", name: "Monchique", mainCities: ["Monchique"] },
      { id: "vila-do-bispo", name: "Vila do Bispo", mainCities: ["Sagres", "Vila do Bispo"] },
      { id: "aljezur", name: "Aljezur", mainCities: ["Aljezur"] },
      { id: "castro-marim", name: "Castro Marim", mainCities: ["Castro Marim"] },
      { id: "sao-bras", name: "São Brás de Alportel", mainCities: ["São Brás de Alportel"] },
      { id: "vila-real", name: "Vila Real de Santo António", mainCities: ["Vila Real", "Monte Gordo"] },
      { id: "alcoutim", name: "Alcoutim", mainCities: ["Alcoutim"] }
    ],
    landmarks: [
      { id: "benagil", name: "Benagil Cave", type: "cave", municipality: "Lagoa" },
      { id: "marinha", name: "Praia da Marinha", type: "beach", municipality: "Lagoa" },
      { id: "piedade", name: "Ponta da Piedade", type: "cliffs", municipality: "Lagos" },
      { id: "ria-formosa", name: "Ria Formosa Natural Park", type: "natural park", municipalities: ["Faro","Olhão","Tavira"] },
      { id: "cape-saint-vincent", name: "Cape St. Vincent", type: "cape", municipality: "Vila do Bispo" },
      { id: "foia", name: "Fóia Peak", type: "mountain", municipality: "Monchique" }
    ],
    institutions: {
      airports: [{ id: "fao", name: "Faro Airport (FAO)", city: "Faro" }],
      universities: [{ id: "ualg", name: "University of Algarve", campuses: ["Faro","Portimão"] }],
      hospitals: [
        { id: "h-faro", name: "Hospital de Faro", city: "Faro" },
        { id: "h-portimao", name: "Hospital de Portimão", city: "Portimão" }
      ],
      councils: [{ id: "amal", name: "AMAL - Intermunicipal Community of Algarve" }]
    },
    economy: [
      { sector: "tourism", summary: "Main driver: beaches, golf, resorts" },
      { sector: "real_estate", summary: "Expat homes, retirement, rentals" },
      { sector: "agriculture", summary: "Oranges, figs, carob, almonds" },
      { sector: "fishing", summary: "Coastal fishing, aquaculture" }
    ]
  };
  