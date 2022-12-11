// import shirt1black from '../assets/Clothes/Men/Top Wear/Shirts/shirt-1-black.png'
// import shirt2black from '../assets/Clothes/Men/Top Wear/Shirts/shirt-2-black.png'
// import shirt2white from '../assets/Clothes/Men/Top Wear/Shirts/shirt-2-white.png'
// import shirt3blue from '../assets/Clothes/Men/Top Wear/Shirts/shirt-3-blue.png'
// import shirt3green from '../assets/Clothes/Men/Top Wear/Shirts/shirt-3-green.png'
// import shirt3pink from '../assets/Clothes/Men/Top Wear/Shirts/shirt-3-pink.png'
import {shirt1black,shirt2black,shirt2white,shirt3blue,shirt3green,shirt3pink,tshirt1black,tshirt1white,tshirt1green,tshirt2blue,tshirt3pink,tshirt3red,hoodie1pink,
    hoodie2white,hoodie2black, hoodie2blue,hoodie2red,hoodie3gray,hoodie3green,hoodie3black,sweater1white,sweater2black,sweater2gray,sweater2blue,sweater3red,
    suit1beige,suit1black,suit2black,suit3blue,suit3black,jacket1black,jacket2black,jacket3beige,jacket3black,jacket4black} from '../assets/Clothes'

export const products = [
    {
        id: 111,
        img: [ shirt1black ],
        gender: "M",
        category: "shirt",
        name: "ABSTRACT PRINT SHIRT",
        desc: "Regular fit shirt with a camp collar, long sleeves, side vents at the hem and a button-up front.",
        size: [ "S" ,"M" ,"L" ,"XL" ],
        price: 129900,
        color: [ "#000000" ],
        quantity: 5,
    },
    {
        id: 112,
        img: [ shirt2black, shirt2white ],
        gender: "M",
        category: "shirt",
        name: "STRETCH SHIRT",
        desc: "Slim fit shirt made of a high-stretch crease-resistant fabric. Featuring a spread collar, long sleeves with buttoned cuffs and a button-up front.",
        size: [ "S" ,"M" ,"L" ,"XL" ],
        price: 129900,
        color: [ "#000000", "#FFFFFF" ],
        quantity: 7,
    },
    {
        id: 113,
        img: [ shirt3blue, shirt3green, shirt3pink ],
        gender: "M",
        category: "shirt",
        name: "DENIM SHIRT",
        desc: "Relaxed fit faded shirt with a button-down collar. Long sleeves with buttoned cuffs. Featuring a chest patch pocket and a button-up front.",
        size: [ "S" ,"M" ,"L" ,"XL" ],
        price: 99900,
        color: [ "#0000FF", "#00FF00", "#FFC0CB" ],
        quantity: 9,
    },
    {
        id: 114,
        img: [ tshirt1green, tshirt1black, tshirt1white ],
        gender: "M",
        category: "tshirt",
        name: "BASIC SLIM FIT T-SHIRT",
        desc: "Stretch cotton T-shirt featuring a round neck and short sleeves.",
        size: [ "S" ,"M" ,"L" ,"XL" ],
        price: 36900,
        color: [ "#00FF00", "#000000", "#FFFFFF" ],
        quantity: 2,
    },
    {
        id: 115,
        img: [ tshirt2blue ],
        gender: "M",
        category: "tshirt",
        name: "SEBASTIAN CURI GRAPHIC T-SHIRT",
        desc: "Oversize T-shirt with a round neck and short sleeves. Featuring a contrast graphic Sebastian Curi print on the back.",
        size: [ "S" ,"M" ,"L" ,"XL" ],
        price: 84900,
        color: [ "#0000FF" ],
        quantity: 4,
    },
    {
        id: 116,
        img: [ tshirt3pink, tshirt3red ],
        gender: "M",
        category: "tshirt",
        name: "RIB NECK T-SHIRT",
        desc: "Loose-fitting T-shirt with a wide rib neckline and short sleeves.",
        size: [ "S" ,"M" ,"L" ,"XL" ],
        price: 84900,
        color: [ "#FFC0CB", "#FF0000" ],
        quantity: 3,
    },
    {
        id: 117,
        img: [ hoodie1pink ],
        gender: "M",
        category: "hoodie",
        name: "SLOGAN PRINT HOODIE",
        desc: "Loose-fitting hoodie with an adjustable hood and long sleeves. Featuring an embroidered slogan on the chest, front pouch pocket, faded effect and ribbed trims.",
        size: [ "S" ,"M" ,"L" ],
        price: 149900,
        color: [ "#FFC0CB" ],
        quantity: 1,
    },
    {
        id: 118,
        img: [ hoodie2white, hoodie2black, hoodie2blue, hoodie2red ],
        gender: "M",
        category: "hoodie",
        name: "BASIC HOODIE",
        desc: "Loose-fitting hoodie with an adjustable hood and long sleeves. Featuring a front pouch pocket and ribbed trims.",
        size: [ "S" ,"L" ],
        price: 109900,
        color: [ "#FFFFFF", "#000000", "#0000FF", "#FF0000" ],
        quantity: 5,
    },
    {
        id: 119,
        img: [ hoodie3gray, hoodie3green, hoodie3black ],
        gender: "M",
        category: "hoodie",
        name: "HOODIE",
        desc: "Loose-fitting hoodie with an adjustable hood and long sleeves. Featuring a front pouch pocket and ribbed trims.",
        size: [ "S", "M", "L", "XL", "XXL" ],
        price: 109900,
        color: [ "#808080", "#00FF00", "#000000" ],
        quantity: 4,
    },
    {
        id: 120,
        img: [ sweater1white ],
        gender: "M",
        category: "sweater",
        name: "KNOP YARN TURTLENECK SWEATER",
        desc: "Sweater made of a spun wool blend. Turtle neck and long sleeves. Ribbed trims.",
        size: [  "M", "L", "XL" ],
        price: 169900,
        color: [ "#FFFFFF" ],
        quantity: 3,
    },
    {
        id: 121,
        img: [ sweater2black, sweater2gray, sweater2blue ],
        gender: "M",
        category: "sweater",
        name: "TURTLENECK SWEATER",
        desc: "Sweater made of spun synthetic wool and viscose. High neck and long sleeves. Ribbed trims.",
        size: [  "M", "L", "XL" ],
        price: 149900,
        color: [ "#000000", "#808080", "#0000FF" ],
        quantity: 6,
    },
    {
        id: 122,
        img: [ sweater3red ],
        gender: "M",
        category: "sweater",
        name: "TEXTURED SWEATER",
        desc: "Long sleeve round neck sweater with ribbed trims.",
        size: [  "M", "L", "XL" ],
        price: 169900,
        color: [ "#FF0000" ],
        quantity: 3,
    },
    {
        id: 123,
        img: [ suit1beige, suit1black ],
        gender: "M",
        category: "suit",
        name: "WOOL BLEND BLAZER",
        desc: "Slim fit blazer made of a wool blend. Notched lapel collar and long sleeves with buttoned cuffs. Hip patch pockets. Back vents at the hem. Buttoned front.",
        size: [ "S", "M", "L", "XL" ],
        price: 389900,
        color: [ "#F5F5DC", "#000000" ],
        quantity: 4,
    },
    {
        id: 124,
        img: [ suit2black ],
        gender: "M",
        category: "suit",
        name: "TEXTURED SUIT BLAZER",
        desc: "Slim-fit blazer with a notched lapel collar and long sleeves with buttoned cuffs. Welt pockets on the chest and at the hip. Inside pocket detail. Central back vent at the hem. Front button fastening.",
        size: [ "L", "XL" ],
        price: 299900,
        color: [ "#000000" ],
        quantity: 5,
    },
    {
        id: 125,
        img: [ suit3blue, suit3black ],
        gender: "M",
        category: "suit",
        name: "SLIM FIT SUIT BLAZER",
        desc: "Blazer with a notched lapel collar. Long sleeves with button detail on the cuffs. Welt pockets at the chest and flap pockets at the hip. Inside pocket detail. Front button fastening.",
        size: [ "M", "L", "XL" ],
        price: 299900,
        color: [ "#0000FF", "#000000" ],
        quantity: 2,
    },
    {
        id: 126,
        img: [ jacket1black ],
        gender: "M",
        category: "jacket",
        name: "QUILTED BOMBER JACKET",
        desc: "Slightly quilted jacket. Ribbed collar. Long sleeves. Welt pockets at the hip. Inside pocket. Elastic hem. Zip-up front.",
        size: [ "S", "M", "L", "XL", "XXL" ],
        price: 169900,
        color: [ "#000000" ],
        quantity: 5,
    },
    {
        id: 127,
        img: [ jacket2black ],
        gender: "M",
        category: "jacket",
        name: "FAUX LEATHER BIKER JACKET",
        desc: "Jacket featuring a lapel collar with snap buttons. Long sleeves. Front zip pockets on the chest and hip. Inside pocket. Asymmetric metal zip-up fastening.",
        size: [ "M", "L", "XL" ],
        price: 239900,
        color: [ "#000000" ],
        quantity: 6,
    },
    {
        id: 128,
        img: [ jacket3beige, jacket3black ],
        gender: "M",
        category: "jacket",
        name: "DOUBLE-FACED JACKET",
        desc: "Faux leather jacket with faux shearling interior. Collar with tab detail. Long sleeves. Front welt pockets. Front zip fastening.",
        size: [ "M", "L", "XL" ],
        price: 349900,
        color: [ "#F5F5DC", "#000000" ],
        quantity: 4,
    },
    {
        id: 129,
        img: [ jacket4black ],
        gender: "M",
        category: "jacket",
        name: "SHIMMERY JACKET",
        desc: "Collared jacket with long sleeves and ribbed trims. Welt pockets at the hip. Elastic hems. Zip-up front.",
        size: [ "S", "M", "L", "XL" ],
        price: 299900,
        color: [ "#000000" ],
        quantity: 1,
    },
]

// white "#FFFFFF"
// black "#000000"
// blue "#0000FF"
// green "#00FF00"
// pink "#FFC0CB"
// red "#FF0000"
// gray "#808080"
// beige "#F5F5DC"