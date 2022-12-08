import angela_white_tshirt from './assets/Images/ang-white_1024x1024_thumbnail.png'
import dolce_gabana_dress from  './assets/Images/P00633078_thumbnail.png'
import red_hoodie from  './assets/Images/red_hoodie.png'
import grey_sweatpants from  './assets/Images/grey_sweatpants_thumbnail.png'
import blue_trousers from  './assets/Images/blue_trousers_thumbnail.png'

export const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "SPRING COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://www.nicepng.com/png/full/8-88585_women-fashion-png-example-of-magazine-cover.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
];

export const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "SHIRT STYLE",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "LOUNGEWEAR LOVE",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "LIGHT JACKETS",
  },
];

export const popularProducts = [
  {
    id:1,
    img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
  },
  {
    id:2,
    img: angela_white_tshirt,
  },
  {
    id:3,
    img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    id:4,
    img: dolce_gabana_dress,
  },
  {
    id:5,
    img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    id:6,
    img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    id:7,
    img: red_hoodie,
  },
  {
    id:8,
    img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
  },
  {
    id:9,
    img: grey_sweatpants,
  },
  {
    id:10,
    img: blue_trousers,
  },
];

export const menuItems = [
  {
    id:1,
    text: "Trending",
    url: "/",
  },
  {
    id:2,
    text: "Sale",
    url: "/",
  },
  {
    id:3,
    text: "Men",
    url: "/",
    subMenu: [
      {
        id: 1,
        text: "Top Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Shirts",
            url: '/',
          },
          {
            id: 2,
            text: "T-Shirts",
            url: '/',
          },
          {
            id: 3,
            text: "Sweaters",
            url: '/',
          },
          {
            id: 4,
            text: "Suits",
            url: '/',
          },
          {
            id: 5,
            text: "Jackets",
            url: '/',
          },
          {
            id: 6,
            text: "Coats",
            url: '/',
          },
          {
            id: 7,
            text: "Scarfs",
            url: '/',
          },
        ]
      },
      {
        id: 2,
        text: "Bottom Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Trousers",
            url: '/',
          },
          {
            id: 2,
            text: "Jeans",
            url: '/',
          },
          {
            id: 3,
            text: "Shorts",
            url: '/',
          },
          {
            id: 4,
            text: "Sweatpants",
            url: '/',
          }
        ]
      },
      {
        id: 3,
        text: "Foot Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Sneakers",
            url: '/',
          },
          {
            id: 2,
            text: "Oxfords",
            url: '/',
          },
          {
            id: 3,
            text: "Sandals",
            url: '/',
          },
          {
            id: 4,
            text: "Flip Flops",
            url: '/',
          },
          {
            id: 5,
            text: "Slip Ons",
            url: '/',
          },
        ]
      },
      {
        id: 4,
        text: "Sports Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Football",
            url: '/',
          },
          {
            id: 2,
            text: "Basketball",
            url: '/',
          },
          {
            id: 3,
            text: "Tennis",
            url: '/',
          },
          {
            id: 4,
            text: "Water Sports",
            url: '/',
          },
          {
            id: 5,
            text: "Running",
            url: '/',
          }
        ]
      },
      {
        id: 5,
        text: "Accessories",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Watches",
            url: '/',
          },
          {
            id: 2,
            text: "Hats",
            url: '/',
          },
          {
            id: 3,
            text: "Gloves",
            url: '/',
          },
          {
            id: 4,
            text: "Belts",
            url: '/',
          },
          {
            id: 5,
            text: "Ties",
            url: '/',
          }
        ]
      },
    ]
 },
 {
  id:4,
  text: "Women",
  url: "/",
  subMenu: [
      {
        id: 1,
        text: "Top Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Shirts",
            url: '/',
          },
          {
            id: 2,
            text: "T-Shirts",
            url: '/',
          },
          {
            id: 3,
            text: "Sweaters",
            url: '/',
          },
          {
            id: 4,
            text: "Dresses",
            url: '/',
          },
          {
            id: 5,
            text: "Jackets",
            url: '/',
          },
          {
            id: 6,
            text: "Coats",
            url: '/',
          },
          {
            id: 7,
            text: "Scarfs",
            url: '/',
          },
        ]
      },
      {
        id: 2,
        text: "Bottom Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Trousers",
            url: '/',
          },
          {
            id: 2,
            text: "Jeans and Jeggings",
            url: '/',
          },
          {
            id: 3,
            text: "Leggings",
            url: '/',
          },
          {
            id: 4,
            text: "Shorts",
            url: '/',
          },
          {
            id: 5,
            text: "Skirts",
            url: '/',
          }
        ]
      },
      {
        id: 3,
        text: "Foot Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Sneakers",
            url: '/',
          },
          {
            id: 2,
            text: "Heels",
            url: '/',
          },
          {
            id: 3,
            text: "Knee High Boots",
            url: '/',
          },
          {
            id: 4,
            text: "Balerina Flats",
            url: '/',
          },
          {
            id: 5,
            text: "Slip Ons",
            url: '/',
          },
          {
            id: 6,
            text: "Oxfords",
            url: '/',
          },
        ]
      },
      {
        id: 4,
        text: "Sports Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Football",
            url: '/',
          },
          {
            id: 2,
            text: "Basketball",
            url: '/',
          },
          {
            id: 3,
            text: "Tennis",
            url: '/',
          },
          {
            id: 4,
            text: "Water Sports",
            url: '/',
          },
          {
            id: 5,
            text: "Running",
            url: '/',
          }
        ]
      },
      {
        id: 5,
        text: "Accessories",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Watches",
            url: '/',
          },
          {
            id: 2,
            text: "Hats",
            url: '/',
          },
          {
            id: 3,
            text: "Gloves",
            url: '/',
          },
          {
            id: 4,
            text: "Belts",
            url: '/',
          }
        ]
      },
    ]
  },
  {
    id:5,
    text: "Boys",
    url: "/",
    subMenu: [
      {
        id: 1,
        text: "Top Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Shirts",
            url: '/',
          },
          {
            id: 2,
            text: "T-Shirts",
            url: '/',
          },
          {
            id: 3,
            text: "Sweaters",
            url: '/',
          },
          {
            id: 4,
            text: "Suits",
            url: '/',
          },
          {
            id: 5,
            text: "Jackets",
            url: '/',
          }
        ]
      },
      {
        id: 2,
        text: "Bottom Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Trousers",
            url: '/',
          },
          {
            id: 2,
            text: "Jeans",
            url: '/',
          },
          {
            id: 3,
            text: "Shorts",
            url: '/',
          },
          {
            id: 4,
            text: "Sweatpants",
            url: '/',
          }
        ]
      },
      {
        id: 3,
        text: "Foot Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Sneakers",
            url: '/',
          },
          {
            id: 2,
            text: "Oxfords",
            url: '/',
          },
          {
            id: 3,
            text: "Sandals",
            url: '/',
          },
          {
            id: 4,
            text: "Flip Flops",
            url: '/',
          }
        ]
      },
      {
        id: 4,
        text: "Sports Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Football",
            url: '/',
          },
          {
            id: 2,
            text: "Basketball",
            url: '/',
          },
          {
            id: 3,
            text: "Tennis",
            url: '/',
          },
          {
            id: 4,
            text: "Water Sports",
            url: '/',
          },
          {
            id: 5,
            text: "Running",
            url: '/',
          }
        ]
      }
    ]
  },
  {
    id:6,
    text: "Girls",
    url: "/",
    subMenu: [
      {
        id: 1,
        text: "Top Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Shirts",
            url: '/',
          },
          {
            id: 2,
            text: "T-Shirts",
            url: '/',
          },
          {
            id: 3,
            text: "Sweaters",
            url: '/',
          },
          {
            id: 4,
            text: "Suits",
            url: '/',
          },
          {
            id: 5,
            text: "Jackets",
            url: '/',
          },
          {
            id: 6,
            text: "Coats",
            url: '/',
          },
          {
            id: 7,
            text: "Scarfs",
            url: '/',
          },
        ]
      },
      {
        id: 2,
        text: "Bottom Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Trousers",
            url: '/',
          },
          {
            id: 2,
            text: "Jeans",
            url: '/',
          },
          {
            id: 3,
            text: "Shorts",
            url: '/',
          },
          {
            id: 4,
            text: "Sweatpants",
            url: '/',
          }
        ]
      },
      {
        id: 3,
        text: "Foot Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Sneakers",
            url: '/',
          },
          {
            id: 2,
            text: "Oxfords",
            url: '/',
          },
          {
            id: 3,
            text: "Sandals",
            url: '/',
          },
          {
            id: 4,
            text: "Flip Flops",
            url: '/',
          },
          {
            id: 5,
            text: "Slip Ons",
            url: '/',
          },
        ]
      },
      {
        id: 4,
        text: "Sports Wear",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Football",
            url: '/',
          },
          {
            id: 2,
            text: "Basketball",
            url: '/',
          },
          {
            id: 3,
            text: "Tennis",
            url: '/',
          },
          {
            id: 4,
            text: "Water Sports",
            url: '/',
          },
          {
            id: 5,
            text: "Running",
            url: '/',
          }
        ]
      },
      {
        id: 5,
        text: "Accessories",
        url: '/',
        subMenu: [
          {
            id: 1,
            text: "Watches",
            url: '/',
          },
          {
            id: 2,
            text: "Hats",
            url: '/',
          },
          {
            id: 3,
            text: "Gloves",
            url: '/',
          },
          {
            id: 4,
            text: "Belts",
            url: '/',
          },
          {
            id: 5,
            text: "Ties",
            url: '/',
          }
        ]
      },
    ]
  },
];