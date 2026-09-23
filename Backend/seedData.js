// // The same 16 sample products from src/assets/assets.js, copied here so the
// // backend can seed the database on first run without importing the
// // frontend's ES module file.
// module.exports = [
//   { _id: "p001", name: "Classic Cotton T-Shirt", description: "A soft, breathable cotton t-shirt that works for everyday wear. Regular fit with a crew neck.", price: 19.99, image: ["https://placehold.co/500x600/111827/ffffff/png?text=Cotton+T-Shirt", "https://placehold.co/500x600/111827/ffffff/png?text=Cotton+T-Shirt+2"], category: "Men", subCategory: "Upperwear", sizes: ["S", "M", "L", "XL"], bestseller: true },
//   { _id: "p002", name: "Slim Fit Denim Jeans", description: "Stretchable slim fit denim jeans with a mid-rise waist, built for all-day comfort.", price: 45.00, image: ["https://placehold.co/500x600/1f2937/ffffff/png?text=Denim+Jeans", "https://placehold.co/500x600/1f2937/ffffff/png?text=Denim+Jeans+2"], category: "Men", subCategory: "Bottomwear", sizes: ["30", "32", "34", "36"], bestseller: false },
//   { _id: "p003", name: "Formal Check Shirt", description: "A tailored check shirt made from breathable fabric, perfect for office or casual outings.", price: 34.50, image: ["https://placehold.co/500x600/374151/ffffff/png?text=Check+Shirt", "https://placehold.co/500x600/374151/ffffff/png?text=Check+Shirt+2"], category: "Men", subCategory: "Upperwear", sizes: ["S", "M", "L", "XL", "XXL"], bestseller: true },
//   { _id: "p004", name: "Men's Leather Belt", description: "Genuine leather belt with a classic buckle, a simple finishing touch for any outfit.", price: 15.99, image: ["https://placehold.co/500x600/44403c/ffffff/png?text=Leather+Belt", "https://placehold.co/500x600/44403c/ffffff/png?text=Leather+Belt+2"], category: "Men", subCategory: "Accessories", sizes: ["S", "M", "L"], bestseller: false },
//   { _id: "p005", name: "Floral Summer Dress", description: "A lightweight floral dress with a flattering A-line cut, ideal for warm days.", price: 39.99, image: ["https://placehold.co/500x600/9d174d/ffffff/png?text=Floral+Dress", "https://placehold.co/500x600/9d174d/ffffff/png?text=Floral+Dress+2"], category: "Women", subCategory: "Upperwear", sizes: ["XS", "S", "M", "L"], bestseller: true },
//   { _id: "p006", name: "High-Waist Palazzo Pants", description: "Flowy palazzo pants with a comfortable elastic waistband, easy to dress up or down.", price: 29.99, image: ["https://placehold.co/500x600/7c2d12/ffffff/png?text=Palazzo+Pants", "https://placehold.co/500x600/7c2d12/ffffff/png?text=Palazzo+Pants+2"], category: "Women", subCategory: "Bottomwear", sizes: ["S", "M", "L", "XL"], bestseller: false },
//   { _id: "p007", name: "Cropped Denim Jacket", description: "A cropped denim jacket with button closures, a versatile layering piece for any season.", price: 52.00, image: ["https://placehold.co/500x600/1e3a8a/ffffff/png?text=Denim+Jacket", "https://placehold.co/500x600/1e3a8a/ffffff/png?text=Denim+Jacket+2"], category: "Women", subCategory: "Upperwear", sizes: ["S", "M", "L"], bestseller: true },
//   { _id: "p008", name: "Women's Tote Bag", description: "A spacious canvas tote bag with reinforced handles, roomy enough for daily essentials.", price: 24.99, image: ["https://placehold.co/500x600/78350f/ffffff/png?text=Tote+Bag", "https://placehold.co/500x600/78350f/ffffff/png?text=Tote+Bag+2"], category: "Women", subCategory: "Accessories", sizes: ["S", "M", "L"], bestseller: false },
//   { _id: "p009", name: "Kids Graphic T-Shirt", description: "A fun printed t-shirt made from soft cotton, built to handle a full day of play.", price: 12.99, image: ["https://placehold.co/500x600/065f46/ffffff/png?text=Kids+T-Shirt", "https://placehold.co/500x600/065f46/ffffff/png?text=Kids+T-Shirt+2"], category: "Children", subCategory: "Upperwear", sizes: ["XS", "S", "M"], bestseller: true },
//   { _id: "p010", name: "Kids Jogger Pants", description: "Comfortable jogger pants with an elastic waist and cuffed ankles, made for active kids.", price: 17.50, image: ["https://placehold.co/500x600/155e75/ffffff/png?text=Kids+Joggers", "https://placehold.co/500x600/155e75/ffffff/png?text=Kids+Joggers+2"], category: "Children", subCategory: "Bottomwear", sizes: ["XS", "S", "M", "L"], bestseller: false },
//   { _id: "p011", name: "Kids Baseball Cap", description: "An adjustable cotton cap with a curved brim, a simple accessory for sunny days.", price: 9.99, image: ["https://placehold.co/500x600/3730a3/ffffff/png?text=Baseball+Cap", "https://placehold.co/500x600/3730a3/ffffff/png?text=Baseball+Cap+2"], category: "Children", subCategory: "Accessories", sizes: ["S", "M"], bestseller: false },
//   { _id: "p012", name: "Oversized Hoodie", description: "A relaxed fit hoodie with a kangaroo pocket and drawstring hood, made for lounging.", price: 42.00, image: ["https://placehold.co/500x600/1c1917/ffffff/png?text=Oversized+Hoodie", "https://placehold.co/500x600/1c1917/ffffff/png?text=Oversized+Hoodie+2"], category: "Men", subCategory: "Upperwear", sizes: ["S", "M", "L", "XL"], bestseller: true },
//   { _id: "p013", name: "Women's Ankle Boots", description: "Faux leather ankle boots with a low block heel, comfortable enough for all-day wear.", price: 58.00, image: ["https://placehold.co/500x600/4c0519/ffffff/png?text=Ankle+Boots", "https://placehold.co/500x600/4c0519/ffffff/png?text=Ankle+Boots+2"], category: "Women", subCategory: "Accessories", sizes: ["S", "M", "L"], bestseller: false },
//   { _id: "p014", name: "Linen Blend Trousers", description: "Breathable linen blend trousers with a tapered leg, suited for warm weather.", price: 36.00, image: ["https://placehold.co/500x600/365314/ffffff/png?text=Linen+Trousers", "https://placehold.co/500x600/365314/ffffff/png?text=Linen+Trousers+2"], category: "Men", subCategory: "Bottomwear", sizes: ["30", "32", "34", "36", "38"], bestseller: false },
//   { _id: "p015", name: "Women's Silk Scarf", description: "A printed silk scarf that adds a finishing touch to both casual and formal looks.", price: 18.50, image: ["https://placehold.co/500x600/581c87/ffffff/png?text=Silk+Scarf", "https://placehold.co/500x600/581c87/ffffff/png?text=Silk+Scarf+2"], category: "Women", subCategory: "Accessories", sizes: ["S", "M", "L"], bestseller: true },
//   { _id: "p016", name: "Kids Rain Jacket", description: "A waterproof jacket with a hood and zip closure, keeps kids dry on rainy days.", price: 27.99, image: ["https://placehold.co/500x600/0c4a6e/ffffff/png?text=Rain+Jacket", "https://placehold.co/500x600/0c4a6e/ffffff/png?text=Rain+Jacket+2"], category: "Children", subCategory: "Upperwear", sizes: ["XS", "S", "M", "L"], bestseller: false }
// ]

const seedProducts = [
  {
    _id: "p001",
    name: "Classic Cotton T-Shirt",
    description: "A soft, breathable cotton t-shirt that works for everyday wear. Regular fit with a crew neck.",
    price: 19.99,
    image: [
     "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/480054/item/ingoods_09_480054_3x4.jpg?width=400"
    ],
    category: "Men",
    subCategory: "Upperwear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: true
  },
  {
    _id: "p002",
    name: "Slim Fit Denim Jeans",
    description: "Stretchable slim fit denim jeans with a mid-rise waist, built for all-day comfort.",
    price: 45,
    image: [
     
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgx3Mr416LPtXYBpG7tuHLBS3Af9hQ5gCEQ7CZQ8yRuK43A425hinBAODaGVhXoj8H8BaJtFFmePotvFjmom6_CCA-3_MaKBm91SbMBp4"
    ],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["30", "32", "34", "36"],
    bestseller: false
  },
  {
    _id: "p003",
    name: "Formal Check Shirt",
    description: "A tailored check shirt made from breathable fabric, perfect for office or casual outings.",
    price: 34.5,
    image: [

      
       
        "https://thehouseofrare.com/cdn/shop/files/RR269251-hm.webp?v=1770187069&width=540",
        "https://thehouseofrare.com/cdn/shop/files/RR269251-03450.webp?v=1770187069&width=540"
    ],
    category: "Men",
    subCategory: "Upperwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: true
  },
  {
    _id: "p004",
    name: "Men's Leather Belt",
    description: "Genuine leather belt with a classic buckle, a simple finishing touch for any outfit.",
    price: 15.99,
    image: [

      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/8/a8b5016900841901_1.jpg?rnd=20200526195200&tr=w-1080",
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/8/a8b5016900841901_3.jpg?rnd=20200526195200&tr=w-256"
    ],
    category: "Men",
    subCategory: "Accessories",
    sizes: ["S", "M", "L"],
    bestseller: false
  },
  {
    _id: "p005",
    name: "Floral Summer Dress",
    description: "A lightweight floral dress with a flattering A-line cut, ideal for warm days.",
    price: 39.99,
    image: [

      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/b/5b8c188ASTR-WD947_1.jpg?rnd=20200526195200&tr=w-256",
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/b/5b8c188ASTR-WD947_3.jpg?rnd=20200526195200&tr=w-256"
    ],
    category: "Women",
    subCategory: "Upperwear",
    sizes: ["XS", "S", "M", "L"],
    bestseller: true
  },
  {
    _id: "p006",
    name: "High-Waist Palazzo Pants",
    description: "Flowy palazzo pants with a comfortable elastic waistband, easy to dress up or down.",
    price: 29.99,
    image: [

        "https://image.hm.com/assets/hm/a4/96/a49620579b98389b9ec5190af1798bdfc7de79e0.jpg?imwidth=2160"
    ],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: false
  },
  {
    _id: "p007",
    name: "Cropped Denim Jacket",
    description: "A cropped denim jacket with button closures, a versatile layering piece for any season.",
    price: 52,
    image: [

         "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/d/3de71c9WES0383664936_1.jpg?rnd=20200526195200&tr=w-256",
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/d/3de71c9WES0383664936_3.jpg?rnd=20200526195200&tr=w-256"
    ],
    category: "Women",
    subCategory: "Upperwear",
    sizes: ["S", "M", "L"],
    bestseller: true
  },
  {
    _id: "p008",
    name: "Women's Tote Bag",
    description: "A spacious canvas tote bag with reinforced handles, roomy enough for daily essentials.",
    price: 24.99,
    image: [

      
        "https://images.dailyobjects.com/marche/product-images/1204/ivory-forest-green-field-tote-bag-images/Ivory-Forest-Green-Field-Tote-Bag-vw.png?tr=cm-pad_resize,v-3?tr=cm-pad_resize,v-3,q-auto,f-auto,w-760,h-651,dpr-2",
        "https://images.dailyobjects.com/marche/product-images/1204/ivory-forest-green-field-tote-bag-images/Ivory-Forest-Green-Field-Tote-Bag-1st.jpg?tr=cm-pad_crop,v-3?tr=cm-pad_resize,v-3,q-auto,f-auto,w-760,h-651,dpr-2"
    ],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["S", "M", "L"],
    bestseller: false
  },
  {
    _id: "p009",
    name: "Kids Graphic T-Shirt",
    description: "A fun printed t-shirt made from soft cotton, built to handle a full day of play.",
    price: 12.99,
    image: [

           "https://image.hm.com/assets/hm/ad/38/ad3879608d8c2f0489957029388492f7594a0696.jpg?imwidth=2160"
    ],
    category: "Children",
    subCategory: "Upperwear",
    sizes: ["XS", "S", "M"],
    bestseller: true
  },
  {
    _id: "p012",
    name: "Oversized Hoodie",
    description: "A relaxed fit hoodie with a kangaroo pocket and drawstring hood, made for lounging.",
    price: 42,
    image: [

        "https://image.hm.com/assets/hm/04/5e/045ed07e174c25d97b954b0bfb2ee696eb46e934.jpg?imwidth=2160"
    ],
    category: "Men",
    subCategory: "Upperwear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: true
  }
];

module.exports = seedProducts;