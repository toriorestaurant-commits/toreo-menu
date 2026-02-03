// menuData.ts
// --- Type Definitions ---
export type MenuItem = {
  plat: string;
  description: string;
  prixDA: number | string;
  imageUrl: string; // Static URL for later use
};

export type SubCategory = {
  name: string;
  items: MenuItem[];
};

export type SecondLevelCategory = {
  name: string;
  subCategories: SubCategory[];
};

export type MainCategory = {
  name: string;
  categories: SecondLevelCategory[];
};

// --- Data Content ---
export const menuData: MainCategory[] = [
  {
    name: "Plats",
    categories: [
      {
        name: "Premier pas dans l’arène",
        subCategories: [
          {
            name: "Entrées",
            items: [
              {
                plat: "Burrata du Torero",
                prixDA: 1700,
                description:
                  "Burrata crémeuse, tomates cerises, roquette fraîche et pesto maison.",
                imageUrl: "/menu/burrata.jpg",
              },
              {
                plat: "Salade au poulet fumé",
                prixDA: 1400,
                description:
                  "Poulet fumé, salade verte, tomates, fromage et sauce maison.",
                imageUrl: "/menu/salade-poulet.jpg",
              },
              {
                plat: "Bacon salade",
                prixDA: 1400,
                description:
                  "Salade verte, bacon croustillant, tomates cerises et sauce maison.",
                imageUrl: "/menu/bacon-salade.jpg",
              },
              {
                plat: "Omelette espagnole au chorizo",
                prixDA: 1200,
                description:
                  "Omelette au four garnie de chorizo, pommes de terre et oignons.",
                imageUrl: "/menu/omelette-chorizo.jpg",
              },
            ],
          },
        ],
      },

      {
        name: "Un instant de fraîcheur",
        subCategories: [
          {
            name: "Pâtes & Riz",
            items: [
              {
                plat: "Ravioli crème champignons",
                prixDA: 2000,
                description:
                  "Ravioli farcis nappés d’une sauce crémeuse aux champignons.",
                imageUrl: "/menu/ravioli.jpg",
              },
              {
                plat: "Linguine aux fruits de mer",
                prixDA: 2400,
                description:
                  "Linguine aux calamars, crevettes et moules, sauce légèrement relevée.",
                imageUrl: "/menu/linguine.jpg",
              },
              {
                plat: "Riz jarret de bœuf",
                prixDA: 2500,
                description:
                  "Riz parfumé servi avec un jarret de bœuf fondant.",
                imageUrl: "/menu/riz-jarret.jpg",
              },
              {
                plat: "Arroz negro",
                prixDA: 2700,
                description:
                  "Riz noir à l’encre de seiche, fruits de mer et touche méditerranéenne.",
                imageUrl: "/menu/arroz-negro.jpg",
              },
              {
                plat: "Arroz con gambas",
                prixDA: 2700,
                description:
                  "Riz sauté aux gambas, ail et persil.",
                imageUrl: "/menu/arroz-gambas.jpg",
              },
            ],
          },
        ],
      },

      {
        name: "La Fiesta del Carnet",
        subCategories: [
          {
            name: "Grillades & Viandes",
            items: [
              {
                plat: "Short ribs",
                prixDA: 2900,
                description:
                  "Travers de bœuf mijotés et grillés.\nAccompagnements (2 au choix) : frites maison, légumes sautés, riz parfumé, pommes grenaille.\nSupplément sauce : +300 DA.",
                imageUrl: "/menu/short-ribs.jpg",
              },
              {
                plat: "Château brillant de bœuf",
                prixDA: 3200,
                description:
                  "Pièce de bœuf tendre et savoureuse grillée à la perfection.\nAccompagnements (2 au choix) : frites maison, légumes sautés, riz parfumé, pommes grenaille.\nSupplément sauce : +300 DA.",
                imageUrl: "/menu/chateau-boeuf.jpg",
              },
              {
                plat: "Pavé de saumon",
                prixDA: 2800,
                description:
                  "Pavé de saumon grillé, sauce légère et légumes de saison.",
                imageUrl: "/menu/saumon.jpg",
              },
              {
                plat: "Loup de mer farci au dersa",
                prixDA: 3000,
                description:
                  "Poisson entier farci à la dersa, cuit au four, saveurs méditerranéennes.",
                imageUrl: "/menu/loup-mer.jpg",
              },
              {
                plat: "Pollo loco",
                prixDA: 2300,
                description:
                  "Poulet mariné et grillé, sauce épicée maison.\nAccompagnements (2 au choix) : frites maison, légumes sautés, riz parfumé.",
                imageUrl: "/menu/pollo-loco.jpg",
              },
            ],
          },
        ],
      },

      {
        name: "Steak House & Burgers",
        subCategories: [
          {
            name: "Burgers",
            items: [
              {
                plat: "Mushroom Burger",
                prixDA: 1900,
                description:
                  "Steak haché, champignons sautés, fromage, salade et sauce maison.",
                imageUrl: "/menu/mushroom-burger.jpg",
              },
              {
                plat: "Burger Torero",
                prixDA: 2100,
                description:
                  "Steak haché, fromage fondant, bacon, salade et sauce signature.",
                imageUrl: "/menu/burger-torero.jpg",
              },
            ],
          },
        ],
      },

      {
        name: "Douceurs finales",
        subCategories: [
          {
            name: "Desserts",
            items: [
              {
                plat: "Bomba choco",
                prixDA: 1600,
                description:
                  "Gâteau au chocolat fondant avec cœur coulant.",
                imageUrl: "/menu/bomba-choco.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Boisson",
    categories: [
      {
        name: "L'Esprit de la Corrida",
        subCategories: [
          {
            name: "Boissons Fraîches",
            items: [
              { plat: "Exotique mangue", description: "Mangue, purée de fruit de la passion, jus d'orange.", prixDA: 800, imageUrl: "/menu/exotique-mangue" },
              { plat: "Cocktail de fruits", description: "Un mélange de fruits de saison.", prixDA: 700, imageUrl: "/menu/cocktail-de-fruits" },
              { plat: "Velvet Sunset", description: "Pêche, abricot, yaourt nature, sirop de pêche.", prixDA: 800, imageUrl: "/menu/velvet-sunset" },
              { plat: "Watermelon", description: "Pastèque, citron, menthe fraîche, coulis de fraise, boule de glace vanille.", prixDA: 900, imageUrl: "/menu/watermelon" }
            ]
          },
          {
            name: "Mojitos",
            items: [
              { plat: "Mojito traditionnel", description: "Citron vert frais, menthe, sucre de canne, limonade.", prixDA: 600, imageUrl: "/menu/mojito-traditionnel" },
              { plat: "Mojito mangue passion", description: "Mangue, purée de fruit de la passion, citron vert, menthe.", prixDA: 700, imageUrl: "/menu/mojito-mangue-passion" },
              { plat: "Mojito pastèque menthe", description: "Pastèque, menthe, citron vert, limonade.", prixDA: 700, imageUrl: "/menu/mojito-pasteque-menthe" },
              { plat: "Bleu wave", description: "Citron vert, myrtille, crème de coco, bleu curaçao, menthe fraîche, limonade.", prixDA: 800, imageUrl: "/menu/bleu-wave" }
            ]
          },
          {
            name: "Détox",
            items: [
              { plat: "Sunrise boost", description: "Carotte, orange, gingembre, citron, miel.", prixDA: 850, imageUrl: "/menu/sunrise-boost" },
              { plat: "Pink flush", description: "Betterave, fraise, citron, pomme.", prixDA: 700, imageUrl: "/menu/pink-flush" },
              { plat: "Golden glow", description: "Mangue, curcuma, gingembre, lait de coco.", prixDA: 700, imageUrl: "/menu/golden-glow" },
              { plat: "Green power", description: "Kiwi, pomme, datte, graines de chia.", prixDA: 900, imageUrl: "/menu/green-power" }
            ]
          },
          {
            name: "Mocktails",
            items: [
              { plat: "Pina colada", description: "Ananas, crème de coco, lait de coco.", prixDA: 800, imageUrl: "/menu/pina-colada" },
              { plat: "Green oasis", description: "Jus d'ananas, bleu curaçao, jus de citron, crème de coco.", prixDA: 700, imageUrl: "/menu/green-oasis" },
              { plat: "Mango matcha", description: "Purée de mangue, glaçons, lait frais, matcha.", prixDA: 800, imageUrl: "/menu/mango-matcha" },
              { plat: "Marbella vibes", description: "Fraise, jus de citron, jus d'ananas, crème de coco.", prixDA: 700, imageUrl: "/menu/marbella-vibes" },
              { plat: "Gypsy drink", description: "Jus d'orange, sirop de grenadine, bleu curaçao.", prixDA: 600, imageUrl: "/menu/gypsy-drink" }
            ]
          },
          {
            name: "Jus Nature",
            items: [
              { plat: "Jus d'orange nature", description: "", prixDA: 600, imageUrl: "/menu/jus-dorange-nature" },
              { plat: "Jus de citron menthe fraîche", description: "", prixDA: 600, imageUrl: "/menu/jus-de-citron-menthe-fraiche" },
              { plat: "Limonade brésilienne", description: "Citron, eau, lait concentré, sucre roux (en carafe).", prixDA: 1600, imageUrl: "/menu/limonade-bresilienne" }
            ]
          },
          {
            name: "Boissons Chaudes",
            items: [
              { plat: "Café espresso", description: "", prixDA: 300, imageUrl: "/menu/cafe-espresso" },
              { plat: "Café americano", description: "", prixDA: 300, imageUrl: "/menu/cafe-americano" },
              { plat: "Café affogato", description: "", prixDA: 500, imageUrl: "/menu/cafe-affogato" },
              { plat: "Café gourmand", description: "", prixDA: 600, imageUrl: "/menu/cafe-gourmand" },
              { plat: "Thé à la menthe maison", description: "", prixDA: 250, imageUrl: "/menu/the-a-la-menthe-maison" },
              { plat: "Infusion stimulante", description: "Hibiscus séché, cannelle moulue, clou de girofle.", prixDA: 500, imageUrl: "/menu/infusion-stimulante" },
              { plat: "Infusion tonique", description: "Thym, verveine, romarin, citron, miel.", prixDA: 500, imageUrl: "/menu/infusion-tonique" },
              { plat: "Infusion détox", description: "Pétales de rose, zeste de citron, miel.", prixDA: 500, imageUrl: "/menu/infusion-detox" }
            ]
          },
          {
            name: "Autres Boissons",
            items: [
              { plat: "Soda", description: "", prixDA: 250, imageUrl: "/menu/soda" },
              { plat: "Eau minérale", description: "PM 100 / GM 200", prixDA: "PM 100 / GM 200", imageUrl: "/menu/eau-minerale" },
              { plat: "Eau Pétillante", description: "PM 100", prixDA: "PM 100", imageUrl: "/menu/eau-petillante" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dessert",
    categories: [
      {
        name: "Desserts",
        subCategories: [
          {
            name: "Les douceurs",
            items: [
              { plat: "Banoffee Revisitée", description: "Caramel onctueux & banane fondante. Interprétation moderne : crème légère, banane confite et caramel maison, sur un crumble beurré au parfum subtil de vanille.", prixDA: 1300, imageUrl: "/menu/banoffee-revisitee.jpg" },
              { plat: "Le mensonge rouge", description: "Sphère noire fondante qui s'ouvre sur une mousse au chocolat pimentée, sublimée par la fraîcheur des fruits rouges, un coulis au chocolat profond et un crumble doré.", prixDA: 1400, imageUrl: "/menu/le-mensonge-rouge.jpg" },
              { plat: "Le baba exotique revisité", description: "Rhüm vibrant et fruit solaire, un voyage exotique entre moelleux, chaleur et fraîcheur.", prixDA: 1400, imageUrl: "/menu/le-baba-exotique-revisite.jpg" },
              { plat: "Le Pavlova rouge-cœur coulant framboise", description: "Une meringue craquante, crème légère et un cœur intense de framboise, fraise, myrtille. Une explosion de fraîcheur et d'élégance.", prixDA: 1500, imageUrl: "/menu/le-pavlova-rouge-coeur-coulant-framboise.jpg" },
              { plat: "Bomba Choco – l'Explosion Gourmande", description: "À partager. Mousse au chocolat onctueuse, brownie fondant, biscuit salé croustillant, duo de glaces artisanales, crème anglaise et coulis de framboise. Le tout se révèle dans un choc contrôlé sur la table.", prixDA: 2200, imageUrl: "/menu/bomba-choco-lexplosion-gourmande.jpg" },
              { plat: "Le classique fondant au chocolat", description: "Douceur et intensité servi avec une glace vanille.", prixDA: 1000, imageUrl: "/menu/le-classique-fondant-au-chocolat.jpg" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Café",
    categories: [
      {
        name: "Café Toréo",
        subCategories: [
          {
            name: "BOISSONS FROIDES",
            items: [
              {
                plat: "Ice latte vanille",
                description: "Saveur vanille premium, café léger, glace vanille.",
                prixDA: 900,
                imageUrl: "/menu/ice-latte-vanille"
              },
              {
                plat: "Caramelo toreo",
                description: "Frappuccino au caramel beurre salé, sauce caramel en spirale, chantilly.",
                prixDA: 700,
                imageUrl: "/menu/caramelo-toreo"
              },
              {
                plat: "Over shakerato",
                description: "Frappé très caféiné, deux espressos versés dessus.",
                prixDA: 500,
                imageUrl: "/menu/over-shakerato"
              },
              {
                plat: "Iced caramel macchiato",
                description: "Lait froid, glace, espresso versé dessus, filet de caramel.",
                prixDA: 700,
                imageUrl: "/menu/iced-caramel-macchiato"
              },
              {
                plat: "Toreo gold frappe",
                description: "Frappuccino vanille, caramel doré, topping, éclat d’amande doré.",
                prixDA: 800,
                imageUrl: "/menu/toreo-gold-frappe"
              },
              {
                plat: "Ice coffee",
                description: "Espresso, glaçons (ou noisette).",
                prixDA: 600,
                imageUrl: "/menu/ice-coffee"
              },
              {
                plat: "Affogato",
                description: "",
                prixDA: 500,
                imageUrl: "/menu/affogato-cafe"
              },
              {
                plat: "Iced the",
                description: "Pêche ou Fraise.",
                prixDA: 500,
                imageUrl: "/menu/iced-the"
              }
            ]
          },
          {
            name: "BOISONS CHAUDES",
            items: [
              {
                plat: "Espresso",
                description: "",
                prixDA: 300,
                imageUrl: "/menu/espresso-cafe"
              },
              {
                plat: "Americano",
                description: "",
                prixDA: 300,
                imageUrl: "/menu/americano-cafe"
              },
              {
                plat: "Cappuccino",
                description: "",
                prixDA: 400,
                imageUrl: "/menu/cappuccino"
              },
              {
                plat: "Spanish latte",
                description: "",
                prixDA: 400,
                imageUrl: "/menu/spanish-latte"
              },
              {
                plat: "Cappuccino caramel",
                description: "",
                prixDA: 500,
                imageUrl: "/menu/cappuccino-caramel"
              },
              {
                plat: "Macchiato",
                description: "",
                prixDA: 400,
                imageUrl: "/menu/macchiato"
              },
              {
                plat: "Mochaccino",
                description: "",
                prixDA: 500,
                imageUrl: "/menu/mochaccino"
              },
              {
                plat: "Hot chocolat",
                description: "",
                prixDA: 600,
                imageUrl: "/menu/hot-chocolat"
              },
              {
                plat: "Infusion tonique",
                description: "Thym, verveine, romarin, citron, miel.",
                prixDA: 500,
                imageUrl: "/menu/infusion-tonique-cafe"
              },
              {
                plat: "Infusion détox",
                description: "Pétales de rose, zeste de citron, miel.",
                prixDA: 500,
                imageUrl: "/menu/infusion-detox-cafe"
              },
              {
                plat: "Thé à la menthe maison",
                description: "",
                prixDA: 250,
                imageUrl: "/menu/the-a-la-menthe-maison-cafe"
              }
            ]
          },
          {
            name: "DESSERTS",
            items: [
              {
                plat: "Brioche perdue",
                description: "Aux pommes confites, servie sur un lit de caramel beurre salé, une boule de glace gousse de vanille, noisette torréfiée.",
                prixDA: 1000,
                imageUrl: "/menu/brioche-perdue"
              },
              {
                plat: "Crêpe traditionnelle",
                description: "Moelleuse aux crèmes pâtissières brûlée, confiture de fraise, sirop d’érable, garnie de fraises fraîches.",
                prixDA: 900,
                imageUrl: "/menu/crepe-traditionnelle"
              },
              {
                plat: "Pancake",
                description: "Au chocolat noir et caramel beurre salé et aux fruits rouges, concassé de pistache, chantilly.",
                prixDA: 1200,
                imageUrl: "/menu/pancake-chocolat-caramel"
              },
              {
                plat: "San Sébastian traditionnel",
                description: "Avec son coulis de chocolat praliné.",
                prixDA: 1000,
                imageUrl: "/menu/san-sebastian"
              },
              {
                plat: "Gaufre",
                description: "Aux bananes caramélisées, caramel beurre salé, chantilly, servie avec une boule de glace noisette.",
                prixDA: 1000,
                imageUrl: "/menu/gaufre-banane-caramel"
              },
              {
                plat: "Banofee revisitée",
                description: "",
                prixDA: 1300,
                imageUrl: "/menu/banoffee-revisitee-cafe"
              },
              {
                plat: "Gâteaux selon la disponibilité",
                description: "",
                prixDA: 500,
                imageUrl: "/menu/gateau-disponibilite-cafe"
              }
            ]
          }
        ]
      }
    ]
  }
];