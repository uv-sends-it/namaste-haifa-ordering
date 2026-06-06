const MAIN_COURSE_OPTIONS = [
  "Dum Aloo","Rajma Curry","Dal Makhani","Chole","Malai Kofta",
  "Sarson Da Saag","Malay Chap","Baingan Bharta","Masala Bhindi",
  "Aloo Tamatar Matar","Matar Paneer","Paneer Lababdar","Paneer Bhurji",
  "Shahi Paneer","Yellow Dal Tadka",
];

const MENU = [
  {
    category: "Haifa Special",
    items: [
      { name: "Fix Thali", desc: "3 curries with 4 phulka roti", price: 14.00, curryPicker: true },
      { name: "Unlimited Roti Thali", desc: "3 curries one time serve with unlimited phulka roti", price: 18.00, curryPicker: true },
      { name: "Unlimited Thali", desc: "Unlimited serves of 3 curries and unlimited phulka roti", price: 23.00, curryPicker: true },
      { name: "Kathiyavadi Thali", desc: "Unlimited Kathiyavadi curries and unlimited phulka roti", price: 33.00 },
    ]
  },
  {
    category: "Indian Tiffin Services",
    items: [
      { name: "Dal Bati Thali", desc: "Rajsthani dal bati churma thali", price: 25.00 },
      { name: "One Curry Meal", desc: "One curry comes with four phulka roti", price: 18.50 },
      { name: "Full Thali Tiffin with Chawal", desc: "One curry and one dal, dessert and salad. Fulka roti top on desi ghee.", price: 23.00 },
      { name: "Take Away NH Thali", desc: "3 curry, 2 roti with rice and salad", price: 17.00 },
    ]
  },
  {
    category: "Combo Meal",
    items: [
      { name: "Dal Makhani with Two Paratha", desc: "Black lentils and kidney beans in a rich, creamy tomato sauce, served with two parathas.", price: 18.50 },
      { name: "Dum Aloo with Triangle Two Paratha", desc: "Spicy potato curry served with two crispy triangle parathas.", price: 18.50 },
      { name: "Dal Tadka with Two Paratha", desc: "Traditional lentil curry served with two parathas.", price: 18.50 },
      { name: "Dal Tadka Jeera Rice", desc: "Aromatic lentil curry served with jeera flavoured rice.", price: 18.50, popular: true },
      { name: "Dal Makhani with Rice", desc: "Black lentils and kidney beans in a rich, creamy sauce, served with rice.", price: 17.00 },
      { name: "Chhole with Rice", desc: "Spicy chickpea curry served with rice.", price: 17.00 },
      { name: "Aloo Puri with Mango Ras", desc: "Crispy puri served with a sweet and tangy mango ras.", price: 22.50 },
      { name: "Rajma Chawal", desc: "Spicy kidney beans served with steamed rice.", price: 17.00, popular: true },
      { name: "Punjabi Pakoda Kadhi Chawal", desc: "Crispy fried pakodas served with a creamy kadhi and steaming hot chawal.", price: 17.00, popular: true },
      { name: "Punjabi Pakoda Kadhi with Punjabi Parthe", desc: "Crispy fried pakodas in a creamy kadhi served with Punjabi parthe.", price: 17.00 },
      { name: "Chole Puri", desc: "Traditional North Indian-style chickpea curry served with puffed bread.", price: 18.50 },
      { name: "Sarson Da Saag with Paratha", desc: "Traditional Punjabi mustard greens curry served with paratha.", price: 18.50 },
      { name: "Aloo Bhaji with Puri", desc: "Crispy puri served with a flavorful potato curry.", price: 18.50 },
    ]
  },
  {
    category: "All Day Breakfast (Starters)",
    items: [
      { name: "Dabeli", desc: "Street-style snack featuring a sweet and spicy flavour profile.", price: 10.00 },
      { name: "Sev Puri", desc: "Puri topped with onions, tomatoes, potatoes and chutneys, finished with sev.", price: 11.50 },
      { name: "Pani Puri Calcutta Puchka", desc: "Crunchy puris filled with a tangy and spicy mixture.", price: 11.50 },
      { name: "Aloo Paratha", desc: "Wheat flatbread stuffed with boiled and spiced potatoes, topped with white butter. Served with chutney and raita.", price: 15.00 },
      { name: "Gujarati Dhebra", desc: "Indian bread from Gujarati cuisine made of wheat flour flavoured with fenugreek leaf, chilli garlic and herbs.", price: 12.65 },
      { name: "Bombay Vada Pav", desc: "Potato dumpling pressed between seasoned bread with spicy chutney and green chillies.", price: 11.50 },
      { name: "Bhel Puri", desc: "Crunchy puffed rice snack flavoured with spices and herbs.", price: 13.00 },
      { name: "Dahi Bhalla Chaat", desc: "Soft lentil dumplings soaked in chilled yoghurt, topped with chutneys and chaat spices.", price: 13.00 },
      { name: "Aloo Tikki Chaat", desc: "Crispy potato patties served with a tangy and spicy chaat sauce.", price: 13.00 },
      { name: "Samosa Chaat", desc: "Crispy potato samosa, crushed into chaat and topped with tangy and spicy chutneys.", price: 13.00 },
      { name: "Onion Bhaji", desc: "Crispy onion fritters with a delicate flavour.", price: 13.00 },
      { name: "Pakoda", desc: "Crispy fried fritters served as a delightful breakfast starter.", price: 15.00 },
      { name: "Paneer Paratha", desc: "Indian-style flatbread filled with paneer.", price: 18.50, popular: true },
      { name: "Dal Kachori", desc: "Crispy pastry filled with a flavorful lentil curry.", price: 6.00 },
      { name: "Samosa", desc: "Crispy pastry pockets filled with spiced potatoes and peas.", price: 5.75 },
      { name: "Katori Chaat", desc: "Crisp, flavorful street food snack with a tangy twist.", price: 13.50 },
      { name: "Dahi Puri", desc: "Crispy shell stuffed with boiled potatoes, onions, tomatoes, curd, ground spices and chutneys.", price: 11.50 },
      { name: "Papdi Chaat", desc: "Crispy wheat crackers topped with cooked potatoes and chickpeas, with yoghurt and chutneys.", price: 11.50 },
      { name: "Bombay Samosa Pav", desc: "Deep fried pastry with spicy filling pressed between Indian bread rolls with chutneys.", price: 11.50 },
    ]
  },
  {
    category: "Indo Chinese Food",
    items: [
      { name: "Paneer Chilli", desc: "Indian cheese in a spicy chilli sauce.", price: 18.00 },
      { name: "Manchurian Dry", desc: "Spicy Indo-Chinese dish with a blend of vegetables and sauces.", price: 18.00, popular: true },
      { name: "Manchurian Gravy", desc: "Indo-Chinese Manchurian in a rich gravy-style sauce.", price: 16.00 },
      { name: "Schezwan Rice", desc: "Spicy rice dish with a blend of Schezwan flavours.", price: 17.00 },
      { name: "Hakka Noodles", desc: "Stir-fried noodles with a blend of spices and vegetables.", price: 17.00 },
      { name: "Fried Rice", desc: "Indo-Chinese style stir-fried rice, seasoned with a savoury blend of sauces and spices.", price: 17.00 },
    ]
  },
  {
    category: "Plates",
    items: [
      { name: "Namaste Haifa King Size Plate", desc: "King-size thali with assorted curries, dal, roti, puri, papad, salad and a yoghurt drink.", price: 37.95 },
      { name: "Tiffin Service", desc: "Tiffin with a curry choice of 250mL, dal of choice of 440mL, along with six bespoke rotis.", price: 23.00 },
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Dum Aloo", desc: "Slow cooked potato based curry dish.", price: 18.40 },
      { name: "Rajma Curry", desc: "Kidney beans cooked with onions, tomatoes and a variety of spices.", price: 17.25 },
      { name: "Dal Makhani", desc: "Blend of dal black beans and makhani butter. Slow cooked and creamy.", price: 18.40 },
      { name: "Chole", desc: "Spicy chickpeas in a tomato based sauce flavoured with coriander, ginger and spices.", price: 18.40 },
      { name: "Malai Kofta", desc: "Fried balls of potato, cheese and mixed vegetables in a creamy sauce of blended nuts, tomatoes and onions.", price: 19.55 },
      { name: "Sarson Da Saag", desc: "Traditional Punjabi mustard greens curry with aromatic spices.", price: 16.00 },
      { name: "Malay Chap", desc: "Malay-style chap with a blend of traditional spices and flavours.", price: 19.00 },
      { name: "Baingan Bharta", desc: "Roasted eggplant mash with a smoky flavour.", price: 19.00 },
      { name: "Masala Bhindi", desc: "Okra cooked in a rich and aromatic spice blend.", price: 19.00 },
      { name: "Aloo Tamatar Matar", desc: "Potatoes, tomatoes, and peas in a flavorful blend.", price: 17.00 },
      { name: "Matar Paneer", desc: "Peas and paneer in a rich, creamy sauce.", price: 19.00 },
      { name: "Paneer Lababdar", desc: "Indian cheese in a rich, creamy tomato sauce.", price: 17.00 },
      { name: "Paneer Bhurji", desc: "Scrambled Indian cheese with a rich, creamy texture.", price: 17.00 },
      { name: "Shahi Paneer", desc: "Rich and creamy paneer in a flavourful sauce.", price: 17.00 },
      { name: "Yellow Dal Tadka", desc: "A creamy, garlicky and smoky blend of three healthy lentils, served with basmati rice and roti.", price: 17.25 },
    ]
  },
  {
    category: "Breads",
    items: [
      { name: "Stuff Paratha", desc: "Flaky, layered flatbread stuffed with spices and herbs.", price: 10.00 },
      { name: "Paratha", desc: "Layered whole wheat flatbreads, crispy and flaky outside, soft inside.", price: 5.75, popular: true },
      { name: "Puri", desc: "Whole wheat breads deep fried to give a crispy and soft puffed up.", price: 3.45 },
      { name: "Tawa Roti", desc: "Roasted whole wheat flatbread.", price: 3.00 },
      { name: "Bhakhri", desc: "Traditional Gujarati flatbread that is thick and crisp.", price: 5.00 },
      { name: "Bajra Rotla", desc: "Traditional Gujarati flatbread made from bajra (pearl millet) flour.", price: 7.00 },
    ]
  },
  {
    category: "Rice",
    items: [
      { name: "Khichdi", desc: "A warm and healthy mix of rice, lentils, vegetables and tomatoes along with spices and herbs.", price: 15.00 },
      { name: "Jeera Rice", desc: "Steamed rice mixed with cumin seeds.", price: 10.00 },
      { name: "Plain Rice", desc: "Steaming hot, fluffy white rice.", price: 9.00 },
    ]
  },
  {
    category: "Gujarati Style Foods",
    items: [
      { name: "Dal Dhokali with Thepla", desc: "Traditional Gujarati lentil curry served with crispy thepla bread.", price: 19.00 },
      { name: "Chhuti Dal Kadhi Bhat", desc: "Traditional Gujarati-style lentil curry served with kadhi and steamed rice.", price: 21.00 },
      { name: "Dahi Bhindi", desc: "Crisp okra in a creamy yogurt sauce.", price: 18.00 },
      { name: "Bhindi Masala", desc: "Okra in a rich and aromatic spice blend.", price: 18.00 },
      { name: "Bateka Sukhi Bhaji", desc: "A traditional Gujarati dry potato curry with aromatic spices.", price: 15.00 },
      { name: "Ringan Bateka Tameta", desc: "Traditional Gujarati dish featuring eggplant and tomatoes.", price: 18.00 },
      { name: "Dungli Bateka Nu Shakh", desc: "Traditional Gujarati-style dish featuring Dungli and Bateka in a rich Shakh.", price: 16.99 },
      { name: "Gujarati Tiffin", desc: "One curry, dal and four roti with rice.", price: 23.00 },
      { name: "Bajri Rotlo", desc: "Traditional Gujarati flatbread made from millet flour.", price: 6.00 },
      { name: "Thepla", desc: "Traditional Gujarati flatbread.", price: 4.00 },
    ]
  },
  {
    category: "Kathiyavadi Food",
    items: [
      { name: "Baingan Bharta (Kathiyavadi)", desc: "Roasted eggplant mash with a smoky flavour.", price: 19.00 },
      { name: "Sev Tamatar", desc: "A Kathiyavadi tomato curry topped with crunchy sev (gram flour noodles).", price: 16.00 },
      { name: "Lasaniya Bataka", desc: "A traditional Kathiyavadi dish featuring potatoes in a rich and spicy flavour.", price: 18.00 },
      { name: "Vagharelo Rotlo", desc: "Traditional Gujarati flatbread served with a variety of accompaniments.", price: 16.00 },
      { name: "Vaghareli Rotli", desc: "Traditional Gujarati flatbread served with a variety of accompaniments.", price: 15.00 },
      { name: "Dal Dhokli", desc: "Traditional Gujarati lentil curry with wheat flour dumplings.", price: 17.00 },
      { name: "Bajri Rotla (Kathiyavadi)", desc: "Traditional Gujarati flatbread made from bajra flour.", price: 6.00 },
      { name: "Ghee God Rotlo", desc: "Traditional Gujarati flatbread served with ghee.", price: 18.00 },
      { name: "Dhokli Nu Shaak", desc: "Traditional Gujarati curry made with wheat flour dumplings in a rich and flavorful sauce.", price: 17.00 },
      { name: "Sev Dungri Nu Shaak", desc: "Traditional Gujarati dish made with sev and dungri in a flavorful curry.", price: 15.00 },
      { name: "Chaas Ma Vaghareli Rotli", desc: "Traditional Gujarati-style buttermilk curry served with rotli.", price: 15.00 },
      { name: "Dahi Bhindi (Kathiyavadi)", desc: "Crisp okra in a creamy yogurt sauce.", price: 18.00 },
      { name: "Bhakri (Kathiyavadi)", desc: "Traditional Gujarati flatbread.", price: 5.00 },
    ]
  },
  {
    category: "Jain Swaminarayan Foods",
    items: [
      { name: "Jain Bhindi Masala", desc: "Okra in a rich and aromatic masala sauce.", price: 18.00 },
      { name: "Jain Malay Paneer", desc: "Paneer dish inspired by Malay cuisine, prepared according to Jain principles.", price: 18.00 },
      { name: "Jain Malay Kofta", desc: "Soft kofta dumplings in a creamy gravy, prepared Jain style.", price: 18.00 },
      { name: "Jain Chhole", desc: "Traditional North Indian-style chickpea curry.", price: 17.00 },
      { name: "Jain Dal Makhani", desc: "Black lentils and kidney beans in a rich, creamy tomato sauce.", price: 17.00 },
      { name: "Jain Panjabi Kadhi", desc: "Jain-friendly Punjabi-style kadhi, prepared without onion, garlic or root vegetables.", price: 16.00 },
      { name: "Jain Mix Veg", desc: "Assorted mix of vegetables, carefully prepared according to Jain principles.", price: 17.00 },
      { name: "Jain Thepla", desc: "Traditional Gujarati flatbread made with a blend of spices.", price: 4.00 },
      { name: "Jain Antaray Tiffin", desc: "Two Jain curries with four roti and rice.", price: 23.00 },
      { name: "Jain Choviyar Tiffin", desc: "Two Jain curries with four roti and rice.", price: 25.00 },
    ]
  },
  {
    category: "Farali Fasting Food",
    items: [
      { name: "Aloo Bhaji (Farali)", desc: "Potato curry in the farali style, dry and simply seasoned for fasting days.", price: 17.50, popular: true },
      { name: "Rajgira Halwa", desc: "A traditional fasting food made with Rajgira.", price: 17.50 },
      { name: "Rajgira Puri", desc: "Traditional fasting food made with Rajgira flour.", price: 4.00 },
      { name: "Morayo Khichdi", desc: "Farali khichdi made with morayo (samo/barnyard millet) for fasting days.", price: 18.50 },
      { name: "Sabudana Khichdi", desc: "Traditional fasting food made with sabudana.", price: 17.50 },
    ]
  },
  {
    category: "Extras",
    items: [
      { name: "Red Chutney", desc: "Roasted Bengal gram, Kashmiri dried red chillies, lemon, garlic and onion.", price: 6.00 },
      { name: "Peanut Chutney", desc: "Roasted peanuts, garlic, green chillies, cumin seeds, salt and tamarind.", price: 6.00 },
      { name: "Coconut Chutney", desc: "Blended coconut with chillies, cumin, ginger and salt.", price: 6.00 },
    ]
  },
  {
    category: "Hot Beverages",
    items: [
      { name: "Masala Tea", desc: "Calming blend of ginger, cardamom, black pepper and a pinch of cinnamon.", price: 6.00 },
      { name: "Coffee Chennai Express", desc: "A south Indian staple with a subtle coffee flavour.", price: 4.60 },
      { name: "Darjeeling Tea", desc: "Strong and soothing black tea from the Himalayan foothills.", price: 4.60 },
      { name: "Masala Milk", desc: "Spiced milk beverage with a warm, comforting flavour.", price: 6.00 },
    ]
  },
  {
    category: "Cold Beverages",
    items: [
      { name: "Buttermilk", desc: "Fermented milk with a fluffy consistency to soothe.", price: 7.00, popular: true },
      { name: "Sweet Lassi", desc: "Creamy blend of yogurt, water and sugar.", price: 7.00 },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Kheer", desc: "Milk, rice and sugar. Garnished with saffron, cardamom and nuts.", price: 9.20 },
      { name: "Fruit Salad", desc: "A mix of fruits with condensed milk and cream.", price: 9.20 },
      { name: "Puran Poli", desc: "Stuffed sweet flatbread.", price: 9.20 },
      { name: "Sukhdi", desc: "Traditional Indian sweet treat made with gur and wheat flour.", price: 10.00 },
      { name: "Suji Ka Halwa", desc: "Traditional Indian semolina pudding.", price: 10.00 },
      { name: "Daliya Ka Halwa", desc: "Traditional Indian sweet pudding made with wheat and flavoured with spices.", price: 10.00 },
      { name: "Magaz", desc: "Traditional Indian sweet treat.", price: 13.00 },
    ]
  },
];