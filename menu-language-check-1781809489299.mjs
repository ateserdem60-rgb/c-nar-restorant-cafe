
    class FakeClassList { toggle(){} }
    function el(){ return { innerHTML:'', textContent:'', placeholder:'', value:'', dataset:{}, classList:new FakeClassList(), setAttribute(){}, addEventListener(){}}; }
    const elements = {};
    const buttons = ['tr','en','de','ar'].map(lang => ({ dataset:{ lang }, classList:new FakeClassList(), addEventListener(){} }));
    globalThis.document = {
      title:'',
      documentElement:{ lang:'', dir:'' },
      getElementById(id){ return elements[id] || (elements[id] = el()); },
      querySelectorAll(selector){ return selector === '[data-lang]' ? buttons : []; }
    };
    globalThis.localStorage = { getItem(){ return 'tr'; }, setItem(){} };
  

    const menu = [
      {
        id:"sicak-icecekler", icon:"☕", title:"Sıcak İçecekler",
        items:[
          ["Çay","30"],["Çay Double","60"],["Nane Limon","90"],["Nescafe Sade","100"],
          ["Kivi Çayı","120"],["Kış Çayı","120"],["Mango Çayı","120"],["Kuşburnu Çayı","120"],
          ["Ihlamur","120"],["Yaseminli Yeşil Çay","120"],["Yeşil Çay","120"],["Papatya Çayı","120"],
          ["Ada Çayı","120"],["Sütlü Nescafe","150"],["Beyaz Sıcak Çikolata","150"],
          ["Sade Sıcak Çikolata","150"],["Salep","150"],["Ballı Süt","150"],["Termos Çay","300"]
        ]
      },
      {
        id:"soguk-kahveler", icon:"🧊", title:"Soğuk Kahveler",
        items:[
          ["Ice Çınar Special","200"],["Ice Mocha","200"],["Ice Latte","200"],["Soğuk Çikolata","200"],
          ["Beyaz Soğuk Çikolata","200"],["Ice Americano","200"],["Ice Caramel Macchiato","200"],
          ["Ice Caramel Latte","200"],["Ice Vanilya Latte","200"],["Ice White Chocolate Mocha","200"],["Affogato","200"]
        ]
      },
      {
        id:"frappe-frozen", icon:"🍓", title:"Frappe, Frozen, Smoothie",
        items:[
          ["Karadut Frozen","180"],["Ananas Frozen","180"],["Yeşil Elma Frozen","180"],["Çilek Frozen","180"],
          ["Böğürtlenli Frozen","180"],["Karışık Frozen","180"],["Limon Frozen","180"],["Şeftali Frozen","180"],
          ["Karpuz Frozen","180"],["Kivi Frozen","180"],["Kavun Frozen","180"],["Mango Frozen","180"],
          ["Fresh Frozen","180"],["Orman Meyveli Milkshake","180"],["Çikolatalı Milkshake","180"],
          ["Karamelli Milkshake","180"],["Kivi Milkshake","180"],["Böğürtlen Frappe Milkshake","180"],
          ["Vanilya Milkshake","180"],["Çilekli Milkshake","180"],["Mangolu Milkshake","180"],
          ["Şeftali Milkshake","180"],["Karadut Milkshake","180"],["Muzlu Milkshake","200"],
          ["Şirin Baba","200"],["Klasik Frappe","200"],["Çilekli Frappe","200"],
          ["Çikolatalı Frappe","200"],["Fıstıklı Frappe","200"],["Karamelli Frappe","200"],
          ["Muzlu Smoothie","200"],["Çilekli Smoothie","200"],["Şeftali Smoothie","200"],
          ["Klasik Mojito","200"],["Elmalı Mojito","200"],["Çilekli Mojito","200"],
          ["Red Bull Mojito","220"],["Karadut Lime Mojito","200"]
        ]
      },
      {
        id:"soguk-icecekler", icon:"🥤", title:"Soğuk İçecekler",
        items:[
          ["Portakal Suyu","120"],["Churchill","75"],["Limonata","100"],["Çilekli Limonata","100"],
          ["Hibiskus","100"],["Reyhan Şerbeti","100"],["Sürahi Ayran","300"]
        ]
      },
      {
        id:"yoresel-kahveler", icon:"☕", title:"Yöresel Kahveler",
        items:[
          ["Türk Kahvesi","100"],["Damla Sakızlı Türk Kahvesi","150"],["Dibek Kahvesi","150"],
          ["Menengiç Kahvesi","150"],["Süryani Kahvesi","150"],["Double Türk Kahvesi","220"],["Osmanlı Kahvesi","150"]
        ]
      },
      {
        id:"tatlilar", icon:"🍰", title:"Tatlılar ve Pastalar",
        items:[
          ["Kadayıf","230"],["Künefe","230"],["Kebin Tatlısı","220"],["Kelebek Tatlısı","120"],
          ["Midye Baklava","250"],["Soğuk Baklava","200"],["Sütlaç","120"],["San Sebastian Cheesecake","240"],
          ["Lotus Pasta","220"],["Orman Meyveli Pasta","180"],["Devils Çikolatalı Pasta","180"],
          ["Muzlu Pasta","240"],["Mozaik Pasta","240"],["Malaga","180"],["Profiterol","190"]
        ]
      },
      {
        id:"dondurma", icon:"🍨", title:"Dondurma",
        items:[
          ["Sade Dondurma","300"],["Külah Dondurma","240"],["Kase Dondurma","300"],["Meyveli Dondurma","300"]
        ]
      },
      {
        id:"izgara", icon:"🔥", title:"Izgara ve Ana Yemekler",
        items:[
          ["Köfte","350"],["Tavuk Şiş","500"],["Tavuk Kanat","500"],["Adana Kebap","550"],
          ["Urfa Kebap","550"],["Beyti","550"],["Patlıcan Kebap","650"],["Domates Kebap","650"],
          ["Yoğurtlu Kebap","500"],["Sarma Beyti","550"],["Et Sac Tava","600"],["Tavuk Sac Tava","450"],
          ["Alinazik","600"],["Çökertme","450"],["Lokum Izgara","450"],["Karışık Kebap","550"],["Balık","250"]
        ]
      },
      {
        id:"nargile", icon:"♨", title:"Nargile",
        items:[
          ["Çift Elma","500"],["Üzüm","500"],["Nane Limon","500"],["Nane Mint","500"],
          ["Ice Cola","500"],["Infinity","500"],["İzmir Romantik","500"],["Lady Killer","500"],
          ["Levo 66","500"],["Master Mix","500"],["Moskova Geceleri","500"],["Tarçın Sakız","500"],
          ["Turkish Mastik","500"],["Special Nargile","950"]
        ]
      }
    ];

    const images = {
      "Sürahi Ayran":"assets/menu-images/ayran.jpeg",
      "Tavuk Şiş":"assets/menu-images/tavuk-sis.jpeg",
      "Tavuk Kanat":"assets/menu-images/kebap.jpeg",
      "Adana Kebap":"assets/menu-images/adana.jpeg",
      "Urfa Kebap":"assets/menu-images/kebap.jpeg",
      "Beyti":"assets/menu-images/beyti.jpeg",
      "Yoğurtlu Kebap":"assets/menu-images/yogurtlu-kebap.jpeg",
      "Sarma Beyti":"assets/menu-images/sarma-beyti.jpeg",
      "Et Sac Tava":"assets/menu-images/et-sac-tava.jpeg",
      "Tavuk Sac Tava":"assets/menu-images/tavuk-sac-tava.jpeg",
      "Karışık Kebap":"assets/menu-images/mixed-grill.jpeg",
      "Lokum Izgara":"assets/menu-images/lokum-izgara.png",
      "Çay":"assets/menu-images/tea.jpeg",
      "sicak-icecekler::Nane Limon":"assets/menu-images/mint-lemon-tea.jpeg",
      "Nescafe Sade":"assets/menu-images/nescafe.jpeg",
      "Sütlü Nescafe":"assets/menu-images/nescafe.jpeg",
      "Kivi Çayı":"assets/menu-images/kiwi-tea.jpeg",
      "Kuşburnu Çayı":"assets/menu-images/rosehip-tea.jpeg",
      "Yeşil Çay":"assets/menu-images/green-tea.jpeg",
      "Yaseminli Yeşil Çay":"assets/menu-images/green-tea.jpeg",
      "Papatya Çayı":"assets/menu-images/chamomile-tea.jpeg",
      "Ada Çayı":"assets/menu-images/green-tea.jpeg",
      "Beyaz Sıcak Çikolata":"assets/menu-images/white-hot-chocolate.jpeg",
      "Salep":"assets/menu-images/salep.jpeg",
      "Ballı Süt":"assets/menu-images/honey-milk.jpeg",
      "Ice Americano":"assets/menu-images/espresso.jpeg",
      "Klasik Mojito":"assets/menu-images/mojito.jpeg",
      "Elmalı Mojito":"assets/menu-images/apple-frozen.jpeg",
      "Çilekli Mojito":"assets/menu-images/red-mojito.jpeg",
      "Red Bull Mojito":"assets/menu-images/redbull-mojito.jpeg",
      "Karadut Lime Mojito":"assets/menu-images/berry-mojito.jpeg",
      "Muzlu Milkshake":"assets/menu-images/banana.jpeg",
      "Çilekli Milkshake":"assets/menu-images/strawberry.jpeg",
      "Şeftali Milkshake":"assets/menu-images/peach-milkshake.jpeg",
      "Mangolu Milkshake":"assets/menu-images/mango.jpeg",
      "Orman Meyveli Milkshake":"assets/menu-images/berry-frozen.jpeg",
      "Karadut Milkshake":"assets/menu-images/berry-frozen.jpeg",
      "Limon Frozen":"assets/menu-images/mojito.jpeg",
      "Yeşil Elma Frozen":"assets/menu-images/apple-frozen.jpeg",
      "Çilek Frozen":"assets/menu-images/strawberry.jpeg",
      "Böğürtlenli Frozen":"assets/menu-images/berry-frozen.jpeg",
      "Karışık Frozen":"assets/menu-images/berry-frozen.jpeg",
      "Şeftali Frozen":"assets/menu-images/peach.jpeg",
      "Mango Frozen":"assets/menu-images/mango.jpeg",
      "Fresh Frozen":"assets/menu-images/apple-frozen.jpeg",
      "Çilekli Smoothie":"assets/menu-images/strawberry.jpeg",
      "Şeftali Smoothie":"assets/menu-images/peach.jpeg",
      "Muzlu Smoothie":"assets/menu-images/banana.jpeg",
      "Türk Kahvesi":"assets/menu-images/turkish-coffee.jpeg",
      "Damla Sakızlı Türk Kahvesi":"assets/menu-images/turkish-coffee.jpeg",
      "Dibek Kahvesi":"assets/menu-images/turkish-coffee.jpeg",
      "Menengiç Kahvesi":"assets/menu-images/turkish-coffee.jpeg",
      "Süryani Kahvesi":"assets/menu-images/turkish-coffee.jpeg",
      "Double Türk Kahvesi":"assets/menu-images/turkish-coffee.jpeg",
      "Osmanlı Kahvesi":"assets/menu-images/turkish-coffee.jpeg",
      "nargile::Nane Limon":"assets/menu-images/nargile.jpeg",
      "Çift Elma":"assets/menu-images/nargile.jpeg",
      "Üzüm":"assets/menu-images/nargile.jpeg",
      "Nane Mint":"assets/menu-images/nargile.jpeg",
      "Ice Cola":"assets/menu-images/nargile.jpeg",
      "Infinity":"assets/menu-images/nargile.jpeg",
      "Special Nargile":"assets/menu-images/nargile.jpeg",

      "Çay Double":"assets/menu-images/tea.jpeg",
      "Kış Çayı":"assets/menu-images/hibiscus.jpeg",
      "Mango Çayı":"assets/menu-images/mango.jpeg",
      "Ihlamur":"assets/menu-images/green-tea.jpeg",
      "Sade Sıcak Çikolata":"assets/menu-images/chocolate-drink.jpeg",
      "Termos Çay":"assets/menu-images/termos-cay.jpeg",

      "Ice Çınar Special":"assets/menu-images/iced-coffee.jpeg",
      "Ice Mocha":"assets/menu-images/chocolate-drink.jpeg",
      "Ice Latte":"assets/menu-images/iced-coffee.jpeg",
      "Soğuk Çikolata":"assets/menu-images/soguk-cikolata.jpeg",
      "Beyaz Soğuk Çikolata":"assets/menu-images/white-hot-chocolate.jpeg",
      "Ice Caramel Macchiato":"assets/menu-images/iced-coffee.jpeg",
      "Ice Caramel Latte":"assets/menu-images/iced-coffee.jpeg",
      "Ice Vanilya Latte":"assets/menu-images/iced-coffee.jpeg",
      "Ice White Chocolate Mocha":"assets/menu-images/chocolate-drink.jpeg",
      "Affogato":"assets/menu-images/coffee.jpeg",

      "Karadut Frozen":"assets/menu-images/berry-frozen.jpeg",
      "Ananas Frozen":"assets/menu-images/orange-drink.jpeg",
      "Karpuz Frozen":"assets/menu-images/strawberry.jpeg",
      "Kivi Frozen":"assets/menu-images/apple-frozen.jpeg",
      "Kavun Frozen":"assets/menu-images/orange-drink.jpeg",
      "Çikolatalı Milkshake":"assets/menu-images/chocolate-drink.jpeg",
      "Karamelli Milkshake":"assets/menu-images/caramel-frappe.jpeg",
      "Kivi Milkshake":"assets/menu-images/apple-frozen.jpeg",
      "Böğürtlen Frappe Milkshake":"assets/menu-images/berry-frozen.jpeg",
      "Vanilya Milkshake":"assets/menu-images/vanilya-milkshake.jpeg",
      "Şirin Baba":"assets/menu-images/berry-frozen.jpeg",
      "Klasik Frappe":"assets/menu-images/iced-coffee.jpeg",
      "Çilekli Frappe":"assets/menu-images/strawberry.jpeg",
      "Çikolatalı Frappe":"assets/menu-images/chocolate-drink.jpeg",
      "Fıstıklı Frappe":"assets/menu-images/milkshake.jpeg",
      "Karamelli Frappe":"assets/menu-images/caramel-frappe.jpeg",

      "Portakal Suyu":"assets/menu-images/orange-drink.jpeg",
      "Churchill":"assets/menu-images/mojito.jpeg",
      "Limonata":"assets/menu-images/mojito.jpeg",
      "Çilekli Limonata":"assets/menu-images/red-mojito.jpeg",
      "Hibiskus":"assets/menu-images/hibiscus.jpeg",
      "Reyhan Şerbeti":"assets/menu-images/hibiscus.jpeg",

      "Kadayıf":"assets/menu-images/kadayif.jpeg",
      "Künefe":"assets/menu-images/kunefe.jpeg",
      "Kebin Tatlısı":"assets/menu-images/kebin-tatlisi.jpeg",
      "Kelebek Tatlısı":"assets/menu-images/kelebek-tatlisi.jpeg",
      "Midye Baklava":"assets/menu-images/midye-baklava.jpeg",
      "Soğuk Baklava":"assets/menu-images/soguk-baklava.jpeg",
      "Sütlaç":"assets/menu-images/sutlac.jpeg",
      "San Sebastian Cheesecake":"assets/menu-images/san-sebastian.jpeg",
      "Lotus Pasta":"assets/menu-images/lotus-pasta.webp",
      "Orman Meyveli Pasta":"assets/menu-images/orman-meyveli-pasta.jpeg",
      "Devils Çikolatalı Pasta":"assets/menu-images/devils-cikolatali-pasta.jpeg",
      "Muzlu Pasta":"assets/menu-images/muzlu-pasta.jpeg",
      "Mozaik Pasta":"assets/menu-images/mozaik-pasta.jpeg",
      "Malaga":"assets/menu-images/malaga.jpeg",
      "Profiterol":"assets/menu-images/profiterol.jpeg",

      "Sade Dondurma":"assets/menu-images/dondurma-sade.jpeg",
      "Külah Dondurma":"assets/menu-images/dondurma-kulah.jpeg",
      "Kase Dondurma":"assets/menu-images/dondurma-kase.jpeg",
      "Meyveli Dondurma":"assets/menu-images/dondurma-meyveli.jpeg",

      "Köfte":"assets/menu-images/kofte.jpeg",
      "Patlıcan Kebap":"assets/menu-images/patlican-kebap.jpeg",
      "Domates Kebap":"assets/menu-images/domates-kebap.jpeg",
      "Alinazik":"assets/menu-images/alinazik.jpeg",
      "Çökertme":"assets/menu-images/cokertme.jpeg",
      "Balık":"assets/menu-images/balik.jpeg",

      "İzmir Romantik":"assets/menu-images/nargile.jpeg",
      "Lady Killer":"assets/menu-images/nargile.jpeg",
      "Levo 66":"assets/menu-images/nargile.jpeg",
      "Master Mix":"assets/menu-images/nargile.jpeg",
      "Moskova Geceleri":"assets/menu-images/nargile.jpeg",
      "Tarçın Sakız":"assets/menu-images/nargile.jpeg",
      "Turkish Mastik":"assets/menu-images/nargile.jpeg"
    };

    const featured = ["Tavuk Şiş", "Adana Kebap", "Karışık Kebap", "Çilekli Milkshake"];
    const categoryImages = {
      "sicak-icecekler":"assets/menu-images/tea.jpeg",
      "soguk-kahveler":"assets/menu-images/iced-coffee.jpeg",
      "frappe-frozen":"assets/menu-images/milkshake.jpeg",
      "soguk-icecekler":"assets/menu-images/mojito.jpeg",
      "yoresel-kahveler":"assets/menu-images/turkish-coffee.jpeg",
      "tatlilar":"assets/menu-images/cilekli-pasta.jpeg",
      "dondurma":"assets/menu-images/dondurma-sade.jpeg",
      "izgara":"assets/menu-images/mixed-grill.jpeg",
      "nargile":"assets/menu-images/nargile.jpeg"
    };

    const languageData = {
      tr: {
        htmlLang:"tr",
        dir:"ltr",
        ui:{
          title:"Çınar Cafe Restorant - Menü",
          languageTitle:"Dil",
          heroEyebrow:"Hoş Geldiniz",
          heroSubtitle:"Cafe Restorant",
          heroIntro:"Özenle hazırlanan sıcak-soğuk içecekler, tatlılar, nargile çeşitleri ve restoran lezzetleri.",
          navLabel:"Menü kategorileri",
          searchPlaceholder:"Menüde ara...",
          priceNote:"Fiyatlar TL'dir.",
          featured:"Öne Çıkan",
          result:"{count} sonuç bulundu",
          empty:"Aramanıza uygun ürün bulunamadı.",
          footer:"Cafe Restorant<br>Afiyet olsun. Teşekkür ederiz."
        },
        categories:{},
        items:{}
      },
      en: {
        htmlLang:"en",
        dir:"ltr",
        ui:{
          title:"Cinar Cafe Restaurant - Menu",
          languageTitle:"Language",
          heroEyebrow:"Welcome",
          heroSubtitle:"Cafe Restaurant",
          heroIntro:"Carefully prepared hot and cold drinks, desserts, hookah varieties, and restaurant favorites.",
          navLabel:"Menu categories",
          searchPlaceholder:"Search the menu...",
          priceNote:"Prices are in TL.",
          featured:"Featured",
          result:"{count} results found",
          empty:"No matching item found.",
          footer:"Cafe Restaurant<br>Enjoy your meal. Thank you."
        },
        categories:{
          "sicak-icecekler":"Hot Drinks",
          "soguk-kahveler":"Cold Coffees",
          "frappe-frozen":"Frappe, Frozen, Smoothie",
          "soguk-icecekler":"Cold Drinks",
          "yoresel-kahveler":"Regional Coffees",
          "tatlilar":"Desserts and Cakes",
          "dondurma":"Ice Cream",
          "izgara":"Grill and Main Dishes",
          "nargile":"Hookah"
        },
        items:{
          "Çay":"Tea","Çay Double":"Double Tea","Nane Limon":"Mint Lemon Tea","Nescafe Sade":"Plain Nescafe","Kivi Çayı":"Kiwi Tea","Kış Çayı":"Winter Tea","Mango Çayı":"Mango Tea","Kuşburnu Çayı":"Rosehip Tea","Ihlamur":"Linden Tea","Yaseminli Yeşil Çay":"Jasmine Green Tea","Yeşil Çay":"Green Tea","Papatya Çayı":"Chamomile Tea","Ada Çayı":"Sage Tea","Sütlü Nescafe":"Nescafe with Milk","Beyaz Sıcak Çikolata":"White Hot Chocolate","Sade Sıcak Çikolata":"Classic Hot Chocolate","Salep":"Salep","Ballı Süt":"Honey Milk","Termos Çay":"Tea Thermos",
          "Ice Çınar Special":"Iced Cinar Special","Ice Mocha":"Iced Mocha","Ice Latte":"Iced Latte","Soğuk Çikolata":"Cold Chocolate","Beyaz Soğuk Çikolata":"White Cold Chocolate","Ice Americano":"Iced Americano","Ice Caramel Macchiato":"Iced Caramel Macchiato","Ice Caramel Latte":"Iced Caramel Latte","Ice Vanilya Latte":"Iced Vanilla Latte","Ice White Chocolate Mocha":"Iced White Chocolate Mocha","Affogato":"Affogato",
          "Karadut Frozen":"Black Mulberry Frozen","Ananas Frozen":"Pineapple Frozen","Yeşil Elma Frozen":"Green Apple Frozen","Çilek Frozen":"Strawberry Frozen","Böğürtlenli Frozen":"Blackberry Frozen","Karışık Frozen":"Mixed Frozen","Limon Frozen":"Lemon Frozen","Şeftali Frozen":"Peach Frozen","Karpuz Frozen":"Watermelon Frozen","Kivi Frozen":"Kiwi Frozen","Kavun Frozen":"Melon Frozen","Mango Frozen":"Mango Frozen","Fresh Frozen":"Fresh Frozen","Orman Meyveli Milkshake":"Forest Fruit Milkshake","Çikolatalı Milkshake":"Chocolate Milkshake","Karamelli Milkshake":"Caramel Milkshake","Kivi Milkshake":"Kiwi Milkshake","Böğürtlen Frappe Milkshake":"Blackberry Frappe Milkshake","Vanilya Milkshake":"Vanilla Milkshake","Çilekli Milkshake":"Strawberry Milkshake","Mangolu Milkshake":"Mango Milkshake","Şeftali Milkshake":"Peach Milkshake","Karadut Milkshake":"Black Mulberry Milkshake","Muzlu Milkshake":"Banana Milkshake","Şirin Baba":"Sirin Baba","Klasik Frappe":"Classic Frappe","Çilekli Frappe":"Strawberry Frappe","Çikolatalı Frappe":"Chocolate Frappe","Fıstıklı Frappe":"Pistachio Frappe","Karamelli Frappe":"Caramel Frappe","Muzlu Smoothie":"Banana Smoothie","Çilekli Smoothie":"Strawberry Smoothie","Şeftali Smoothie":"Peach Smoothie","Klasik Mojito":"Classic Mojito","Elmalı Mojito":"Apple Mojito","Çilekli Mojito":"Strawberry Mojito","Red Bull Mojito":"Red Bull Mojito","Karadut Lime Mojito":"Black Mulberry Lime Mojito",
          "Portakal Suyu":"Orange Juice","Churchill":"Churchill","Limonata":"Lemonade","Çilekli Limonata":"Strawberry Lemonade","Hibiskus":"Hibiscus","Reyhan Şerbeti":"Basil Sherbet","Sürahi Ayran":"Pitcher Ayran",
          "Türk Kahvesi":"Turkish Coffee","Damla Sakızlı Türk Kahvesi":"Mastic Turkish Coffee","Dibek Kahvesi":"Dibek Coffee","Menengiç Kahvesi":"Menengic Coffee","Süryani Kahvesi":"Syriac Coffee","Double Türk Kahvesi":"Double Turkish Coffee","Osmanlı Kahvesi":"Ottoman Coffee",
          "Kadayıf":"Kadayif","Künefe":"Kunefe","Kebin Tatlısı":"Kebin Dessert","Kelebek Tatlısı":"Butterfly Dessert","Midye Baklava":"Mussel Baklava","Soğuk Baklava":"Cold Baklava","Sütlaç":"Rice Pudding","San Sebastian Cheesecake":"San Sebastian Cheesecake","Lotus Pasta":"Lotus Cake","Orman Meyveli Pasta":"Forest Fruit Cake","Devils Çikolatalı Pasta":"Devil's Chocolate Cake","Muzlu Pasta":"Banana Cake","Mozaik Pasta":"Mosaic Cake","Malaga":"Malaga","Profiterol":"Profiterole",
          "Sade Dondurma":"Plain Ice Cream","Külah Dondurma":"Cone Ice Cream","Kase Dondurma":"Bowl Ice Cream","Meyveli Dondurma":"Fruit Ice Cream",
          "Köfte":"Meatballs","Tavuk Şiş":"Chicken Skewers","Tavuk Kanat":"Chicken Wings","Adana Kebap":"Adana Kebab","Urfa Kebap":"Urfa Kebab","Beyti":"Beyti Kebab","Patlıcan Kebap":"Eggplant Kebab","Domates Kebap":"Tomato Kebab","Yoğurtlu Kebap":"Yogurt Kebab","Sarma Beyti":"Wrapped Beyti","Et Sac Tava":"Beef Sac Tava","Tavuk Sac Tava":"Chicken Sac Tava","Alinazik":"Alinazik","Çökertme":"Cokertme","Lokum Izgara":"Grilled Turkish Delight Meat","Karışık Kebap":"Mixed Kebab","Balık":"Fish",
          "Çift Elma":"Double Apple","Üzüm":"Grape","Nane Mint":"Mint","Ice Cola":"Ice Cola","Infinity":"Infinity","İzmir Romantik":"Izmir Romantic","Lady Killer":"Lady Killer","Levo 66":"Levo 66","Master Mix":"Master Mix","Moskova Geceleri":"Moscow Nights","Tarçın Sakız":"Cinnamon Gum","Turkish Mastik":"Turkish Mastic","Special Nargile":"Special Hookah"
        }
      },
      de: {
        htmlLang:"de",
        dir:"ltr",
        ui:{
          title:"Cinar Cafe Restaurant - Menü",
          languageTitle:"Sprache",
          heroEyebrow:"Willkommen",
          heroSubtitle:"Cafe Restaurant",
          heroIntro:"Sorgfältig zubereitete heiße und kalte Getränke, Desserts, Shisha-Sorten und Restaurantgerichte.",
          navLabel:"Menükategorien",
          searchPlaceholder:"Im Menü suchen...",
          priceNote:"Preise in TL.",
          featured:"Empfohlen",
          result:"{count} Ergebnisse gefunden",
          empty:"Kein passender Artikel gefunden.",
          footer:"Cafe Restaurant<br>Guten Appetit. Vielen Dank."
        },
        categories:{
          "sicak-icecekler":"Heiße Getränke",
          "soguk-kahveler":"Kalte Kaffees",
          "frappe-frozen":"Frappe, Frozen, Smoothie",
          "soguk-icecekler":"Kalte Getränke",
          "yoresel-kahveler":"Regionale Kaffees",
          "tatlilar":"Desserts und Kuchen",
          "dondurma":"Eis",
          "izgara":"Grill und Hauptgerichte",
          "nargile":"Shisha"
        },
        items:{
          "Çay":"Tee","Çay Double":"Doppelter Tee","Nane Limon":"Minze-Zitronen-Tee","Nescafe Sade":"Nescafe Pur","Kivi Çayı":"Kiwi-Tee","Kış Çayı":"Wintertee","Mango Çayı":"Mango-Tee","Kuşburnu Çayı":"Hagebuttentee","Ihlamur":"Lindentee","Yaseminli Yeşil Çay":"Grüner Tee mit Jasmin","Yeşil Çay":"Grüner Tee","Papatya Çayı":"Kamillentee","Ada Çayı":"Salbeitee","Sütlü Nescafe":"Nescafe mit Milch","Beyaz Sıcak Çikolata":"Weiße Heiße Schokolade","Sade Sıcak Çikolata":"Klassische Heiße Schokolade","Salep":"Salep","Ballı Süt":"Honigmilch","Termos Çay":"Tee-Thermos",
          "Ice Çınar Special":"Iced Cinar Special","Ice Mocha":"Iced Mocha","Ice Latte":"Iced Latte","Soğuk Çikolata":"Kalte Schokolade","Beyaz Soğuk Çikolata":"Weiße Kalte Schokolade","Ice Americano":"Iced Americano","Ice Caramel Macchiato":"Iced Caramel Macchiato","Ice Caramel Latte":"Iced Caramel Latte","Ice Vanilya Latte":"Iced Vanilla Latte","Ice White Chocolate Mocha":"Iced White Chocolate Mocha","Affogato":"Affogato",
          "Karadut Frozen":"Maulbeer Frozen","Ananas Frozen":"Ananas Frozen","Yeşil Elma Frozen":"Grüner Apfel Frozen","Çilek Frozen":"Erdbeer Frozen","Böğürtlenli Frozen":"Brombeer Frozen","Karışık Frozen":"Gemischter Frozen","Limon Frozen":"Zitronen Frozen","Şeftali Frozen":"Pfirsich Frozen","Karpuz Frozen":"Wassermelonen Frozen","Kivi Frozen":"Kiwi Frozen","Kavun Frozen":"Melonen Frozen","Mango Frozen":"Mango Frozen","Fresh Frozen":"Fresh Frozen","Orman Meyveli Milkshake":"Waldfrucht-Milkshake","Çikolatalı Milkshake":"Schokoladen-Milkshake","Karamelli Milkshake":"Karamell-Milkshake","Kivi Milkshake":"Kiwi-Milkshake","Böğürtlen Frappe Milkshake":"Brombeer-Frappe-Milkshake","Vanilya Milkshake":"Vanille-Milkshake","Çilekli Milkshake":"Erdbeer-Milkshake","Mangolu Milkshake":"Mango-Milkshake","Şeftali Milkshake":"Pfirsich-Milkshake","Karadut Milkshake":"Maulbeer-Milkshake","Muzlu Milkshake":"Bananen-Milkshake","Şirin Baba":"Sirin Baba","Klasik Frappe":"Klassischer Frappe","Çilekli Frappe":"Erdbeer-Frappe","Çikolatalı Frappe":"Schokoladen-Frappe","Fıstıklı Frappe":"Pistazien-Frappe","Karamelli Frappe":"Karamell-Frappe","Muzlu Smoothie":"Bananen-Smoothie","Çilekli Smoothie":"Erdbeer-Smoothie","Şeftali Smoothie":"Pfirsich-Smoothie","Klasik Mojito":"Klassischer Mojito","Elmalı Mojito":"Apfel-Mojito","Çilekli Mojito":"Erdbeer-Mojito","Red Bull Mojito":"Red Bull Mojito","Karadut Lime Mojito":"Maulbeer-Limetten-Mojito",
          "Portakal Suyu":"Orangensaft","Churchill":"Churchill","Limonata":"Limonade","Çilekli Limonata":"Erdbeer-Limonade","Hibiskus":"Hibiskus","Reyhan Şerbeti":"Basilikum-Sherbet","Sürahi Ayran":"Ayran-Krug",
          "Türk Kahvesi":"Türkischer Kaffee","Damla Sakızlı Türk Kahvesi":"Türkischer Kaffee mit Mastix","Dibek Kahvesi":"Dibek-Kaffee","Menengiç Kahvesi":"Menengic-Kaffee","Süryani Kahvesi":"Syrischer Kaffee","Double Türk Kahvesi":"Doppelter Türkischer Kaffee","Osmanlı Kahvesi":"Osmanischer Kaffee",
          "Kadayıf":"Kadayif","Künefe":"Kunefe","Kebin Tatlısı":"Kebin-Dessert","Kelebek Tatlısı":"Schmetterlings-Dessert","Midye Baklava":"Muschel-Baklava","Soğuk Baklava":"Kaltes Baklava","Sütlaç":"Milchreis","San Sebastian Cheesecake":"San Sebastian Cheesecake","Lotus Pasta":"Lotus-Kuchen","Orman Meyveli Pasta":"Waldfrucht-Kuchen","Devils Çikolatalı Pasta":"Devil's Schokoladenkuchen","Muzlu Pasta":"Bananenkuchen","Mozaik Pasta":"Mosaik-Kuchen","Malaga":"Malaga","Profiterol":"Profiterole",
          "Sade Dondurma":"Vanilleeis","Külah Dondurma":"Eis in der Waffel","Kase Dondurma":"Eisbecher","Meyveli Dondurma":"Fruchteis",
          "Köfte":"Köfte","Tavuk Şiş":"Hähnchenspieß","Tavuk Kanat":"Hähnchenflügel","Adana Kebap":"Adana Kebab","Urfa Kebap":"Urfa Kebab","Beyti":"Beyti Kebab","Patlıcan Kebap":"Auberginen-Kebab","Domates Kebap":"Tomaten-Kebab","Yoğurtlu Kebap":"Kebab mit Joghurt","Sarma Beyti":"Gerollter Beyti","Et Sac Tava":"Rindfleisch Sac Tava","Tavuk Sac Tava":"Hähnchen Sac Tava","Alinazik":"Alinazik","Çökertme":"Cokertme","Lokum Izgara":"Gegrilltes Lokum-Fleisch","Karışık Kebap":"Gemischter Kebab","Balık":"Fisch",
          "Çift Elma":"Doppelapfel","Üzüm":"Traube","Nane Mint":"Minze","Ice Cola":"Ice Cola","Infinity":"Infinity","İzmir Romantik":"Izmir Romantic","Lady Killer":"Lady Killer","Levo 66":"Levo 66","Master Mix":"Master Mix","Moskova Geceleri":"Moskauer Nächte","Tarçın Sakız":"Zimt-Kaugummi","Turkish Mastik":"Türkischer Mastix","Special Nargile":"Spezial-Shisha"
        }
      },
      ar: {
        htmlLang:"ar",
        dir:"rtl",
        ui:{
          title:"مطعم ومقهى تشينار - القائمة",
          languageTitle:"اللغة",
          heroEyebrow:"أهلا وسهلا",
          heroSubtitle:"مطعم ومقهى",
          heroIntro:"مشروبات ساخنة وباردة، حلويات، نكهات أرجيلة وأطباق مطعم محضرة بعناية.",
          navLabel:"أقسام القائمة",
          searchPlaceholder:"ابحث في القائمة...",
          priceNote:"الأسعار بالليرة التركية.",
          featured:"مختارات",
          result:"تم العثور على {count} نتيجة",
          empty:"لا توجد نتيجة مطابقة.",
          footer:"مطعم ومقهى<br>صحة وعافية. شكرا لكم."
        },
        categories:{
          "sicak-icecekler":"مشروبات ساخنة",
          "soguk-kahveler":"قهوة باردة",
          "frappe-frozen":"فرابيه وفروزن وسموذي",
          "soguk-icecekler":"مشروبات باردة",
          "yoresel-kahveler":"قهوة تقليدية",
          "tatlilar":"حلويات وكيك",
          "dondurma":"آيس كريم",
          "izgara":"مشاوي وأطباق رئيسية",
          "nargile":"أرجيلة"
        },
        items:{
          "Çay":"شاي","Çay Double":"شاي دبل","Nane Limon":"نعناع وليمون","Nescafe Sade":"نسكافيه سادة","Kivi Çayı":"شاي كيوي","Kış Çayı":"شاي الشتاء","Mango Çayı":"شاي مانجو","Kuşburnu Çayı":"شاي ورد بري","Ihlamur":"زيزفون","Yaseminli Yeşil Çay":"شاي أخضر بالياسمين","Yeşil Çay":"شاي أخضر","Papatya Çayı":"شاي بابونج","Ada Çayı":"شاي الميرمية","Sütlü Nescafe":"نسكافيه بالحليب","Beyaz Sıcak Çikolata":"شوكولاتة بيضاء ساخنة","Sade Sıcak Çikolata":"شوكولاتة ساخنة كلاسيكية","Salep":"سحلب","Ballı Süt":"حليب بالعسل","Termos Çay":"ترمس شاي",
          "Ice Çınar Special":"آيس تشينار سبيشل","Ice Mocha":"آيس موكا","Ice Latte":"آيس لاتيه","Soğuk Çikolata":"شوكولاتة باردة","Beyaz Soğuk Çikolata":"شوكولاتة بيضاء باردة","Ice Americano":"آيس أمريكانو","Ice Caramel Macchiato":"آيس كراميل ماكياتو","Ice Caramel Latte":"آيس كراميل لاتيه","Ice Vanilya Latte":"آيس فانيليا لاتيه","Ice White Chocolate Mocha":"آيس وايت تشوكليت موكا","Affogato":"أفوجاتو",
          "Karadut Frozen":"فروزن توت أسود","Ananas Frozen":"فروزن أناناس","Yeşil Elma Frozen":"فروزن تفاح أخضر","Çilek Frozen":"فروزن فراولة","Böğürtlenli Frozen":"فروزن بلاك بيري","Karışık Frozen":"فروزن مشكل","Limon Frozen":"فروزن ليمون","Şeftali Frozen":"فروزن خوخ","Karpuz Frozen":"فروزن بطيخ","Kivi Frozen":"فروزن كيوي","Kavun Frozen":"فروزن شمام","Mango Frozen":"فروزن مانجو","Fresh Frozen":"فروزن فريش","Orman Meyveli Milkshake":"ميلك شيك فواكه الغابة","Çikolatalı Milkshake":"ميلك شيك شوكولاتة","Karamelli Milkshake":"ميلك شيك كراميل","Kivi Milkshake":"ميلك شيك كيوي","Böğürtlen Frappe Milkshake":"ميلك شيك فرابيه بلاك بيري","Vanilya Milkshake":"ميلك شيك فانيليا","Çilekli Milkshake":"ميلك شيك فراولة","Mangolu Milkshake":"ميلك شيك مانجو","Şeftali Milkshake":"ميلك شيك خوخ","Karadut Milkshake":"ميلك شيك توت أسود","Muzlu Milkshake":"ميلك شيك موز","Şirin Baba":"شيرين بابا","Klasik Frappe":"فرابيه كلاسيك","Çilekli Frappe":"فرابيه فراولة","Çikolatalı Frappe":"فرابيه شوكولاتة","Fıstıklı Frappe":"فرابيه فستق","Karamelli Frappe":"فرابيه كراميل","Muzlu Smoothie":"سموذي موز","Çilekli Smoothie":"سموذي فراولة","Şeftali Smoothie":"سموذي خوخ","Klasik Mojito":"موهيتو كلاسيك","Elmalı Mojito":"موهيتو تفاح","Çilekli Mojito":"موهيتو فراولة","Red Bull Mojito":"موهيتو ريد بول","Karadut Lime Mojito":"موهيتو توت أسود ولايم",
          "Portakal Suyu":"عصير برتقال","Churchill":"تشرشل","Limonata":"ليموناضة","Çilekli Limonata":"ليموناضة فراولة","Hibiskus":"كركديه","Reyhan Şerbeti":"شراب الريحان","Sürahi Ayran":"إبريق عيران",
          "Türk Kahvesi":"قهوة تركية","Damla Sakızlı Türk Kahvesi":"قهوة تركية بالمستكة","Dibek Kahvesi":"قهوة ديبك","Menengiç Kahvesi":"قهوة مننجيج","Süryani Kahvesi":"قهوة سريانية","Double Türk Kahvesi":"قهوة تركية دبل","Osmanlı Kahvesi":"قهوة عثمانية",
          "Kadayıf":"كنافة قَدايف","Künefe":"كنافة","Kebin Tatlısı":"حلوى كبين","Kelebek Tatlısı":"حلوى الفراشة","Midye Baklava":"بقلاوة صدفية","Soğuk Baklava":"بقلاوة باردة","Sütlaç":"أرز بالحليب","San Sebastian Cheesecake":"سان سيباستيان تشيز كيك","Lotus Pasta":"كيك لوتس","Orman Meyveli Pasta":"كيك فواكه الغابة","Devils Çikolatalı Pasta":"كيك شوكولاتة ديفلز","Muzlu Pasta":"كيك موز","Mozaik Pasta":"كيك موزاييك","Malaga":"مالاغا","Profiterol":"بروفيترول",
          "Sade Dondurma":"آيس كريم سادة","Külah Dondurma":"آيس كريم بالقرطاس","Kase Dondurma":"آيس كريم بالكاسة","Meyveli Dondurma":"آيس كريم بالفواكه",
          "Köfte":"كفتة","Tavuk Şiş":"شيش دجاج","Tavuk Kanat":"أجنحة دجاج","Adana Kebap":"كباب أضنة","Urfa Kebap":"كباب أورفا","Beyti":"بيتي كباب","Patlıcan Kebap":"كباب باذنجان","Domates Kebap":"كباب طماطم","Yoğurtlu Kebap":"كباب بالزبادي","Sarma Beyti":"بيتي ملفوف","Et Sac Tava":"صاج لحم","Tavuk Sac Tava":"صاج دجاج","Alinazik":"علي نازك","Çökertme":"تشوكرتما","Lokum Izgara":"لحم لوكوم مشوي","Karışık Kebap":"كباب مشكل","Balık":"سمك",
          "Çift Elma":"تفاحتين","Üzüm":"عنب","Nane Mint":"نعناع","Ice Cola":"آيس كولا","Infinity":"إنفينيتي","İzmir Romantik":"إزمير رومانتيك","Lady Killer":"ليدي كيلر","Levo 66":"ليفو 66","Master Mix":"ماستر ميكس","Moskova Geceleri":"ليالي موسكو","Tarçın Sakız":"قرفة وعلكة","Turkish Mastik":"مستكة تركية","Special Nargile":"أرجيلة خاصة"
        }
      }
    };

    const nav = document.getElementById("nav");
    const menuEl = document.getElementById("menu");
    const featuredEl = document.getElementById("featured");
    const searchInput = document.getElementById("search");
    const resultMeta = document.getElementById("resultMeta");
    const emptyState = document.getElementById("emptyState");
    const categoryNav = document.getElementById("categoryNav");
    const priceNote = document.getElementById("priceNote");
    const heroEyebrow = document.getElementById("heroEyebrow");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const heroIntro = document.getElementById("heroIntro");
    const footerText = document.getElementById("footerText");
    const languageTitle = document.getElementById("languageTitle");
    const langButtons = document.querySelectorAll("[data-lang]");
    let currentLang = "tr";

    function activeLanguage(){
      return languageData[currentLang] || languageData.tr;
    }

    function translateItem(name){
      return activeLanguage().items[name] || name;
    }

    function translateCategory(cat){
      return activeLanguage().categories[cat.id] || cat.title;
    }

    function normalizeText(text){
      return String(text || "")
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c");
    }

    function itemTemplate(item, catId){
      const [name, price, desc = ""] = item;
      const displayName = translateItem(name);
      const displayDesc = desc;
      const cat = menu.find(entry => entry.id === catId);
      const displayCategory = cat ? translateCategory(cat) : catId;
      const img = images[`${catId}::${name}`] || images[name] || categoryImages[catId];
      const searchable = normalizeText(`${name} ${displayName} ${desc} ${displayCategory} ${catId}`);
      return `<article class="item ${img ? "" : "no-img"}" data-search="${searchable}">
        <div class="thumb">${img ? `<img src="${img}" alt="${displayName}" loading="lazy">` : ""}</div>
        <div><div class="name">${displayName}</div>${displayDesc ? `<div class="desc">${displayDesc}</div>` : ""}</div>
        <div class="price">${price} TL</div>
      </article>`;
    }

    function render(){
      const copy = activeLanguage();
      nav.innerHTML = menu.map(cat => `<a href="#${cat.id}">${translateCategory(cat)}</a>`).join("");
      const allItems = menu.flatMap(cat => cat.items);
      featuredEl.innerHTML = featured.map(name => {
        const found = allItems.find(item => item[0] === name);
        const displayName = found ? translateItem(found[0]) : "";
        const img = found ? images[found[0]] : "";
        return found ? `<article class="card">${img ? `<img src="${img}" alt="${displayName}">` : ""}<div class="card-body"><div class="tag">${copy.ui.featured}</div><div class="name">${displayName}</div><div class="price">${found[1]} TL</div></div></article>` : "";
      }).join("");
      menuEl.innerHTML = menu.map(cat => `<section id="${cat.id}" data-section>
        <div class="section-head">
          <div class="icon">${cat.icon}</div>
          <h2>${translateCategory(cat)}</h2>
          <div class="deco">◆</div>
        </div>
        <div class="grid">${cat.items.map(item => itemTemplate(item, cat.id)).join("")}</div>
      </section>`).join("");
    }

    function applySearch(){
      const value = normalizeText((searchInput.value || "").trim());
      let visibleCount = 0;
      document.querySelectorAll(".item").forEach(item => {
        const visible = !value || item.dataset.search.includes(value);
        item.classList.toggle("hidden", !visible);
        if (visible && value) visibleCount += 1;
      });
      document.querySelectorAll("[data-section]").forEach(section => {
        const hasVisible = [...section.querySelectorAll(".item")].some(item => !item.classList.contains("hidden"));
        section.classList.toggle("hidden", !hasVisible);
      });
      featuredEl.classList.toggle("hidden", Boolean(value));
      resultMeta.textContent = value ? activeLanguage().ui.result.replace("{count}", visibleCount) : "";
      emptyState.textContent = activeLanguage().ui.empty;
      emptyState.classList.toggle("hidden", !value || visibleCount > 0);
    }

    function updateStaticText(){
      const copy = activeLanguage();
      document.documentElement.lang = copy.htmlLang;
      document.documentElement.dir = copy.dir;
      document.title = copy.ui.title;
      categoryNav.setAttribute("aria-label", copy.ui.navLabel);
      searchInput.placeholder = copy.ui.searchPlaceholder;
      priceNote.textContent = copy.ui.priceNote;
      heroEyebrow.textContent = copy.ui.heroEyebrow;
      heroSubtitle.textContent = copy.ui.heroSubtitle;
      heroIntro.textContent = copy.ui.heroIntro;
      footerText.innerHTML = copy.ui.footer;
      languageTitle.textContent = copy.ui.languageTitle;
      emptyState.textContent = copy.ui.empty;
      langButtons.forEach(button => button.classList.toggle("active", button.dataset.lang === currentLang));
    }

    function setLanguage(lang){
      currentLang = languageData[lang] ? lang : "tr";
      try { localStorage.setItem("cinar-menu-lang", currentLang); } catch {}
      updateStaticText();
      render();
      applySearch();
    }

    searchInput.addEventListener("input", applySearch);
    langButtons.forEach(button => {
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });

    let savedLang = "tr";
    try { savedLang = localStorage.getItem("cinar-menu-lang") || "tr"; } catch {}
    setLanguage(savedLang);
  
export {};