const menuData = [
  // ================== Breakfast ==================
  { 
  name: "Halwa Puri",
  category: "Breakfast",
  price: "Rs. 450",
  image: "https://media.istockphoto.com/id/502759669/photo/halwa-puri-breakfast.jpg?s=612x612&w=0&k=20&c=pAVZBHulOXX7o3HOXgmRQAGsTFJuoAL3UbZirxLnpJg=",
  description: "Traditional Pakistani breakfast with fluffy puri, sweet halwa, and spicy chickpeas."
},

{
  name: "Aloo Paratha",
  category: "Breakfast",
  price: "Rs. 280",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROv6MaNZQaa8gqgH4XqpO1ZyBszdy_HJXoCwetZZCGn5ugU9YyfkDFwcQh&s=10",
  description: "Crispy flatbread stuffed with flavorful mashed potatoes and spices."
},

{
  name: "Cheese Omelette",
  category: "Breakfast",
  price: "Rs. 320",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4-TaJ2pmfK5ricCq3yx4iC6pCD3_8Dvp1Li9BySvyQ&s",
  description: "Fluffy eggs filled with melted cheese and cooked to perfection."
},

{
  name: "French Toast",
  category: "Breakfast",
  price: "Rs. 350",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqOKSTk3OTVnIOgb_gEXZJ2ALM8y00LkYicTTytT5ttHAgi3pT69SkGU&s=10",
  description: "Golden toasted bread dipped in egg mixture and lightly sweetened."
},

{
  name: "Pancakes",
  category: "Breakfast",
  price: "Rs. 400",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSU_WVvspgbmrUr6UK_rYh2SQ0BdBzgDV23ilJz_3lBo_U6gNgpKjsQQ0f&s=10",
  description: "Soft and fluffy pancakes served with syrup and butter."
},

{
  name: "Chicken Sandwich",
  category: "Breakfast",
  price: "Rs. 380",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9agOHzTODABEiVoaksVKy7YlnnEtWSCTmCrV5lvABC0jPXWFoltvZcKXc&s=10",
  description: "Grilled chicken with fresh vegetables and creamy mayo in toasted bread."
},

{
  name: "Club Sandwich",
  category: "Breakfast",
  price: "Rs. 450",
  image: "https://t4.ftcdn.net/jpg/07/07/16/29/360_F_707162908_rOMRnjEBt8AKe2vY5EqLv8r0gKAunxOn.jpg",
  description: "Triple-layer sandwich loaded with chicken, egg, vegetables, and cheese."
},

{
  name: "Nihari",
  category: "Breakfast",
  price: "Rs. 650",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIq9ntyWgJbNTBW5sJa_2NdRhrTES07PgyBd4Ek-QoTqKskiByn77mskh&s=10",
  description: "Slow-cooked spicy beef stew served with naan for a rich breakfast."
},

{
  name: "Chana Masala",
  category: "Breakfast",
  price: "Rs. 250",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjS6YIM6lVS023LYK8tx1aECAI16f4zkFsUascs1WAkPlvAvu330R-BM&s=10",
  description: "Classic chickpea curry cooked with aromatic spices and herbs."
},

{
  name: "Desi Breakfast",
  category: "Breakfast",
  price: "Rs. 750",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLKYRTzbIjLJSV1bd_fu9ujiC-beRoL5WRiYFb-UvzmBnwyrWgcHDDXk&s=10",
  description: "A complete breakfast platter with paratha, omelette, halwa, and tea."
},
 // ================== Lunch ==================
{
  name: "Chicken Biryani",
  category: "Lunch",
  price: "Rs. 550",
  image: "https://static.vecteezy.com/system/resources/thumbnails/040/703/949/small/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg",
  description: "Fragrant basmati rice layered with spicy chicken and traditional spices."
},

{
  name: "Beef Biryani",
  category: "Lunch",
  price: "Rs. 650",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3SV9uAHBwtAq0sfDz0gmMEZo2dCrYXYZ0PNaZj2KNgBRwu-dKV0U808Y&s=10",
  description: "Flavorful beef cooked with aromatic rice and authentic biryani masala."
},

{
  name: "Chicken Karahi",
  category: "Lunch",
  price: "Rs. 950",
  image: "https://i.ytimg.com/vi/GIYgCNsgzUw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCjwWjbJ23XExe2KWcHottP40j5hw",
  description: "Tender chicken cooked in a rich tomato-based karahi masala."
},

{
  name: "Mutton Karahi",
  category: "Lunch",
  price: "Rs. 1450",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Mutton_karahi.jpg",
  description: "Juicy mutton prepared with fresh tomatoes, ginger, and spices."
},

{
  name: "Chicken Handi",
  category: "Lunch",
  price: "Rs. 990",
  image: "https://i.ytimg.com/vi/_kkosy25Yuc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA83cvGjKEEUkYkFRH7zxc2t_nIDA",
  description: "Creamy chicken curry cooked with fresh cream and special herbs."
},

{
  name: "White Chicken",
  category: "Lunch",
  price: "Rs. 1100",
  image: "https://i.ytimg.com/vi/muimtkU9pt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBO1CfWFgMHZVWD5AmxwQeOxJandA",
  description: "Rich creamy chicken cooked with mild spices and cheese."
},

{
  name: "Chicken Pulao",
  category: "Lunch",
  price: "Rs. 450",
  image: "https://ikneadtoeat.com/wp-content/uploads/2022/06/chicken-pulao-recipe-2.jpg",
  description: "Lightly spiced rice cooked with tender chicken and fragrant herbs."
},

{
  name: "Chicken Qorma",
  category: "Lunch",
  price: "Rs. 850",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MH2Ee8zR4tSoUpBbdD_VKLoPQjmbKlApaTCW4LRDIlxOSW9QNXLBj6c&s=10",
  description: "Traditional chicken curry with creamy gravy and aromatic spices."
},

{
  name: "Dal Chawal",
  category: "Lunch",
  price: "Rs. 300",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdh46htMgElBcsQUIfmYG17p5nEo3Yi3xMZqY_Sa1votN_WwJfginAns4&s=10",
  description: "Comforting lentil curry served with steamed rice."
},

{
  name: "Chicken Tikka",
  category: "Lunch",
  price: "Rs. 420",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6Xw3WS5S_15Z6gt35h30M5cyvR5t6jR2QJ4NpcxRP2lMbczjabRFs0P8&s=10",
  description: "Smoky grilled chicken marinated with traditional BBQ spices."
},

// ================== Drinks ==================
{
  name: "Coca Cola",
  category: "Drinks",
  price: "Rs. 120",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqp0Dw4vRYe6BAGbovmNWSDLAC84hBw86zlOCy7d_AFX1JqmYiwrDB3ZY&s=10",
  description: "Chilled refreshing soft drink served ice cold."
},

{
  name: "Pepsi",
  category: "Drinks",
  price: "Rs. 120",
  image: "https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656175_G6SlGTBVl4pg8oXh6jr86cOmKUZjfrym.jpg",
  description: "Classic carbonated soft drink with a refreshing taste."
},

{
  name: "7UP",
  category: "Drinks",
  price: "Rs. 120",
  image: "https://t4.ftcdn.net/jpg/05/49/40/09/360_F_549400997_86VwTSHVAo18DllHzlWXaeLbBLAgYOEu.jpg",
  description: "Refreshing lemon-lime soft drink served chilled."
},

{
  name: "Mint Margarita",
  category: "Drinks",
  price: "Rs. 280",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nnKoJ91d1g4mvuy1h_uo9a1BUxWfFZdL4raSnZO6wYatT7W7HxlsKtc&s=10",
  description: "Fresh mint and lemon blended into a cool refreshing drink."
},

{
  name: "Lemonade",
  category: "Drinks",
  price: "Rs. 250",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv5-v4DOu-K0IQhTuBLT6nxRUZJGuyjujiMDWp4VQ2Lh7WdllMCEns2I&s=10",
  description: "Freshly squeezed lemons mixed with chilled sparkling water."
},

{
  name: "Mango Shake",
  category: "Drinks",
  price: "Rs. 350",
  image: "https://t4.ftcdn.net/jpg/01/63/49/09/360_F_163490991_ASRBS0x9ZEWekoihL8UcRIV6BebG2Ud2.jpg",
  description: "Creamy mango shake made with fresh mangoes and milk."
},

{
  name: "Chocolate Shake",
  category: "Drinks",
  price: "Rs. 380",
  image: "https://media.istockphoto.com/id/926990564/photo/chocolate-milk-and-whipped-cream.jpg?s=612x612&w=0&k=20&c=LabS3iGKio9kYS7OUGsosTm0Bb4XKY8WkXPer_RU3IQ=",
  description: "Rich chocolate milkshake topped with whipped cream."
},

{
  name: "Fresh Orange Juice",
  category: "Drinks",
  price: "Rs. 300",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG983JOrIt7UqaY0oBcdEklq0tN352dzBSrzzaE2_OuijBGLTV1GJRwSM&s=10",
  description: "Pure freshly squeezed orange juice full of natural flavor."
},

{
  name: "Cold Coffee",
  category: "Drinks",
  price: "Rs. 350",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivDyc7MoSPqF1OGmP2200f_EuNKACcpZMuccsYm887Na6rF94YFFFhnA&s=10",
  description: "Creamy iced coffee blended with milk and chocolate."
},

{
  name: "Mineral Water",
  category: "Drinks",
  price: "Rs. 80",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1LAtAib957b8pmPZPB58AsrMttBhzFsecEcnKQsFPxDJ8a3MNjLlfTA&s=10",
  description: "Pure bottled mineral water served chilled."
},

// ================== Dinner ==================
{
  name: "BBQ Steak",
  category: "Dinner",
  price: "Rs. 1600",
  image: "https://placehold.co/400x300?text=BBQ+Steak",
  description: "Juicy grilled steak seasoned with smoky BBQ flavors."
},

{
  name: "Grilled Chicken",
  category: "Dinner",
  price: "Rs. 850",
  image: "https://placehold.co/400x300?text=Grilled+Chicken",
  description: "Tender grilled chicken served with herbs and vegetables."
},

{
  name: "Chicken Alfredo Pasta",
  category: "Dinner",
  price: "Rs. 950",
  image: "https://placehold.co/400x300?text=Chicken+Alfredo+Pasta",
  description: "Creamy Alfredo pasta tossed with juicy grilled chicken."
},

{
  name: "Chicken Lasagna",
  category: "Dinner",
  price: "Rs. 900",
  image: "https://placehold.co/400x300?text=Chicken+Lasagna",
  description: "Layers of pasta, chicken, cheese, and rich tomato sauce."
},

{
  name: "Zinger Burger",
  category: "Dinner",
  price: "Rs. 550",
  image: "https://placehold.co/400x300?text=Zinger+Burger",
  description: "Crispy spicy chicken fillet served in a soft burger bun."
},

{
  name: "Beef Burger",
  category: "Dinner",
  price: "Rs. 680",
  image: "https://placehold.co/400x300?text=Beef+Burger",
  description: "Juicy beef patty layered with cheese and fresh vegetables."
},

{
  name: "Chicken Pizza",
  category: "Dinner",
  price: "Rs. 1400",
  image: "https://placehold.co/400x300?text=Chicken+Pizza",
  description: "Cheesy pizza topped with seasoned chicken and vegetables."
},

{
  name: "Fajita Pizza",
  category: "Dinner",
  price: "Rs. 1500",
  image: "https://placehold.co/400x300?text=Fajita+Pizza",
  description: "Loaded pizza with fajita chicken, onions, and capsicum."
},

{
  name: "Chicken Chow Mein",
  category: "Dinner",
  price: "Rs. 750",
  image: "https://placehold.co/400x300?text=Chicken+Chow+Mein",
  description: "Stir-fried noodles with chicken and fresh vegetables."
},

{
  name: "Chicken Fried Rice",
  category: "Dinner",
  price: "Rs. 700",
  image: "https://placehold.co/400x300?text=Chicken+Fried+Rice",
  description: "Classic fried rice cooked with chicken, vegetables, and soy sauce."
},

// ================== Dessert ==================
{
  name: "Chocolate Cake",
  category: "Dessert",
  price: "Rs. 450",
  image: "https://placehold.co/400x300?text=Chocolate+Cake",
  description: "Moist chocolate cake layered with rich chocolate frosting."
},

{
  name: "Cheesecake",
  category: "Dessert",
  price: "Rs. 550",
  image: "https://placehold.co/400x300?text=Cheesecake",
  description: "Creamy baked cheesecake with a buttery biscuit base."
},

{
  name: "Brownie",
  category: "Dessert",
  price: "Rs. 350",
  image: "https://placehold.co/400x300?text=Brownie",
  description: "Soft chocolate brownie with a rich fudgy center."
},

{
  name: "Ice Cream",
  category: "Dessert",
  price: "Rs. 250",
  image: "https://placehold.co/400x300?text=Ice+Cream",
  description: "Creamy frozen dessert available in delicious flavors."
},

{
  name: "Gulab Jamun",
  category: "Dessert",
  price: "Rs. 220",
  image: "https://placehold.co/400x300?text=Gulab+Jamun",
  description: "Soft milk dumplings soaked in sweet sugar syrup."
},

{
  name: "Kheer",
  category: "Dessert",
  price: "Rs. 280",
  image: "https://placehold.co/400x300?text=Kheer",
  description: "Traditional rice pudding cooked with milk and cardamom."
},

{
  name: "Ras Malai",
  category: "Dessert",
  price: "Rs. 320",
  image: "https://placehold.co/400x300?text=Ras+Malai",
  description: "Soft cheese patties served in sweet creamy milk."
},

{
  name: "Kunafa",
  category: "Dessert",
  price: "Rs. 650",
  image: "https://placehold.co/400x300?text=Kunafa",
  description: "Middle Eastern dessert with crispy pastry and melted cheese."
},

{
  name: "Donut",
  category: "Dessert",
  price: "Rs. 180",
  image: "https://placehold.co/400x300?text=Donut",
  description: "Soft glazed donut with a sweet and fluffy texture."
},

{
  name: "Macaron",
  category: "Dessert",
  price: "Rs. 450",
  image: "https://placehold.co/400x300?text=Macaron",
  description: "Delicate French cookies with creamy flavored filling."
},

// ================== Salad ==================
{
  name: "Caesar Salad",
  category: "Salad",
  price: "Rs. 450",
  image: "https://placehold.co/400x300?text=Caesar+Salad",
  description: "Fresh lettuce tossed with Caesar dressing, cheese, and croutons."
},

{
  name: "Greek Salad",
  category: "Salad",
  price: "Rs. 420",
  image: "https://placehold.co/400x300?text=Greek+Salad",
  description: "Healthy salad with tomatoes, cucumbers, olives, and feta cheese."
},

{
  name: "Chicken Salad",
  category: "Salad",
  price: "Rs. 520",
  image: "https://placehold.co/400x300?text=Chicken+Salad",
  description: "Fresh vegetables topped with grilled chicken and dressing."
},

{
  name: "Russian Salad",
  category: "Salad",
  price: "Rs. 380",
  image: "https://placehold.co/400x300?text=Russian+Salad",
  description: "Creamy mixed vegetable salad with mayonnaise dressing."
},

{
  name: "Garden Salad",
  category: "Salad",
  price: "Rs. 350",
  image: "https://placehold.co/400x300?text=Garden+Salad",
  description: "Fresh seasonal vegetables served with light dressing."
},

{
  name: "Fruit Salad",
  category: "Salad",
  price: "Rs. 300",
  image: "https://placehold.co/400x300?text=Fruit+Salad",
  description: "A colorful mix of fresh seasonal fruits."
},

{
  name: "Pasta Salad",
  category: "Salad",
  price: "Rs. 480",
  image: "https://placehold.co/400x300?text=Pasta+Salad",
  description: "Cold pasta tossed with vegetables and creamy dressing."
},

{
  name: "Coleslaw",
  category: "Salad",
  price: "Rs. 250",
  image: "https://placehold.co/400x300?text=Coleslaw",
  description: "Crunchy cabbage and carrots mixed with creamy mayonnaise."
},

{
  name: "Tuna Salad",
  category: "Salad",
  price: "Rs. 650",
  image: "https://placehold.co/400x300?text=Tuna+Salad",
  description: "Fresh vegetables combined with premium tuna and herbs."
},

{
  name: "Avocado Salad",
  category: "Salad",
  price: "Rs. 750",
  image: "https://placehold.co/400x300?text=Avocado+Salad",
  description: "Healthy avocado salad with fresh greens and lemon dressing."
},
];