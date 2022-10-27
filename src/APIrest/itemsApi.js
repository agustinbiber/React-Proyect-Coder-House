const itemsApi = [
    {
        id: 101,
        category: "photography",
        subcategory: "cameras",
        brand: "Sony",
        model: "Cyber-Shot",
        description: "Camara automatica de 14.1 MP. Lente Carl Zeiss.",
        price: 150,
        stock: 10,
        img: ["/img/photography/cameras/1. Sony.JPG", "/img/photography/cameras/2. Sony.jpg"]

    },
    {
        id: 102,
        category: "photography",
        subcategory: "cameras",
        brand: "Nikon",
        model: "Coolpix",
        description: "Point & Shoot de 12 MP",
        price: 80,
        stock: 11,
        img: ["/img/photography/cameras/3. Nikon.JPG", "/img/photography/cameras/4. Nikon.JPG"]
    },
    {
        id: 103,
        category: "photography",
        subcategory: "cameras",
        brand: "Pentax",
        model: "P30",
        description: "Analogue camera",
        price: 250,
        stock: 4,
        img: ["/img/photography/cameras/5. Pentax.JPG", "/img/photography/cameras/6. Pentax.JPG", "/img/photography/cameras/7. Pentax.JPG"]
    },
    {
        id: 104,
        category: "photography",
        subcategory: "cameras",
        brand: "Nikon",
        model: "D3100",
        description: "DSLR Camera",
        price: 350,
        stock: 8,
        img: ["/img/photography/cameras/8. Nikon D3100.JPG", "/img/photography/cameras/9. Nikon D3100.JPG", "/img/photography/cameras/10. Nikon D3100.JPG", "/img/photography/cameras/11. Nikon D3100.JPG"]
    },
    {
        id: 105,
        category: "photography",
        subcategory: "cameras",
        brand: "Canon",
        model: "A2300",
        description: "Point & Shoot de 16.1 MP",
        price: 120,
        stock: 3,
        img: ["/img/photography/cameras/12. Canon.JPG", "/img/photography/cameras/13. Canon.JPG"]
    },
    {
        id: 201,
        category: "photography",
        subcategory: "lenses",
        brand: "Takumar",
        model: "55mm",
        description: "Prime 55mm f1.8",
        price: 100,
        stock: 2,
        img: ["/img/photography/lenses/1. Takumar.JPG", "/img/photography/lenses/2. TAkumar.JPG", "/img/photography/lenses/3. Takumar.JPG"]
    },
    {
        id: 202,
        category: "photography",
        subcategory: "lenses",
        brand: "Pentax",
        model: "50mm",
        description: "Prime 50mm f1.7",
        price: 110,
        stock: 3,
        img: ["/img/photography/lenses/4. Pentax.JPG", "/img/photography/lenses/5. Pentax.JPG", "/img/photography/lenses/6. Pentax.JPG"]
    },
    {
        id: 203,
        category: "photography",
        subcategory: "lenses",
        brand: "Zenit",
        model: "58mm",
        description: "Prime 58mm f2.0",
        price: 120,
        stock: 3,
        img: ["/img/photography/lenses/7. Zenit.JPG", "/img/photography/lenses/8. Zenit.JPG", "/img/photography/lenses/9. Zenit.JPG"]
    },
    {
        id: 204,
        category: "photography",
        subcategory: "lenses",
        brand: "Nikon",
        model: "55-200mm",
        description: "Zoom 55-200 APSC",
        price: 120,
        stock: 3,
        img: ["/img/photography/lenses/10. Nikon 200.JPG", "/img/photography/lenses/11. Nikon 200.JPG", "/img/photography/lenses/12. Nikon 200.JPG", "/img/photography/lenses/13. Nikon 200.JPG", "/img/photography/lenses/14. Nikon 200.JPG"]
    },
    {
        id: 205,
        category: "photography",
        subcategory: "lenses",
        brand: "Sakar",
        model: "2x Teleconverter",
        description: "Teleconvesor de 2x",
        price: 80,
        stock: 30,
        img: ["/img/photography/lenses/15. Teleconverter.JPG", "/img/photography/lenses/16. Teleconverter.JPG"]
    },
    {
        id: 206,
        category: "photography",
        subcategory: "lenses",
        brand: "Nikon",
        model: "35mm",
        description: "Prime 35mm f1.8 G",
        price: 250,
        stock: 32,
        img: ["/img/photography/lenses/17. Nikon 35.JPG", "/img/photography/lenses/18. Nikon 35.JPG", "/img/photography/lenses/19. Nikon 35.JPG"]
    },
    {
        id: 207,
        category: "photography",
        subcategory: "lenses",
        brand: "Nikon",
        model: "18-55mm",
        description: "Zoom kit 18-55mm",
        price: 100,
        stock: 14,
        img: ["/img/photography/lenses/20. Nikon 55.JPG", "/img/photography/lenses/21. Nikon 55.JPG", "/img/photography/lenses/22. Nikon 55.JPG", "/img/photography/lenses/23. Nikon 55.JPG"]
    },
    {
        id: 208,
        category: "photography",
        subcategory: "lenses",
        brand: "Nikon",
        model: "18-55 VR",
        description: "Zoom kit 18-55mm con VR",
        price: 170,
        stock: 9,
        img: ["/img/photography/lenses/24. Nikon VR.JPG", "/img/photography/lenses/25. Nikon VR.JPG", "/img/photography/lenses/26. Nikon VR.JPG", "/img/photography/lenses/27. Nikon VR.JPG", "/img/photography/lenses/28. Nikon VR.JPG"]
    },
    {
        id: 301,
        category: "accesories",
        subcategory: "accesories",
        brand: "Sigma",
        model: "Adaptador M42",
        description: "Adaptador de M42 a Canon EF",
        price: 12,
        stock: 39,
        img: ["/img/photography/accesories/1. Adaptador M42.JPG", "/img/photography/accesories/2. Adaptador M42.JPG"]
    },
    {
        id: 302,
        category: "accesories",
        subcategory: "accesories",
        brand: "Nikon",
        model: "Cargador de bateria",
        description: "Cargador de bateria Nikon D3100",
        price: 22,
        stock: 31,
        img: ["/img/photography/accesories/3. Cargador Nikon.JPG", "/img/photography/accesories/4. Cargador Nikon.JPG"]
    },
    {
        id: 303,
        category: "accesories",
        subcategory: "accesories",
        brand: "Tiffen",
        model: "52mm CPL",
        description: "Filtro polarizado para pase de 52mm",
        price: 25,
        stock: 300,
        img: ["/img/photography/accesories/5. Filtro Tiffen.JPG", "/img/photography/accesories/6. Filtro Tiffen.JPG"]
    },
    {
        id: 304,
        category: "accesories",
        subcategory: "accesories",
        brand: "Godox",
        model: "X1-NR",
        description: "Transmisor para flash Godox",
        price: 98,
        stock: 18,
        img: ["/img/photography/accesories/7. Godox Transmisor.JPG", "/img/photography/accesories/8. Godox Transmisor.JPG"]
    },
    {
        id: 305,
        category: "accesories",
        subcategory: "accesories",
        brand: "Godox",
        model: "TCM",
        description: "Receptor flash Godox",
        price: 42,
        stock: 38,
        img: ["/img/photography/accesories/9. Receptor Godox.JPG", "/img/photography/accesories/10. Receptor Godox.JPG"]
    },
    {
        id: 306,
        category: "accesories",
        subcategory: "accesories",
        brand: "Godox",
        model: "Flash 60",
        description: "Flash inalambrico",
        price: 105,
        stock: 70,
        img: ["/img/photography/accesories/11. Flash Godox.JPG", "/img/photography/accesories/12. Flash Godox.JPG"]
    },
    {
        id: 307,
        category: "accesories",
        subcategory: "accesories",
        brand: "Marumi",
        model: "CPL de 67mm",
        description: "Filtro polarizado para pase de 67mm",
        price: 39,
        stock: 205,
        img: ["/img/photography/accesories/13. Filtro CPL 67.JPG", "/img/photography/accesories/14. Filtro CPL 67.JPG"]
    },
    {
        id: 308,
        category: "accesories",
        subcategory: "accesories",
        brand: "K&F",
        model: "StandTable",
        description: "Tripode de mesa para DSLR",
        price: 5,
        stock: 308,
        img: ["/img/photography/accesories/15. Tripode.JPG", "/img/photography/accesories/16. Tripode.JPG"]
    },
    {
        id: 309,
        category: "accesories",
        subcategory: "accesories",
        brand: "Motorola",
        model: "microSDA",
        description: "Adaptador de microSD a SD",
        price: 11,
        stock: 405,
        img: ["/img/photography/accesories/17. Adaptador SD.JPG", "/img/photography/accesories/18. Adaptador SD.JPG"]
    },
    {
        id: 310,
        category: "accesories",
        subcategory: "accesories",
        brand: "WD",
        model: "My Passport",
        description: "Disco duro externo para fotografia",
        price: 190,
        stock: 31,
        img: ["/img/photography/accesories/19. Disco Duro.JPG", "/img/photography/accesories/20. Disco Duro.JPG"]
    },
    {
        id: 401,
        category: "audio",
        subcategory: "devices",
        brand: "Focusrite",
        model: "Scarlett 2i2",
        description: "Interfaz de audio USBC de 2 entradas y 2 salidas",
        price: 350,
        stock: 21,
        img: ["/img/audio/devices/1. Focusrite.JPG", "/img/audio/devices/2. Focusrite.JPG", "/img/audio/devices/3. Focusrite.JPG"]
    },
    {
        id: 402,
        category: "audio",
        subcategory: "devices",
        brand: "Panavox",
        model: "UM3-AA",
        description: "Radio AM/FM de bolsillo",
        price: 25,
        stock: 21,
        img: ["/img/audio/devices/4. Panavox.JPG", "/img/audio/devices/5. Panavox.JPG"]
    },
    {
        id: 501,
        category: "audio",
        subcategory: "headphones",
        brand: "Miniso",
        model: "USBC InEar",
        description: "Auriculares in ear conexion USBC",
        price: 35,
        stock: 210,
        img: ["/img/audio/headphones/1. Miniso.JPG", "/img/audio/headphones/2. Miniso.JPG"]
    },
    {
        id: 502,
        category: "audio",
        subcategory: "headphones",
        brand: "Apple",
        model: "Ear Pods",
        description: "Auriculares para conexion Lightning",
        price: 85,
        stock: 21,
        img: ["/img/audio/headphones/3. Apple.JPG", "/img/audio/headphones/4. Apple.JPG"]
    },
    {
        id: 503,
        category: "audio",
        subcategory: "headphones",
        brand: "Audio-Technica",
        model: "ATX-50",
        description: "Auriculares profesionales acusticamente aislados",
        price: 250,
        stock: 23,
        img: ["/img/audio/headphones/5. Audio Technica.JPG", "/img/audio/headphones/6. Audio Technica.JPG"]
    },
    {
        id: 601,
        category: "audio",
        subcategory: "microphones",
        brand: "Shure",
        model: "SM-57",
        description: "Microfono Shure SM-57 con aislador de soplidos",
        price: 190,
        stock: 77,
        img: ["/img/audio/microphones/1. Shure.JPG", "/img/audio/microphones/2. Shure.JPG"]
    },
    {
        id: 602,
        category: "audio",
        subcategory: "microphones",
        brand: "Sennheiser",
        model: "e614",
        description: "Microfono condensador tipo pistola",
        price: 260,
        stock: 17,
        img: ["/img/audio/microphones/3. Sennheiser.JPG", "/img/audio/microphones/4. Sennheiser.JPG"]
    },
    {
        id: 701,
        category: "accesories",
        subcategory: "accesories",
        brand: "Shure",
        model: "Flex Stand",
        description: "Tripode de escritorio con soporte flotante para microfono",
        price: 74,
        stock: 170,
        img: ["/img/audio/accesories/1. Stand.JPG", "/img/audio/accesories/2. Stand.JPG"]
    },
    {
        id: 702,
        category: "accesories",
        subcategory: "accesories",
        brand: "Amazon",
        model: "HDMI 2.0",
        description: "Cable de alta velocidad HDMI 2.0 de 4 mts",
        price: 60,
        stock: 55,
        img: ["/img/audio/accesories/3. Cable HDMI.JPG", "/img/audio/accesories/4. Cable HDMI.JPG"]
    },
]

//export const getItemById = (id) => {
//    return itemsApi[id]
//}

export default itemsApi;