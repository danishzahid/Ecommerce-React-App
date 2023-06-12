import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    imageSrc:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTABV8VwR5MprIasTsTPY0KPfQL3SI9XWypnOzup06VtIYXU8PC5jHu7E9ZWkSREqfbHk-kL12rcDkRAdPnGEkNVLXMbDZt1Hwg51pmJ-95&usqp=CAE",
    description:
      "Browse Men's section for Kurta, Paijama, Jawahar-bandi, Shirting and Suiting lengths. Ethenic Dhotis from all over India and many more...",
  },
  {
    _id: uuid(),
    categoryName: "women",
    imageSrc:"https://biiba.in/wp-content/uploads/2022/09/image_759e81e2-9d3c-4d03-b579-d98831d7c9e9.jpg",
    description:
      "We have exclusive Khadi Sari, suit-pices, Kashmiri Shawls and Staals. You will also love to checkout our range of silk fabrics.",
  },
  {
    _id: uuid(),
    categoryName: "winter",
    imageSrc:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJFmd6NuJpzQ4mxtlRtnaPqlNes6XIyDkSnxYE9tvtCGziwCAYXuDmbCkRDMcyniC9exbmbmKp8n-D9tIcHOU2urQ_JVAAm_n7OQufRfA&usqp=CAE",
    description:
      "Our winter section includes all your winter essentials, from ladies and gents shawl to exclusive blankets and  razais. We also have woolen suit pices and cotswool and pure wool fabrics.",
  },
  {
    _id: uuid(),
    categoryName: "essentials",
    imageSrc:"https://cdn.shopify.com/s/files/1/0697/5864/8611/products/261_B_CURTIAN.jpg?v=1674278124&width=750",
    description:
      "Your home essentials from wide range of fancy curtains to all new fancy bedsheets, we also deal in all types of towels, rugs(dari) and carpets and may more...",
  }
];
