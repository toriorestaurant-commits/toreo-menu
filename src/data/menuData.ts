// menuData.ts 
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
 
export const menuData: MainCategory[] = [ 
  { 
    name: "Plats (Menu Principal)", 
    categories: [ 
      { 
        name: "1. Un instant de fraîcheur", 
        subCategories: [ 
          { 
            name: "Salades", 
            items: [ 
              { 
                plat: "Salade au poulet fumé", 
                description: "Tranche de poulet fumé servi avec un mélange de laitue verte, roquette, huile d’olive, Pomme confite, parmesan, tomate cerise, radis, crouton, œuf de caille, tapenade d’olive", 
                prixDA: 1400, 
                imageUrl: "/menu/salade-au-poulet-fume" 
              }, 
              { 
                plat: "Toreo salade", 
                description: "Salade frisée, salade roumaine, choux rouges, champignons frais, fromage fondu maison, mayo épissée, mais fume, raisin sec, segment d’orange, œuf poche, olive noir, brie, thon, saumon fume, avocat", 
                prixDA: 1900, 
                imageUrl: "/menu/toreo-salade.jpg" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "2. TAPAS CHAUD", 
        subCategories: [ 
          { 
            name: "Sélection Tapas", 
            items: [ 
              { 
                plat: "Trio de pastilla revisitée au poulet et amandes", 
                description: "Feuille de brick, touche sucrée salée aux épices douces", 
                prixDA: 1400, 
                imageUrl: "/menu/trio-de-pastilla-revisitee-au-poulet-et-amandes" 
              }, 
              { 
                plat: "Croustillant de calamar frais sauce tartare", 
                description: "", 
                prixDA: 1500, 
                imageUrl: "/menu/croustillant-de-calamar-frais-sauce-tartare.jpg" 
              }, 
              { 
                plat: "Trio de mini burger", 
                description: "3 mini burger garnis d’un steak hache, bécan, oignons croustillant, fromage fondu, sauce BBQ", 
                prixDA: 1400, 
                imageUrl: "/menu/trio-de-mini-burger.jpg" 
              }, 
              { 
                plat: "Omelette espagnole au chorizo", 
                description: "", 
                prixDA: 1300, 
                imageUrl: "/menu/omelette-espagnole-au-chorizo.jpg" 
              }, 
              { 
                plat: "Taco beef", 
                description: "3 mini tacos de beef ribs garnis de purée d’avocat au citron, ananas, sauce habenero", 
                prixDA: 1700, 
                imageUrl: "/menu/taco-beef.jpg" 
              }, 
              { 
                plat: "Empanadas au bœuf et maïs", 
                description: "Chaussons dorés à la pâte maison, garnis de bœuf mijoté aux épices douces, maïs fumé tendre et poivrons cuits au four pour une touche légère et croustillante", 
                prixDA: 1500, 
                imageUrl: "/menu/empanadas-au-boeuf-et-mais.jpg" 
              }, 
              { 
                plat: "Croquetos de pollo", 
                description: "Croquettes de poulet effiloché et fondant, mêlé à une béchamel onctueuse, enrobé d’une chapelure dorée et croustillante", 
                prixDA: 1300, 
                imageUrl: "/menu/croquetos-de-pollo.jpg" 
              }, 
              { 
                plat: "Merguez cuite sur une poêle en fonte à l’ail et au thym", 
                description: "", 
                prixDA: 1300, 
                imageUrl: "/menu/merguez-poele-en-fonte.jpg" 
              } 
            ] 
          }, 
          { 
            name: "Autres", 
            items: [ 
              { 
                plat: "Patatas bravas", 
                description: "", 
                prixDA: 500, 
                imageUrl: "/menu/patata-bravas.jpg" 
              }, 
              { 
                plat: "Potato au paprika et fromage feta", 
                description: "", 
                prixDA: 600, 
                imageUrl: "/menu/potato-paprika-feta.jpg" 
              }, 
              { 
                plat: "Mélange de légumes de saison", 
                description: "", 
                prixDA: 500, 
                imageUrl: "/menu/melange-legumes-saison.jpg" 
              }, 
              { 
                plat: "Sautés de champignons frais", 
                description: "", 
                prixDA: 600, 
                imageUrl: "/menu/sautes-champignons-frais.jpg" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "3. TAPAS FROID", 
        subCategories: [ 
          { 
            name: "Sélection Assortiments", 
            items: [ 
              { 
                plat: "Trio de bruschetta", 
                description: "Bruschetta burrata et pesto, bruschetta poivron sauté de champignons et poulet fumé, bruschetta saumon fumé et ricotta", 
                prixDA: 1800, 
                imageUrl: "/menu/trio-de-bruschetta.jpg" 
              }, 
              { 
                plat: "Tabla de tapas", 
                description: "Mix de charcuterie artisanales et fromage servis dans une planche, esprit fermier, à partager", 
                prixDA: 1900, 
                imageUrl: "/menu/table-de-tapas.jpg" 
              }, 
              { 
                plat: "BURATTA DU TORERO", 
                description: "Burrata servis sur un lit de tomates cerises confites, sauce pesto", 
                prixDA: 1700, 
                imageUrl: "/menu/buratta-du-torero.jpg" 
              }, 
              { 
                plat: "Gambas tempura à la thaï", 
                description: "Mélange d’avocat et mangue aux arômes asiatiques, sautées au lait de coco, purée de mangue", 
                prixDA: 1800, 
                imageUrl: "/menu/gambas-tempura-a-la-thai.jpg" 
              }, 
              { 
                plat: "Guacamole et nachos", 
                description: "Avocat écrasé, citron, coriandre, oignon servie avec des nachos épicés", 
                prixDA: 1400, 
                imageUrl: "/menu/guacamole-et-nachos.jpg" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "SPECIALITEE", 
        subCategories: [ 
          { 
            name: "Plats de Riz & Ribs", 
            items: [ 
              { 
                plat: "Riz au four au jarret de bœuf", 
                description: "Riz au four à l'espagnole, jarret de bœuf glacé, l’ail; champignons frais, gremolata, servis avec une touche d'aïoli", 
                prixDA: 2500, 
                imageUrl: "/menu/riz-au-four-au-jarret-de-boeuf.jpg" 
              }, 
              { 
                plat: "Arroz negro", 
                description: "Riz noir cuit dans un bouillon de poisson avec l’encre de seiche, accompagné de calamar, crevette, moules, et bar et servis avec une touche d'aïoli", 
                prixDA: 2900, 
                imageUrl: "/menu/arroz-negro.jpg" 
              }, 
              { 
                plat: "Arroz con gambas", 
                description: "Riz au four à l’espagnole cuit dans un bouillon de crevette, accompagné de gambas, crevettes", 
                prixDA: 2800, 
                imageUrl: "/menu/arroz-con-gambas" 
              }, 
              { 
                plat: "Riz au four au short ribs", 
                description: "Short ribs, mariné et cuit au four pendant 8h servis avec riz aux champignons parfumé au jus de bœuf", 
                prixDA: 2800, 
                imageUrl: "/menu/short-ribs.jpg" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "CUISINE DU MONDE: DU PERU AU JAPAN", 
        subCategories: [ 
          { 
            name: "Fusion Internationale", 
            items: [ 
              { 
                plat: "POLLO LOCO", 
                description: "Suprême de poulet rôti, mousseline de patate et piment doux, julienne de légumes, nachos spicy, jus de volaille", 
                prixDA: 2000, 
                imageUrl: "/menu/pollo-loco.jpg" 
              }, 
              { 
                plat: "LOUP DE MER FARCI AU DERSA", 
                description: "Deux filets de loup de mer farci au dersa, accompagnée avec un mélange de légumes de saison et purée de pomme de terre", 
                prixDA: 2700, 
                imageUrl: "/menu/loup-de-mer-farci-au-dersa.jpg" 
              }, 
              { 
                plat: "RAVIOLI CREME CHAMPIGNONS", 
                description: "Ravioli fraîche farci au poulet fumé et ricotta, servie dans sa crémeuse sauce aux champignons", 
                prixDA: 2000, 
                imageUrl: "/menu/ravioli-creme-champignons.jpg" 
              }, 
              { 
                plat: "LINGUINEE AUX FRUITS DE MER", 
                description: "Sauce tomate épicée, crevettes, moules, calamars, loup de mer", 
                prixDA: 2700, 
                imageUrl: "/menu/linguine-aux-fruits-de-mer" 
              }, 
              { 
                plat: "BROCHETTE DE POULET TERIYAKI", 
                description: "3 brochettes de poulet marinées dans notre sauce teriyaki maison, grillées délicatement, servies avec des nouilles aux légumes et grains de sésame", 
                prixDA: 2200, 
                imageUrl: "/menu/brochette-de-poulet-teriyaki.jpg" 
              } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "TOREO STEAK HOUSE", 
        subCategories: [ 
          { 
            name: "Viandes à la braise & Burgers", 
            items: [ 
              { 
                plat: "Cœur d entrecôte d’Aubrac 350g", 
                description: "Sélectionnez deux garnitures pour accompagner votre viande et une sauce chimichurri", 
                prixDA: 3000, 
                imageUrl: "/menu/coeur-dentrecote-aubrac-420g.jpg" 
              }, 
              { 
                plat: "Brochettes de poulet royale au tandoori et cajou", 
                description: "Sélectionnez deux garnitures pour accompagner votre viande et une sauce chimichurri", 
                prixDA: 2000, 
                imageUrl: "/menu/brochettes-de-poulet-royale-au-tandoori-et-cajou.jpg" 
              }, 
              { 
                plat: "Contre filet de bœuf extra tendre 400G", 
                description: "Sélectionnez deux garnitures pour accompagner votre viande et une sauce chimichurri", 
                prixDA: 3400, 
                imageUrl: "/menu/contre-filet-de-boeuf-400g" 
              }, 
              { 
                plat: "Filet de bœuf moelleux", 
                description: "Sélectionnez deux garnitures pour accompagner votre viande et une sauce chimichurri", 
                prixDA: 3400, 
                imageUrl: "/menu/filet-de-boeuf-300g" 
              }, 
              { 
                plat: "Côtelettes d’agneau", 
                description: "Sélectionnez deux garnitures pour accompagner votre viande et une sauce chimichurri", 
                prixDA: 3500, 
                imageUrl: "/menu/cotelette-dagneau" 
              }, 
              { 
                plat: "Burger toreo", 
                description: "Pain extra moelleux garni d’un steak haché 150g, tranche de fromage, sauce au poivre, oignons caramélisés", 
                prixDA: 1700, 
                imageUrl: "/menu/burger-toreo" 
              }, 
              { 
                plat: "Mushroom burger", 
                description: "Pain extra moelleux garni d’un steak haché 100g, champignons frais sauté à l’ail, tranche de fromage, sauce crémeuse", 
                prixDA: 1500, 
                imageUrl: "/menu/mushroom-burger" 
              } 
            ] 
          }, 
          { 
            name: "Accompagnement", 
            items: [ 
              { 
                plat: "Garnitures et Sauce", 
                description: "Sélectionnez deux garnitures pour accompagner votre viande et une sauce chimichurri. Options: 1. Potatos au paprika fumé et feta | 2. Patatas bravas (sauce piquante) | 3. Mélange de légumes de saison sauté à l’ail | 4. Champignons sautés à l’ail, citron, huile d’olive", 
                prixDA: "Inclus", 
                imageUrl: "/menu/accompagnement" 
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
        name: "Sortie triomphale", 
        subCategories: [ 
          { 
            name: "DESSERT", 
            items: [ 
              { 
                plat: "Le mensonge rouge", 
                description: "Fine coque en chocolat garnie d’une mousse au chocolat pimentée, fruit rouge, nappée à table d’un coulis de chocolat chaud", 
                prixDA: 1200, 
                imageUrl: "/menu/le-mensonge-rouge.jpg" 
              }, 
              { 
                plat: "Bomba choco", 
                description: "Une explosion de mousse au chocolat, mini moelleux au chocolat, crumble à la cannelle, meringue, fruit rouge, trois sortes de glace, coulis framboise", 
                prixDA: 1600, 
                imageUrl: "/menu/bomba-choco-lexplosion-gourmande.jpg" 
              }, 
              { 
                plat: "Moelleux au chocolat collant", 
                description: "Servi chaud avec une boule de glace à la vanille, fruit rouge et arrosé de crème anglaise", 
                prixDA: 1000, 
                imageUrl: "/menu/le-classique-fondant-au-chocolat.jpg" 
              }, 
              { 
                plat: "Saint Sébastian classique", 
                description: "Brûlé au sucre roux servie avec sauce caramel beurre salé", 
                prixDA: 1200, 
                imageUrl: "/menu/san-sebastian" 
              }, 
              { 
                plat: "Profiterole", 
                description: "3 mini Choux à la glace vanille fondante, nappé de coulis de chocolat et amande effilée, chantilly", 
                prixDA: 1200, 
                imageUrl: "/menu/profiterole.jpg" 
              } 
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
              { plat: "Iced thé", description: "Pêche ou Fraise.", prixDA: 500, imageUrl: "/menu/iced-the" } 
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