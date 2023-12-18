import img1 from './men-shirt1.jpg'
import img2 from './men-shirt2.jpg'
import img3 from './men-glass1.jpg'
import img4 from './men-blazzer1.jpg'
import p1 from './men-shirt3.jpg'
import p2 from './men-jacket.jpg'
import p3 from './men-pant.jpg'
import p4 from './kid-kurta.jpg'
import p5 from './kid-kurta2.jpg'
import p6 from './kid-kurta3.jpg'
import p7 from './kid-kurta4.jpg'
import p8 from './women kurta.jpg'
import p9 from './women kurta2.jpg'
import p10 from './women kurta3.jpg'



var all_collections = [
    {
        id:1,
        name:"Men premium plane shirt for ocassionally wear - Armani Exchange",
        new_price:4001,
        old_price:5000,
        category:'mens',
        image : p1,
    },
    {
        id:2,
        name:"Men premium new shirt for party wear- DIESEL",
        new_price:4000,
        old_price:6999,
        category:'mens',
        image : p2,
    },
    {
        id:3,
        name:"Men premium Blazzer for formal wear- Tory Burch",
        new_price:41999,
        old_price:45000,
        category:'mens',
        image : p3,
    },{
        id:4,
        name:"Men premium Glass for beach wear- Rayban",
        new_price:16999,
        old_price:17000,
        category:'mens',
        image : img1,
    },
    {
        id:5,
        name:"Men striped shirt for formal wear - allen solly",
        image:img2,
        new_price:1499,
        old_price:1999,
        category:'mens',

    },
    {
        id:6,
        name:"Men formal shirt for formal wear - Louis phileppe",
        image:img3,
        new_price:1321,
        old_price:2000,
        category:'mens',

    },
    {
        id:7,
        name:"Men chekcked shirt for casual wear - allen solly",
        image:img4,
        new_price:1430,
        category:'mens',
        old_price:2965,
    },{
        id:8,
        name:"Kids striped Kurta for formal wear - allen cooper",
        image:p4,
        new_price:1520,
        category:'kids',
        old_price:2000,
    },{
        id:9,
        name:"kids normal kurta for festival wear - allen solly",
        image:p5,
        new_price:1499,
        category:'kids',
        old_price:1999,
    },{
        id: 10,
        name: "kids tradiditional religious kurta for festival wear - peter england",
        image: p6,
        new_price: 1365,
        old_price: 2399,
        category: 'kids'
    },
    {
        id: 11,
        name: "kids(girl) normal kurta for festival wear - allen solly",
        image: p7,
        new_price: 1800,
        old_price: 2599,
        category: 'kids'
    },
    {
        id: 12,
        name: "Women lined kurta for formal wear - integrity",
        image: p8,
        new_price: 1799,
        old_price: 2199,
        category: 'womens'
    },
    {
        id: 13,
        name: "Women striped maroon kurti for formal wear - allen solly",
        image: p9,
        new_price: 958,
        old_price: 1999,
        category: 'womens'
    },
    {
        id: 14,
        name: "Women striped kurti balochi for formal wear - Louis Philippe",
        image: p10,
        new_price: 999,
        old_price: 2999,
        category: 'womens'
    },
    {
        id:15,
        name:"Men premium plane shirt for ocassionally wear - Armani Exchange",
        new_price:4001,
        old_price:5000,
        category:'mens',
        image : p1,
    },
    {
        id:16,
        name:"Men premium new shirt for party wear- DIESEL",
        new_price:4000,
        old_price:6999,
        category:'mens',
        image : p2,
    },
    {
        id:17,
        name:"Men premium Blazzer for formal wear- Tory Burch",
        new_price:41999,
        old_price:45000,
        category:'mens',
        image : p3,
    },{
        id:18,
        name:"Men premium Glass for beach wear- Rayban",
        new_price:16999,
        old_price:17000,
        category:'mens',
        image : img1,
    },
    {
        id:19,
        name:"Men striped shirt for formal wear - allen solly",
        image:img2,
        new_price:1499,
        old_price:1999,
        category:'mens',

    },
    {
        id:20,
        name:"Men formal shirt for formal wear - Louis phileppe",
        image:img3,
        new_price:1321,
        old_price:2000,
        category:'mens',

    },
    {
        id:21,
        name:"Men chekcked shirt for casual wear - allen solly",
        image:img4,
        new_price:1430,
        category:'mens',
        old_price:2965,
    },{
        id:22,
        name:"Kids striped Kurta for formal wear - allen cooper",
        image:p4,
        new_price:1520,
        category:'kids',
        old_price:2000,
    },{
        id:23,
        name:"kids normal kurta for festival wear - allen solly",
        image:p5,
        new_price:1499,
        category:'kids',
        old_price:1999,
    },{
        id: 24,
        name: "kids tradiditional religious kurta for festival wear - peter england",
        image: p6,
        new_price: 1365,
        old_price: 2399,
        category: 'kids'
    },
    {
        id: 25,
        name: "kids(girl) normal kurta for festival wear - allen solly",
        image: p7,
        new_price: 1800,
        old_price: 2599,
        category: 'kids'
    },
    {
        id: 26,
        name: "Women lined kurta for formal wear - integrity",
        image: p8,
        new_price: 1799,
        old_price: 2199,
        category: 'womens'
    },
    {
        id: 27,
        name: "Women striped maroon kurti for formal wear - allen solly",
        image: p9,
        new_price: 958,
        old_price: 1999,
        category: 'womens'
    },
    {
        id: 28,
        name: "Women striped kurti balochi for formal wear - Louis Philippe",
        image: p10,
        new_price: 999,
        old_price: 2999,
        category: 'womens'
    },
    {
        id:29,
        name:"Men premium plane shirt for ocassionally wear - Armani Exchange",
        new_price:4001,
        old_price:5000,
        image : img1,
        category: 'mens'

    },
    {
        id:30,
        name:"Men premium new shirt for party wear- DIESEL",
        new_price:4000,
        old_price:6999,
        image : img2,
        category: 'mens'
    },
    {
        id:31,
        name:"Men premium Blazzer for formal wear- Tory Burch",
        new_price:41999,
        old_price:45000,
        image : img4,
        category: 'mens'
    },{
        id:32,
        name:"Men premium Glass for beach wear- Rayban",
        new_price:16999,
        old_price:17000,
        image : img3,
        category: 'mens'
    }
]

export default all_collections