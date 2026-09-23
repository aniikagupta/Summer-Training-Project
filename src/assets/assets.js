// // src/assets/assets.js
// export const products = [
//   {
//     _id: "aaaaa",
//     name: "Women Round Neck Cotton Top",
//     description: "A lightweight, knitted, pullover shirt, close-fitting and with a round neckline.",
//     price: 100,
//     image: ["https://picsum.photos/400/500?random=1"],
//     category: "Women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 1716634345448,
//     bestseller: true,
//     delivery_fee: 20,
//   },
//   {
//     _id: "aaaab",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description: "A pure cotton t-shirt designed for ultimate comfort and daily wear.",
//     price: 200,
//     image: ["https://picsum.photos/400/500?random=2"],
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["M", "L", "XL"],
//     date: 1716621345448,
//     bestseller: false,
//     delivery_fee: 20,
//   },
//   {
//     _id: "aaaac",
//     name: "Girls Round Neck Cotton Top",
//     description: "Soft and breathable cotton top tailored for active daily wear.",
//     price: 150,
//     image: ["https://picsum.photos/400/500?random=3"],
//     category: "Kids",
//     subCategory: "Topwear",
//     sizes: ["S", "M"],
//     date: 1716234545448,
//     bestseller: true,
//     delivery_fee: 20,
  
//   },
//   {
//     _id: "aaaad",
//     name: "Men Slim Fit Denim Pants",
//     description: "Classic slim-fit jeans crafted from durable stretch denim.",
//     price: 250,
//     image: ["https://picsum.photos/400/500?random=4"],
//     category: "Men",
//     subCategory: "Bottomwear",
//     sizes: ["30", "32", "34"],
//     date: 1716621545448,
//     bestseller: false,
//     delivery_fee: 20,
    
//   }
// ];

// Sample product data for the store.
// image is always an array because Product.jsx and Productitem.jsx
// expect to loop through multiple photos per product (image[0], image[1]...).
// Using picsum.photos placeholder images so everything works without
// needing to source real product photography.

export const products = [
  {
    _id: "p001",
    name: "Classic Cotton T-Shirt",
    description: "A soft, breathable cotton t-shirt that works for everyday wear. Regular fit with a crew neck.",
    price: 19.99,
    image: [
      "https://placehold.co/500x600/111827/ffffff/png?text=Cotton+T-Shirt",
      "https://placehold.co/500x600/111827/ffffff/png?text=Cotton+T-Shirt+2"
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
    price: 45.00,
    image: [
      "https://placehold.co/500x600/1f2937/ffffff/png?text=Denim+Jeans",
      "https://placehold.co/500x600/1f2937/ffffff/png?text=Denim+Jeans+2"
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
    price: 34.50,
    image: [
      "https://placehold.co/500x600/374151/ffffff/png?text=Check+Shirt",
      "https://placehold.co/500x600/374151/ffffff/png?text=Check+Shirt+2"
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
      "https://placehold.co/500x600/44403c/ffffff/png?text=Leather+Belt",
      "https://placehold.co/500x600/44403c/ffffff/png?text=Leather+Belt+2"
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
      "https://placehold.co/500x600/9d174d/ffffff/png?text=Floral+Dress",
      "https://placehold.co/500x600/9d174d/ffffff/png?text=Floral+Dress+2"
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
      "https://placehold.co/500x600/7c2d12/ffffff/png?text=Palazzo+Pants",
      "https://placehold.co/500x600/7c2d12/ffffff/png?text=Palazzo+Pants+2"
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
    price: 52.00,
    image: [
      "https://placehold.co/500x600/1e3a8a/ffffff/png?text=Denim+Jacket",
      "https://placehold.co/500x600/1e3a8a/ffffff/png?text=Denim+Jacket+2"
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
      "https://placehold.co/500x600/78350f/ffffff/png?text=Tote+Bag",
      "https://placehold.co/500x600/78350f/ffffff/png?text=Tote+Bag+2"
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
      "https://placehold.co/500x600/065f46/ffffff/png?text=Kids+T-Shirt",
      "https://placehold.co/500x600/065f46/ffffff/png?text=Kids+T-Shirt+2"
    ],
    category: "Children",
    subCategory: "Upperwear",
    sizes: ["XS", "S", "M"],
    bestseller: true
  },
  {
    _id: "p010",
    name: "Kids Jogger Pants",
    description: "Comfortable jogger pants with an elastic waist and cuffed ankles, made for active kids.",
    price: 17.50,
    image: [
      "https://placehold.co/500x600/155e75/ffffff/png?text=Kids+Joggers",
      "https://placehold.co/500x600/155e75/ffffff/png?text=Kids+Joggers+2"
    ],
    category: "Children",
    subCategory: "Bottomwear",
    sizes: ["XS", "S", "M", "L"],
    bestseller: false
  },
  {
    _id: "p011",
    name: "Kids Baseball Cap",
    description: "An adjustable cotton cap with a curved brim, a simple accessory for sunny days.",
    price: 9.99,
    image: [
      "https://placehold.co/500x600/3730a3/ffffff/png?text=Baseball+Cap",
      "https://placehold.co/500x600/3730a3/ffffff/png?text=Baseball+Cap+2"
    ],
    category: "Children",
    subCategory: "Accessories",
    sizes: ["S", "M"],
    bestseller: false
  },
  {
    _id: "p012",
    name: "Oversized Hoodie",
    description: "A relaxed fit hoodie with a kangaroo pocket and drawstring hood, made for lounging.",
    price: 42.00,
    image: [
      "https://placehold.co/500x600/1c1917/ffffff/png?text=Oversized+Hoodie",
      "https://placehold.co/500x600/1c1917/ffffff/png?text=Oversized+Hoodie+2"
    ],
    category: "Men",
    subCategory: "Upperwear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: true
  },
  {
    _id: "p013",
    name: "Women's Ankle Boots",
    description: "Faux leather ankle boots with a low block heel, comfortable enough for all-day wear.",
    price: 58.00,
    image: [
      "https://placehold.co/500x600/4c0519/ffffff/png?text=Ankle+Boots",
      "https://placehold.co/500x600/4c0519/ffffff/png?text=Ankle+Boots+2"
    ],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["S", "M", "L"],
    bestseller: false
  },
  {
    _id: "p014",
    name: "Linen Blend Trousers",
    description: "Breathable linen blend trousers with a tapered leg, suited for warm weather.",
    price: 36.00,
    image: [
      "https://placehold.co/500x600/365314/ffffff/png?text=Linen+Trousers",
      "https://placehold.co/500x600/365314/ffffff/png?text=Linen+Trousers+2"
    ],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["30", "32", "34", "36", "38"],
    bestseller: false
  },
  {
    _id: "p015",
    name: "Women's Silk Scarf",
    description: "A printed silk scarf that adds a finishing touch to both casual and formal looks.",
    price: 18.50,
    image: [
      "https://placehold.co/500x600/581c87/ffffff/png?text=Silk+Scarf",
      "https://placehold.co/500x600/581c87/ffffff/png?text=Silk+Scarf+2"
    ],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["S", "M", "L"],
    bestseller: true
  },
  {
    _id: "p016",
    name: "Kids Rain Jacket",
    description: "A waterproof jacket with a hood and zip closure, keeps kids dry on rainy days.",
    price: 27.99,
    image: [
      "https://placehold.co/500x600/0c4a6e/ffffff/png?text=Rain+Jacket",
      "https://placehold.co/500x600/0c4a6e/ffffff/png?text=Rain+Jacket+2"
    ],
    category: "Children",
    subCategory: "Upperwear",
    sizes: ["XS", "S", "M", "L"],
    bestseller: false
  }
]