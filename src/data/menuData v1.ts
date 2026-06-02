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
        name: "Premier pas dans l'arène", 
        subCategories: [ 
          { 
            name: "Un instant de fraîcheur", 
            items: [ 
              { plat: "Salade au poulet fumé", description: "Tranche de poulet fumé servi avec un mélange de laitue verte, roquette, huile d’olive, Pomme confite, parmesan, tomate cerise, radis, crouton, œuf de caille, tapenade d’olive", prixDA: 1400, imageUrl: "/menu/salade-au-poulet-fume" }, 
              { plat: "Bacon salade", description: "Salade frisée, salade roumaine, choux rouges, servi avec des tranches fines de bécan, champignons frais, fromage fondu maison, mayo épissée, mais fume, raisin sec, segment d’orange, œuf poche, olive noir", prixDA: 1500, imageUrl: "/menu/bacon-salade.jpg" }, 
              { plat: "BURATTA DU TORERO", description: "Burrata servis sur un lit de tomates cerises confites, sauce pesto", prixDA: 1700, imageUrl: "/menu/buratta-du-torero.jpg" }, 
              { plat: "Gambas tempura à la thaï", description: "Mélange d’avocat et mangue aux arômes asiatique, crevettes sautées au lait de coco, purée de mangue", prixDA: 1800, imageUrl: "/menu/gambas-tempura-a-la-thai.jpg" } 
            ] 
          }, 
          { 
            name: "La charge du taureau (Classiques)", 
            items: [ 
              { plat: "Trio de bruschetta", description: "Bruschetta burrata et pesto, bruschetta poivron sauté de champignons et poulet fumé, bruschetta saumon fumé et ricotta", prixDA: 1700, imageUrl: "/menu/trio-de-bruschetta.jpg" }, 
              { plat: "Trio de mini burger au bœuf", description: "3 mini burger garnis de steak haché, bécan, oignons croustillant, fromage fondu et sauce BBQ", prixDA: 1550, imageUrl: "/menu/trio-de-mini-burger-au-boeuf.jpg" }, 
              { plat: "Trio de pastilla revisitée au poulet et amandes", description: "Feuille de brick, touche sucrée salée aux épices douces", prixDA: 1300, imageUrl: "/menu/trio-de-pastilla-revisitee-au-poulet-et-amandes" }, 
              { plat: "Omelette espagnole au four au chorizo", description: "Omelette traditionnelle cuite au four", prixDA: 1200, imageUrl: "/menu/omelette-espagnole" }, 
              { plat: "Taco beef", description: "3 mini tacos de beef ribs garnis de purée d’avocat au citron, ananas, sauce habenero", prixDA: 1700, imageUrl: "/menu/taco-beef.jpg" }, 
              { plat: "Croustillant de calamar frits", description: "Calamar frais servis avec sauce tartare", prixDA: 1500, imageUrl: "/menu/croustillant-de-calamar-frais-sauce-tartare.jpg" }, 
              { plat: "Tabla de tapas", description: "Mix de charcuterie artisanales servis dans une planche, esprit fermier, à partager", prixDA: 1900, imageUrl: "/menu/table-de-tapas.jpg" } 
            ] 
          }, 
          { 
            name: "BEEF-SHI", 
            items: [ 
              { plat: "TIMAKI", description: "Cornet de sushi garni de steak haché mariné et cuit, crevette tempura, carotte, concombre, avocat", prixDA: 1800, imageUrl: "/menu/timaki.jpg" }, 
              { plat: "URAMAKI BEEF TEMPURA", description: "8 pièce crunchy, steak hache marine, fromage fondu, avocat, carotte, concombre", prixDA: 1600, imageUrl: "/menu/uramaki-beef-tempura" }, 
              { plat: "SUSHI BURGER", description: "Galette de riz panée, steak haché cuit, sauce sriracha, avocat, carotte, concombre", prixDA: 1700, imageUrl: "/menu/sushi-burger" } 
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
              { plat: "Riz au four au jarret de bœuf", description: "Riz au four à l'espagnole, jarret de bœuf glacé, l’ail ; champignons frais, gremolata, servis avec une touche d'aïoli", prixDA: 2500, imageUrl: "/menu/riz-au-four-au-jarret-de-boeuf.jpg" }, 
              { plat: "Arroz negro", description: "Riz noir cuit dans un bouillon de poisson avec l’encre de seiche, accompagne de calamar, crevette, moulles, et bar et servis avec une touche d’ailloli", prixDA: 2700, imageUrl: "/menu/arroz-negro.jpg" }, 
              { plat: "Arroz con gambas", description: "Riz au four à l’espagnole cuit dans un bouillon de crevette, accompagné de gambas et servis avec une touche d aïoli", prixDA: 2700, imageUrl: "/menu/arroz-con-gambas" }, 
              { plat: "Ravioli crème champignons", description: "Ravioli fraîche farci de poulet fumé, ricotta, épinard, crème aux champignons, parmesan", prixDA: 2000, imageUrl: "/menu/ravioli-creme-champignons.jpg" }, 
              { plat: "Linguine aux fruits de mer", description: "Sauce tomate épicée, crevettes, moulles, calamars, bar", prixDA: 2700, imageUrl: "/menu/linguine-aux-fruits-de-mer" } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "TOREO STEAK HOUSE", 
        subCategories: [ 
          { 
            name: "Les Viandes à la braise", 
            items: [ 
              { plat: "Cœur d entrecôte d’Aubrac 350g", description: "Sélectionnez deux garnitures gratuites", prixDA: 2900, imageUrl: "/menu/coeur-dentrecote-aubrac-420g.jpg" }, 
              { plat: "Contre filet de bœuf extra tendre 400G", description: "Sélectionnez deux garnitures gratuites", prixDA: 3400, imageUrl: "/menu/contre-filet-de-boeuf-400g" }, 
              { plat: "Filet de bœuf moelleux", description: "Sélectionnez deux garnitures gratuites", prixDA: 3400, imageUrl: "/menu/filet-de-boeuf-300g" }, 
              { plat: "Côtelettes d’agneau", description: "Sélectionnez deux garnitures gratuites", prixDA: 3500, imageUrl: "/menu/cotelette-dagneau" }, 
              { plat: "Churrasco", description: "Brochette mixture de viande, merguez, côtelette d’agneau, tranche de filet de bœuf, morceaux de poulet", prixDA: 2800, imageUrl: "/menu/churrasco" }, 
              { plat: "Brochettes de poulet royale", description: "Tandoori et cajou", prixDA: 2000, imageUrl: "/menu/brochettes-de-poulet-royale-au-tandoori-et-cajou.jpg" } 
            ] 
          }, 
          { 
            name: "Burgers", 
            items: [ 
              { plat: "Mushroom burger", description: "Pain extra moelleux, steak haché 150g, sauce mushroom, salade, oignons caramélisés", prixDA: 1500, imageUrl: "/menu/mushroom-burger" }, 
              { plat: "Burger toreo", description: "Pain extra moelleux, steak haché 100G, émincé de filet de bœuf aux champignons, fromage, sauce crémeuse", prixDA: 1700, imageUrl: "/menu/burger-toreo" } 
            ] 
          }, 
          { 
            name: "Accompagnements (2 au choix inclus)", 
            items: [ 
              { plat: "Garnitures", description: "Potatos paprika/feta, Patatas bravas, Légumes sautés, ou Champignons ail/citron", prixDA: "Inclus", imageUrl: "/menu/accompagnement" }, 
              { plat: "Sauces Supplémentaires", description: "Moutarde miel, Piment fumé, ou Mushroom", prixDA: 300, imageUrl: "/menu/sauce" } 
            ] 
          } 
        ] 
      }, 
      { 
        name: "La tentation du torero", 
        subCategories: [ 
          { 
            name: "Plats Signature", 
            items: [ 
              { plat: "Short ribs", description: "Mariné et cuit au four pendant 8h servis avec risotto aux champignons parfumé au jus de bœuf", prixDA: 2900, imageUrl: "/menu/short-ribs.jpg" }, 
              { plat: "Château brillant de bœuf", description: "Mousseline de pomme de terre, oignons braise, crème de petit pois, servis avec sauce demi glace de bœuf", prixDA: 3200, imageUrl: "/menu/chateau-brillant" }, 
              { plat: "Polo loco", description: "Suprême de poulet rôti, mousseline de patate et piment doux, julienne de légumes, nachos spicy, jus de volaille", prixDA: 2000, imageUrl: "/menu/pollo-loco.jpg" }, 
              { plat: "Pavé de saumon grillé", description: "Pomme de terre dorées, épinards fondant, champignons, sauce crémeuse citronnée", prixDA: 3500, imageUrl: "/menu/pave-de-saumon.jpg" }, 
              { plat: "Loup de mer farci au dersa", description: "Risotto parfumée à l’épinard et basilic, émulsion de poisson", prixDA: 2600, imageUrl: "/menu/loup-de-mer-farci-aux-trois-poivrons.jpg" } 
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
            name: "Les douceurs", 
            items: [ 
              { plat: "Le mensonge rouge", description: "Trompe l’œil au cerise servis sur un lit de crumble et son coulis de cerise", prixDA: 1200, imageUrl: "/menu/le-mensonge-rouge.jpg" }, 
              { plat: "Bouffée revisitée", description: "Crème légère, banane confite et caramel maison, sur un crumble beurre au parfums subtil de vanille", prixDA: 1200, imageUrl: "/menu/banoffee-revisitee.jpg" }, 
              { plat: "Bomba choco", description: "Explosion de mousse au chocolat, mini moelleux, crumble cannelle, meringue, fruit rouge, 3 glaces, coulis framboise", prixDA: 1600, imageUrl: "/menu/bomba-choco-lexplosion-gourmande.jpg" }, 
              { plat: "Moelleux au chocolat coulant", description: "Servi chaud avec une boule de glace à la vanille, fruit rouge et arrosé de crème anglaise", prixDA: 1000, imageUrl: "/menu/le-classique-fondant-au-chocolat.jpg" }, 
              { plat: "Baba au rhum revisitée", description: "Aux fruits exotiques", prixDA: 1200, imageUrl: "/menu/le-baba-exotique-revisite.jpg" } 
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