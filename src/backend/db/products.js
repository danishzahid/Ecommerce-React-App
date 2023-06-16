import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id: 1,
    name: "Men's Kurta",
    material: "cotton",
    price: 699,
    originalPrice: 1099,
    categoryName: "men",
    rating: 3,
    image:
      "https://apisap.fabindia.com/medias/10651653-1.jpg?context=bWFzdGVyfGltYWdlc3wxMzU3NDF8aW1hZ2UvanBlZ3xoOTYvaGE2Lzg5NzQ0Nzc3MjE2MzAvMTA2NTE2NTNfMS5qcGd8NmQ0NWI2NzNhNzQ5ZjZhN2I2YzZmYTc3NTFkY2Q5OGY4YWM3M2UzNzNjYjk0NjI0OTZjNGY2MmUzZDRhZWM4Yw",
  },
  {
  
    _id: uuid(),
    id: 2,
    name: "Men's Jawahar Bandi",
    material: "Mixed-Cotton",
    price: 1599,
    originalPrice: 2599,
    categoryName: "men",
    rating: 4,
    image:
      "https://apisap.fabindia.com/medias/10723112-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYyMzJ8aW1hZ2UvanBlZ3xoY2UvaDRiLzg5Mjc2MDg2NjgxOTAvMTA3MjMxMTJfMS5qcGd8YTZmOGQ5MGYxZGMyMDI5OTRhZTNjMzJmZDJkMzcyNWMzYWIyMTU4MTRjNjkwZDJmYzkyMmE3ZjMwZWIzZmQyMg",
  },
  {
    _id: uuid(),
    id: 3,
    name: "Linen Shirting fabrics",
    material: "Linen",
    price: 1249,
    originalPrice: 1999,
    categoryName: "men",
    rating: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0270/8435/7687/products/fabric-pandit-fabric-men-s-pine-green-textured-yarn-dyed-linen-shirting-fabric-width-58-inches-36108823363759_120x.jpg?v=1679397222",
  },
  {
    _id: uuid(),
    id: 4,
    name: "Puja Special Ethenic Dhoti",
    material: "Cotton",
    price: 1149,
    originalPrice: 1599,
    categoryName: "men",
    rating: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0470/0389/3911/products/Devalayam_Mix_1800x1800.jpg?v=1677234249",
  },
  {
    _id: uuid(),
    id: 5,
    name: "Khadi-Silk Saari",
    material: "kadi-silk",
    price: 1599,
    originalPrice: 1999,
    categoryName: "women",
    rating: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0571/4496/7342/products/e0225d9a-e3c3-4ab1-90ef-a1e50fe01cd8_1029x1280.jpg?v=1621924577",
  },
  {
    _id: uuid(),
    id: 6,
    name: "Woolen Suit Piece",
    material: "wool",
    price: 1099,
    originalPrice: 1299,
    categoryName: "women",
    rating: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0020/8866/5201/products/MSL401_38924125-e439-4bf8-b6d1-e08733b7cf4c_160x.jpg?v=1672999251",
  },
  {
    _id: uuid(),
    id: 7,
    name: "Kashmiri wool-work shawl",
    material: "pure-wool",
    price: 2599,
    originalPrice: 2999,
    categoryName: "women",
    rating: 5,
    image:
      "https://cdn.shopify.com/s/files/1/2505/0932/products/pashtush-pashmina-pashtush-women-s-kashmiri-jamawar-shawl-arabic-blue-29240801853494_120x.jpg?v=1628329741",
  },
  {
    _id: uuid(),
    id: 8,
    name: "Cotton Suit fabric length",
    material: "cotton",
    price: 399,
    originalPrice: 499,
    categoryName: "women",
    rating: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0552/5291/0159/products/IMG_20221011_165440__01-min_1106x1800.jpg?v=1665487794",
  },
  {
    _id: uuid(),
    id: 9,
    name: "MonteCarlo Double Layer Blanket",
    material: "Wool",
    price: 2999,
    originalPrice: 3999,
    categoryName: "winter",
    rating: 4,
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230116/C1yi/63c539f4aeb269c651e1dbd4/-78Wx98H-465474400-multi-MODEL3.jpg",
  },
  {
    _id: uuid(),
    id: 10,
    name: "Khadi Garam Black Blanket",
    material: "Woolen-Khadi",
    price: 499,
    originalPrice: 699,
    categoryName: "winter",
    rating: 3,
    image:
      "https://m.media-amazon.com/images/I/61s-rBwYbeL._SY679_.jpg",
  },
  {
    _id: uuid(),
    id: 11,
    name: "Jaipuri Woolen Razai",
    material: "wool",
    price: 3499,
    originalPrice: 3999,
    categoryName: "winter",
    rating: 3,
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230602/PGr0/64794e7ad55b7d0c633a9268/-78Wx98H-461642897-multi-MODEL.jpg",
  },
  {
    _id: uuid(),
    id: 12,
    name: "Cotswool Shirting Fabric Length",
    material: "Cots-Wool",
    price: 449,
    originalPrice: 699,
    categoryName: "winter",
    rating: 3,
    image:
      "https://cdn1.storehippo.com/s/5a6ef16301bd210c588e3577/616aa3bc52dec2b61e1a7c60/webp/9121091522percent20-2--240x240.jpg",
  },
  {
    _id: uuid(),
    name: "Fancy Curtain For Door",
    material: "Polyester",
    price: 999,
    originalPrice: 1249,
    categoryName: "essentials",
    rating: 3,
    image:
      "https://assets.ajio.com/medias/sys_master/root/20221227/OjEL/63aacf42f997ddfdbdfa92ea/-78Wx98H-465508263-beige-MODEL.jpg",
  },
  {
    _id: uuid(),
    name: "Designer Carpet For Floor",
    material: "Polyeaster",
    price: 1199,
    originalPrice: 1499,
    categoryName: "essentials",
    rating: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0587/0741/1096/products/2000220084_160x.jpg?v=1665135204",
  },
  {
    _id: uuid(),
    name: "Floral Printed Cotton Bedsheet",
    material: "Cotton",
    price: 549,
    originalPrice: 699,
    categoryName: "essentials",
    rating: 3,
    image:
      "https://www.urbanspacestore.in/cdn/shop/products/US_BS_S117_1_1800x1800.jpg?v=1676014477",
  },
  {
    _id: uuid(),
    name: "Unisex Bath Towel",
    material: "Cotton",
    price: 499,
    originalPrice: 549,
    categoryName: "essentials",
    rating: 4,
    image:
      "https://cdn.shopify.com/s/files/1/2385/5429/products/Travellers-Palm-and-Giraffe-Blockprint-Bath-Towel-Combo-bath-towels-House-of-Ekam_75x.jpg?v=1665611879",
  },
];
