// menuData.ts 

// --- Type Definitions --- 
export type MenuItem = { 
  plat: string; 
  description: string; 
  prixDA: number | string; 
  imageUrl: string; 
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
    name: "Plats (Menu Principal)", 
    categories: [ 
      { 
        name: "Premier pas dans l'arène", 
        subCategories: [ 
          { 
            name: "Un instant de fraîcheur", 
            items: [ 
              { 
                plat: "Salade au poulet fumé", 
                description: "Tranche de poulet fumé, mélange de laitue verte, roquette, huile d'olive, pomme confite, parmesan, tomates cerises, radis, crouton, œuf de caille, tapenade d'olive.", 
                prixDA: 1400, 
                imageUrl: "/menu/salade-au-poulet-fume" 
              }, 
              { 
                plat: "Bacon salade", 
                description: "Salade frisée, romaine, choux rouges, tranches fines de bâcon, champignons frais, fromage fondu maison, mayo épicée, maïs fumé, raisin sec, segment d'orange, œuf poché, olive noire.", 
                prixDA: 1500, 
                imageUrl: "/menu/bacon-salade.jpg" 
              }, 
              { 
                plat: "Buratta du Torero", 
                description: "Burrata servie sur un lit de tomates cerises confites, sauce pesto.", 
                prixDA: 1900, 
                imageUrl: "/menu/buratta-du-torero.jpg" 
              }, 
              { 
                plat: "Gambas tempura à la thaï", 
                description: "Mélange d'avocat et mangue aux arômes asiatiques, crevette sautée au lait de coco, purée de mangue.", 
                prixDA: 1800, 
                imageUrl: "/menu/gambas-tempura-a-la-thai.jpg" 
              } 
            ] 
          }, 
          { 
            name: "La charge du taureau (Classiques)", 
            items: [ 
              { 
                plat: "Trio de bruschetta", 
                description: "Bruschetta burrata/pesto, bruschetta chèvre/miel, bruschetta saumon fumé/ricotta.", 
                prixDA: 1700, 
                imageUrl: "/menu/trio-de-bruschetta.jpg" 
              }, 
              { 
                plat: "Trio de mini burger au bœuf", 
                description: "3 mini burgers garnis de steak haché, bécan, oignons croustillants, fromage fondu et sauce BBQ.", 
                prixDA: 1550, 
                imageUrl: "/menu/trio-de-mini-burger-au-boeuf.jpg" 
              }, 
              { 
                plat: "Trio de pastilla revisitée au poulet et amandes", 
                description: "Feuille de brick, touche sucrée salée aux épices douces.", 
                prixDA: 1300, 
                imageUrl: "/menu/trio-de-pastilla-revisitee-au-poulet-et-amandes" 
              }, 
              { 
                plat: "Taco beef", 
                description: "3 mini tacos de beef ribs garnis de purée d'avocat au citron, ananas, sauce habenero.", 
                prixDA: 2000, 
                imageUrl: "/menu/taco-beef.jpg" 
              } 
            ] 
          }, 
          { 
            name: "La charge du taureau (Incontournables)", 
            items: [ 
              { 
                plat: "Croustillant de calamar frais sauce tartare", 
                description: "Croustillant de calamar frais sauce tartare.", 
                prixDA: 1500, 
                imageUrl: "/menu/croustillant-de-calamar-frais-sauce-tartare.jpg" 
              }, 
              { 
                plat: "Os à la moelle rôtie au four au chorizo", 
                description: "Os à la moelle rôtie au four au chorizo.", 
                prixDA: 1400, 
                imageUrl: "/menu/os-a-la-moelle-rotie-au-four-au-chorizo" 
              }, 
              { 
                plat: "Table de tapas", 
                description: "Mix de charcuterie artisanale servis dans une planche, esprit fermier, à partager.", 
                prixDA: 1900, 
                imageUrl: "/menu/table-de-tapas.jpg" 
              }, 
              { 
                plat: "Empanadas au bœuf et maïs", 
                description: "Chaussons dorés à la pâte maison, garnis de bœuf mijoté aux épices douces, maïs fumé tendre et poivrons cuits au four.", 
                prixDA: 1500, 
                imageUrl: "/menu/empanadas-au-boeuf-et-mais" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "Le Cri du Torero", 
        subCategories: [ 
          { 
            name: "Pasta and Rice", 
            items: [ 
              { 
                plat: "Riz au four au jarret de boeuf", 
                description: "Riz au four à l'espagnole, jarret de bœuf glacé, l'ail, champignons frais, gremolata, servis avec une touche d'ailloli.", 
                prixDA: 2700, 
                imageUrl: "/menu/riz-au-four-au-jarret-de-boeuf.jpg" 
              }, 
              { 
                plat: "Arroz negro", 
                description: "Riz noir cuit dans un bouillon de poisson avec l'encre de seiche, accompagné de calamar, crevette, moules, et bar, servi avec une touche d'ailloli.", 
                prixDA: 2900, 
                imageUrl: "/menu/arroz-negro.jpg" 
              }, 
              { 
                plat: "Arroz con gambas", 
                description: "Riz au four à l'espagnole cuit dans un bouillon de crevette, accompagné de gambas, servi avec une touche d'ailloli.", 
                prixDA: 2900, 
                imageUrl: "/menu/arroz-con-gambas" 
              }, 
              { 
                plat: "Ravioli crème champignons", 
                description: "Ravioli fraîche farci de poulet fumé, ricotta, épinard, crème aux champignons, parmesan.", 
                prixDA: 2100, 
                imageUrl: "/menu/ravioli-creme-champignons.jpg" 
              }, 
              { 
                plat: "Linguine aux fruits de mer", 
                description: "Sauce tomate épicée, crevettes, moules, calamars, bar.", 
                prixDA: 2900, 
                imageUrl: "/menu/linguine-aux-fruits-de-mer" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "La Fiesta Del Carnet", 
        subCategories: [ 
          { 
            name: "Spécialité à la braise", 
            items: [ 
              { 
                plat: "Contre filet de boeuf (400g)", 
                description: "Servi avec salsa romesco et chimichurri.", 
                prixDA: 4000, 
                imageUrl: "/menu/contre-filet-de-boeuf-400g" 
              }, 
              { 
                plat: "Cœur d'entrecôte Aubrac (420g)", 
                description: "Servi avec salsa romesco et chimichurri.", 
                prixDA: 3800, 
                imageUrl: "/menu/coeur-dentrecote-aubrac-420g.jpg" 
              }, 
              { 
                plat: "Filet de bœuf (300g)", 
                description: "Tendre et savoureux. Servi avec salsa romesco et chimichurri.", 
                prixDA: 4000, 
                imageUrl: "/menu/filet-de-boeuf-300g" 
              }, 
              { 
                plat: "Churrasco", 
                description: "Brochette mixture de viande, saucisse façon chorizo, côtelette d'agneau, tranche de filet de bœuf, caille. Servi avec salsa romesco et chimichurri.", 
                prixDA: 3500, 
                imageUrl: "/menu/churrasco" 
              }, 
              { 
                plat: "Brochettes de poulet royale au tandoori et cajou", 
                description: "Servi avec salsa romesco et chimichurri.", 
                prixDA: 2200, 
                imageUrl: "/menu/brochettes-de-poulet-royale-au-tandoori-et-cajou.jpg" 
              } 
            ] 
          }, 
          { 
            name: "Le Feu de l'Arène", 
            items: [ 
              { 
                plat: "Tomahawk premium (1,4 kg)", 
                description: "Pour 2 ou 3 personnes", 
                prixDA: 12000, 
                imageUrl: "/menu/tomahawk-premium-14-kg" 
              }, 
              { 
                plat: "Bistecca alla Fiorentina", 
                description: "Pour 2 ou 3 personnes (morceau qui regroupe le faux filet et filet).", 
                prixDA: 14000, 
                imageUrl: "/menu/bistecca-alla-fiorentina" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "La Tentation du Torero", 
        subCategories: [ 
          { 
            name: "La Tentation du Torero", 
            items: [ 
              { 
                plat: "Short ribs", 
                description: "Marines et cuits au four pendant 8h, servis avec un risotto aux champignons parfumé à la sauce moka.", 
                prixDA: 3200, 
                imageUrl: "/menu/short-ribs.jpg" 
              }, 
              { 
                plat: "Carré d'agneau", 
                description: "Servie sur un lit de tilili fondant, nappée d'une sauce épicée.", 
                prixDA: 3500, 
                imageUrl: "/menu/cotelette-dagneau" 
              }, 
              { 
                plat: "Pollo Loco", 
                description: "Suprême de poulet rôti, servi sur un lit de légumes et crème de maïs.", 
                prixDA: 2200, 
                imageUrl: "/menu/pollo-loco.jpg" 
              }, 
              { 
                plat: "Loup de mer farci aux trois poivrons", 
                description: "", 
                prixDA: 2800, 
                imageUrl: "/menu/loup-de-mer-farci-aux-three-poivrons.jpg" 
              }, 
              { 
                plat: "Pavé de saumon", 
                description: "Laqué au miel et soja, servi avec un mélange de couscous revisité et velouté de carotte au lait de coco.", 
                prixDA: 3500, 
                imageUrl: "/menu/pave-de-saumon.jpg" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "Beefshi", 
        subCategories: [ 
          { 
            name: "Beefshi", 
            items: [ 
              { 
                plat: "Nigiri beef tartare", 
                description: "Tranche de filet de bœuf haché, gingembre, poireaux, sésame, sauce teriyaki et sriracha.", 
                prixDA: 1700, 
                imageUrl: "/menu/nigiri-beef-tartare" 
              }, 
              { 
                plat: "Nigiri pastrami", 
                description: "Tranche de pastrami fumé, gingembre, poireaux, sésame, sauce teriyaki et sriracha.", 
                prixDA: 1800, 
                imageUrl: "/menu/nigiri-pastrami.jpg" 
              }, 
              { 
                plat: "Maki beef tartare", 
                description: "8 pièces, tartare de bœuf, avocat, carotte, concombre.", 
                prixDA: 1700, 
                imageUrl: "/menu/maki-beef-tartare.jpg" 
              }, 
              { 
                plat: "Maki beef teriyaki", 
                description: "8 pièces, steak haché mariné, teriyaki, poireaux, avocat, carotte, concombre.", 
                prixDA: 1800, 
                imageUrl: "/menu/maki-beef-teriyaki" 
              }, 
              { 
                plat: "Uramaki beef tartare", 
                description: "8 pièces, tartare de bœuf mariné, avocat, carotte, concombre.", 
                prixDA: 1800, 
                imageUrl: "/menu/uramaki-beef-tartare" 
              }, 
              { 
                plat: "Uramaki beef tempura", 
                description: "8 pièces crunchy, steak haché mariné, fromage fondu, avocat, carotte, concombre.", 
                prixDA: 1800, 
                imageUrl: "/menu/uramaki-beef-tempura" 
              }, 
              { 
                plat: "Timaki", 
                description: "Cornet de sushi garni de tartare de bœuf mariné, crevette tempura, carotte, concombre, avocat.", 
                prixDA: 1900, 
                imageUrl: "/menu/timaki.jpg" 
              }, 
              { 
                plat: "Sushi burger", 
                description: "Galette de riz panée, steak haché cuit, sauce sriracha, crevette tempura, avocat, carotte, concombre.", 
                prixDA: 2000, 
                imageUrl: "/menu/sushi-burger" 
              } 
            ] 
          } 
        ] 
      } 
    ] 
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
              { plat: "Ice latte vanille", description: "Saveur vanille premium, café léger, glace vanille.", prixDA: 900, imageUrl: "/menu/ice-latte-vanille" }, 
              { plat: "Caramelo toreo", description: "Frappuccino au caramel beurre salé, sauce caramel en spirale, chantilly.", prixDA: 700, imageUrl: "/menu/caramelo-toreo" }, 
              { plat: "Over shakerato", description: "Frappé très caféiné, deux espressos versés dessus.", prixDA: 500, imageUrl: "/menu/over-shakerato" }, 
              { plat: "Iced caramel macchiato", description: "Lait froid, glace, espresso versé dessus, filet de caramel.", prixDA: 700, imageUrl: "/menu/iced-caramel-macchiato" }, 
              { plat: "Toreo gold frappe", description: "Frappuccino vanille, caramel doré, topping, éclat d’amande doré.", prixDA: 800, imageUrl: "/menu/toreo-gold-frappe" }, 
              { plat: "Ice coffee", description: "Espresso, glaçons (ou noisette).", prixDA: 600, imageUrl: "/menu/ice-coffee" }, 
              { plat: "Affogato", description: "", prixDA: 500, imageUrl: "/menu/affogato-cafe" }, 
              { plat: "Iced the", description: "Pêche ou Fraise.", prixDA: 500, imageUrl: "/menu/iced-the" } 
            ] 
          }, 
          { 
            name: "BOISONS CHAUDES", 
            items: [ 
              { plat: "Espresso", description: "", prixDA: 300, imageUrl: "/menu/espresso-cafe" }, 
              { plat: "Americano", description: "", prixDA: 300, imageUrl: "/menu/americano-cafe" }, 
              { plat: "Cappuccino", description: "", prixDA: 400, imageUrl: "/menu/cappuccino" }, 
              { plat: "Spanish latte", description: "", prixDA: 400, imageUrl: "/menu/spanish-latte" }, 
              { plat: "Cappuccino caramel", description: "", prixDA: 500, imageUrl: "/menu/cappuccino-caramel" }, 
              { plat: "Macchiato", description: "", prixDA: 400, imageUrl: "/menu/macchiato" }, 
              { plat: "Mochaccino", description: "", prixDA: 500, imageUrl: "/menu/mochaccino" }, 
              { plat: "Hot chocolat", description: "", prixDA: 600, imageUrl: "/menu/hot-chocolat" }, 
              { plat: "Infusion tonique", description: "Thym, verveine, romarin, citron, miel.", prixDA: 500, imageUrl: "/menu/infusion-tonique-cafe" }, 
              { plat: "Infusion détox", description: "Pétales de rose, zeste de citron, miel.", prixDA: 500, imageUrl: "/menu/infusion-detox-cafe" }, 
              { plat: "Thé à la menthe maison", description: "", prixDA: 250, imageUrl: "/menu/the-a-la-menthe-maison-cafe" } 
            ] 
          }, 
          { 
            name: "DESSERTS", 
            items: [ 
              { plat: "Brioche perdue", description: "Aux pommes confites, servie sur un lit de caramel beurre salé, une boule de glace gousse de vanille, noisette torréfiée.", prixDA: 1000, imageUrl: "/menu/brioche-perdue" }, 
              { plat: "Crêpe traditionnelle", description: "Moelleuse aux crèmes pâtissières brûlée, confiture de fraise, sirop d’érable, garnie de fraises fraîches.", prixDA: 900, imageUrl: "/menu/crepe-traditionnelle" }, 
              { plat: "Pancake", description: "Au chocolat noir et caramel beurre salé et aux fruits rouges, concassé de pistache, chantilly.", prixDA: 1200, imageUrl: "/menu/pancake-chocolat-caramel" }, 
              { plat: "San Sébastian traditionnel", description: "Avec son coulis de chocolat praliné.", prixDA: 1000, imageUrl: "/menu/san-sebastian" }, 
              { plat: "Gaufre", description: "Aux bananes caramélisées, caramel beurre salé, chantilly, servie avec une boule de glace noisette.", prixDA: 1000, imageUrl: "/menu/gaufre-banane-caramel" }, 
              { plat: "Banofee revisitée", description: "", prixDA: 1300, imageUrl: "/menu/banoffee-revisitee-cafe" }, 
              { plat: "Gâteaux selon la disponibilité", description: "", prixDA: 500, imageUrl: "/menu/gateau-disponibilite-cafe" } 
            ] 
          } 
        ] 
      } 
    ] 
  } 
];