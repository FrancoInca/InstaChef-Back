module.exports ={
    comidas: [ 
        //HAMBURGUESAS
    {
        // 1
        name:"Choripan",
        category:"Hamburguesas",
        price:46.74,
        ingredients:
                    [
                        "Pan", "Chorizo a la parrilla", "Chimichurri"
                    ],
        serving_size:["Individual"],
        discount:0,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686160699/instaChef/CHORIPAN_yc24g5.png",
    },

    {
        // 2
        name:"Lomito",
        category :"Hamburguesas",
        price :44.41,
        ingredients:
                    [
                        "Pan", "Lomo de carne", "Lechuga", "Tomate", "Cebolla", "Salsa especial", "Huevo frito"
                    ],

        serving_size:[
                        "Individual"
                    ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686160699/instaChef/Lomito_lwoxwj.jpg",
    },

    {
        // 3
        name:"Chivito",
        category:"Hamburguesas",
        price:34.5,
        ingredients:
                    [
                        "Pan", "Carne de res", "Panceta", "Queso", "Huevo", "Lechuga", "Tomate"
                    ],

        serving_size:[
                        "Individual"
                    ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686160699/instaChef/Chivito_ugwann.png",
    },

    {
                // 4
        name:"Anticucho Burguer",
        category:"Hamburguesas",
        price:49.09,
        ingredients:
                    [
                        "Hamburguesa", "Carne adobada estilo anticucho", "Papas a la huancaina", "Tomate", "Lechuga"
                    ],
        serving_size:[
                        "Individual"
                    ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686160698/instaChef/ANTICUCHO_BURGUER_lpx4nr.png",
    },

    {
                // 5
        name:"Arepa burger",
        category:"Hamburguesas",
        price:40.22,
        ingredients:
                    [
                        "Arepa", "Hamburguesa", "Queso", "Salsa de ají", "Tomate", "Lechuga", "Panceta"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686160699/instaChef/AREPA-BURGER_b4ng9u.png",
    },

    {
                // 6
        name:"Tacos al pastor burguer",
        category:"Hamburguesas",
        price:43.1,
        ingredients:
                    [
                        "Hamburguesa", "Carne al pastor", "Piña", "Cebolla", "Cilantro"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686160989/instaChef/Burger_al_pastor_pbpu1r.jpg",
    },

//FRITURAS

    {
                // 7
        name:"Empanadas",
        category:"Frituras",
        price: 38.65,
        ingredients:
                    [
                        "Masa", "Relleno de carne, pollo, jamón y queso o verduras"
                    ],
        serving_size:[
            "Individual", "Bipersonal", "Familiar"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686161038/instaChef/Empanadas_fritas_sh4yqk.jpg",
    },

    {
                // 8
        name:"Tequeños",
        category:"Frituras",
        price:12.71,
        ingredients:
                    [
                        "Palitos de queso", "Masa frita"
                    ],
        serving_size:[
            "Individual","Bipersonal"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686161105/instaChef/tequen%CC%83os_oexx1j.jpg",
    },

    {
                // 9
        name:"Papas bravas",
        category:"Frituras",
        price:2.23,
        ingredients:
                    [
                        "Papas fritas", "Salsa picante"
                    ],   
        serving_size:[
            "Individual", "Bipersonal"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686161147/instaChef/Papas_bravas_irbyt0.jpg",
    },

    {
                // 10
        name:"Patacones",
        category:"Frituras",
        price:20.63,
        ingredients:
                    [
                        "Plátanos verdes fritos", "Carne", "Queso", "Salsa"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:23,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686161591/instaChef/Patacones_xowva2.png",
    },

    {
                // 11
        name:"Chicharrón de cerdo",
        category:"Frituras",
        price:20.5,
        ingredients:
                    [
                        "Trozos crujientes de cerdo frito"
                    ],
        serving_size:[
            "Individual", "Bipersonal"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686161732/instaChef/chicharron-de-cerdo_plvm3v.jpg",
    },

    {
                // 12
        name:"Nachos",
        category:"Frituras",
        price:47.32,
        ingredients:
                    [
                        "Totopos de maíz", "Queso fundido", "Guacamole", "Salsa"
                    ],
        serving_size:[
            "Individual", "Bipersonal"
        ],
        discount:32,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686161820/instaChef/nachos_jd7tw8.jpg",
    },

    //PIZZAS

    {
                // 13
        name:"Pizza de fugazza",
        category:"Pizzas",
        price:9.56,
        ingredients:
                    [
                        "Masa de pizza", "Cebolla pochada", "Queso"
                    ],
        serving_size:[
            "Familiar"
        ], 
        discount:2,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686162616/instaChef/pizza_fugazza_mjp8fv.jpg",
    },

    {
                // 14
        name:"Pizza de palmitos",
        category:"Pizzas",
        price:45.13,
        ingredients:
                    [
                        "Masa de pizza", "Palmitos", "Salsa blanca", "Queso"
                    ],
        serving_size:[
            "Familiar"
        ],
        discount:9,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686162712/instaChef/palmito_ilrfnq.png",
    },

    {
                // 15
        name:"Pizza a la piedra",
        category:"Pizzas",
        price:27.37,
        ingredients:
                    [
                        "Masa de pizza", "Variedad de ingredientes a eleccion"
                    ],
        serving_size:[
            "Familiar"
        ],
        discount:10,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686162807/instaChef/pizza_a_la_piedra_ewqbxf.png",
    },

    {
                // 16
        name:"Pizza de lomo saltado",
        category:"Pizzas",
        price:9.06,
        ingredients:
                    [
                        "Masa de pizza", "Lomo saltado", "Tomate", "Cebolla", "Ají amarillo"
                    ],
        serving_size:[
            "Familiar"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686162892/instaChef/pizza_lomo_saltado_ayy59u.png",
    },

    // {
    //             // 17
    //     name:"Pizza al estilo peruano",
    //     category:"Pizzas",
    //     price:30.74,
    //     ingredients:
    //                 [
    //                     "Masa de pizza", "Ají de gallina", "Rocoto relleno", "Causa"
    //                 ],
    //     serving_size:[
    //         "Familiar"
    //     ],
    //     discount:null,
    //     image:"",
    // },

    {
                // 18
        name:"Tlayuda",
        category:"Pizzas",
        price:40.15,
        ingredients:
                    [
                        "Tortilla de maíz", "Frijoles", "Carne", "Queso", "Aguacate"
                    ],
        serving_size:[
            "Familiar"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163113/instaChef/tlayuda_jqzo7u.jpg",
    },

    //Desayunos

    {
                // 19
        name:"Desayuno Americano",
        category:"Desayuno",
        price:29.2,
        ingredients:
                    [
                        "Huevos revueltos", "Tocino", "Pan tostado",
                    ],
        serving_size:[
            "Individual"
        ],
        discount:4,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163449/instaChef/desayuno_americano_vf3odr.jpg",
    },

    {
                // 20
        name:"Chilaquiles",
        category:"Desayuno",
        price:25.15,
        ingredients:
                    [
                        "Tortilla de maíz frita", "Salsa roja o verde", "Queso", "Crema", "Frijoles refritos", "Huevos al gusto"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163536/instaChef/chilaquiles_tgxk2n.jpg",
    },

    {
                // 21
        name:"Arepa con queso",
        category:"Desayuno",
        price:45.48,
        ingredients:
                    [
                        "Arepa", "Queso", "Mantequilla"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163571/instaChef/arepa-de-ques_xp1ceh.jpg",
    },

    {
                // 22
        name:"Croissant de jamón y queso",
        category:"Desayuno",
        price:21.63,
        ingredients:
                    [
                        "Croissant", "Jamón", "Queso"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163613/instaChef/croissant-jamon-queso_pwk1ep.jpg",
    },

    {
                // 23
        name:"Tostadas francesas",
        category:"Desayuno",
        price:24.9,
        ingredients:
                    [
                        "Pan", "Huevo", "Leche", "Canela", "Vainilla", "Miel o jarabe de arce", "Frutos rojos"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163848/instaChef/tostadas_a_la_francesa_naggwu.jpg",
    },

    {
                // 24
        name:"Pancakes",
        category:"Desayuno",
        price:30.37,
        ingredients:
                    [
                        "Harina", "Huevo", "Leche", "Mantequilla", "Jarabe de arce"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163886/instaChef/pancake_uwx5zu.jpg",
    },

    {
                // 25
        name:"Muffins",
        category:"Desayuno",
        price:35.19,
        ingredients:
                    [
                        "Harina", "Huevo", "Leche", "Azúcar", "Mantequilla", "Arándanos o chocolate"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:21,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163932/instaChef/muffins_sh5agm.png",
    },

    {
                // 26
        name:"Avena con frutas",
        category:"Desayuno",
        price:46.95,
        ingredients:
                    [
                        "Avena", "Leche", "Frutas variadas", "Miel o azúcar"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686163986/instaChef/avena_y_leche_wzviv0.jpg",
    },

    {
                // 27
        name:"Café",
        category:"Desayuno",
        price:8.50,
        ingredients:
                    [
                        "Café","Leche(Opcional)"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686164215/instaChef/cafe_zwyrl4.jpg",
    },

    {
                // 28
        name:"Jugo",
        category:"Desayuno",
        price:5.00,
        ingredients:
                    [
                        "Jugo de frutas", "Naranja", "Sandia y Menta", "Mango"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686164433/instaChef/jugo_wnhouu.jpg",
    },

    //Ensaladas

    {
                // 29
        name:"Ensalada César",
        category:"Ensalada",
        price:45.49,
        ingredients:
                    [
                        "Lechuga romana", "Crutones", "Queso parmesano", "Aderezo César"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686164574/instaChef/Ensalada-cesar_op4ke0.jpg",
    },

    {
                // 30
        name:"Ensalada Caprese",
        category:"Ensalada",
        price:33.15,
        ingredients:
                    [
                        "Tomates", "Queso mozzarella", "Albahaca fresca", "Aceite de oliva", "Vinagre balsámico"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686164614/instaChef/Ensalada-Caprese_vxyx1p.jpg",
    },

    {
                // 31
        name:"Ensalada Griega",
        category:"Ensalada",
        price:4.13,
        ingredients:
                    [
                        "Tomates", "Pepino", "Cebolla roja", "Aceitunas", "Queso feta", "Aceite de oliva", "Jugo de limón"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686165862/instaChef/ensalada-griega_tt2mnm.jpg",
    },

    {
                // 32
        name:"Ensalada de espinacas",
        category:"Ensalada",
        price:46.67,
        ingredients:
                    [
                        "Espinacas frescas", "Fresas", "Nueces", "Queso de cabra", "Vinagreta de frambuesa"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:2,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686165917/instaChef/ensalada-de-espinacas_luz2fw.jpg",
    },

    {
                // 33
        name:"Ensalada Waldorf",
        category:"Ensalada",
        price:19.57,
        ingredients:
                    [
                        "Apio", "Manzanas", "Uvas", "Nueces", "Mayonesa vegana"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686165958/instaChef/Ensalada-waldorf_blrfbl.jpg",
    },

    {
                // 34
        name:"Ensalada de quinoa",
        category:"Ensalada",
        price:5.83,
        ingredients:
                    [
                        "Quinoa", "Pepino", "Tomates cherry", "Cebolla roja", "Aceite de oliva", "Jugo de limón"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166086/instaChef/quinoa_zfed2z.png",
    },

    {
                // 35
        name:"Ensalada de aguacate y mango",
        category:"Ensalada",
        price:36.02,
        ingredients:
                    [
                        "Aguacate", "Mango", "Rúcula", "Cilantro", "Jugo de limón"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:22,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166135/instaChef/aguacate_cilantro_rjaoxf.jpg",
    },

    {
                // 36
        name:"Ensalada tailandesa de fideos de arroz",
        category:"Ensalada",
        price:19.13,
        ingredients:
                    [
                        "Fideos de arroz", "Zanahorias", "Cebolla morada", "Cacahuetes", "Salsa de soja", "Cilantro"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:15,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166256/instaChef/tailandesa_ymrsqu.png",
    },

    //Postres
    {
                // 37
        name:"Alfajores de maicena",
        category:"Postre",
        price:25.61,
        ingredients:
                    [
                        "Dulce de leche", "Galletas de maicena", "Coco rallado"
                    ],
        serving_size:[
            "Individual"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166338/instaChef/maicena_pqhtno.jpg",
    },

    {
                // 38
        name:"Tres Leches",
        category:"Postre",
        price:21.85,
        ingredients:
                    [
                        "Leche evaporada", "Leche condensada", "Crema de leche", "Bizcocho", "Merengue"
                    ],
        serving_size:[
            "Individual", "Familiar", "Bipersonal"
        ], //individual
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166380/instaChef/torta_tres_leches_qhwy2a.jpg",
    },

    {
                // 39
        name:"Suspiro Limeño",
        category:"Desayuno",
        price:37.24,
        ingredients:
                    [
                        "Leche condensada", "Azúcar", "Yemas de huevo", "Merengue"
                    ],
        serving_size:[
            "Individual", 
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166448/instaChef/Suspiro-Limeno_dpjnpa.jpg",
    },

    {
                // 40
        name:"Arroz con Leche",
        category:"Postre",
        price:32.95,
        ingredients:
                    [
                        "Arroz", "Leche", "Azúcar", "Canela", "Pasas"
                    ],
        serving_size:[
            "Individual", "Bipersonal", "Familiar"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166487/instaChef/arroz-con-leche_q0colp.jpg",
    },

    // {
    //             // 41
    //     name:"Arequipe",
    //     category:"Postre",
    //     price:33.81,
    //     ingredients:
    //                 [
    //                     "Leche", "Azúcar", "Vainilla"
    //                 ],
    //     serving_size:[
    //         "Familiar"
    //     ],
    //     discount:null,
    //     image:"",
    // },

    {
                // 42
        name:"Merengón",
        category:"Postre",
        price:5.84,
        ingredients:
                    [
                        "Merengue", "Crema batida", "Frutas tropicales", "Galletas"
                    ],
        serving_size:[
            "Individual", "Bipersonal"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166531/instaChef/merengon_jxohmf.jpg",
    },

    {
                // 43
        name:"Natilla",
        category:"Postre",
        price:25.49,
        ingredients:
                    [
                        "Leche", "Azúcar", "Maicena", "Canela"
                    ],
        serving_size:[
            "Individual", "Bipersonal"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166601/instaChef/natilla_dwupim.jpg",
    },

    {
                // 44
        name:"Chocotorta",
        category:"Postre",
        price:34.96,
        ingredients:
                    [
                        "Chocolinas", "Dulce de Leche", "Crema", "Café"
                    ],
        serving_size:[
            "Familiar", "Individual", "Bipersonal"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166652/instaChef/chocotorta_nlat2w.jpg",
    },


    {
                // 45
        name:"Arroz chaufa",
        category:"Frituras",
        price:48.92,
        ingredients:
                    [
                        "Arroz", "Pechuga de pollo", "Pimiento rojo", "Huevos", "Cebollita china", "Aceite de girasol", "Salsa de soja", "Jengibre rallado", "Aceite de sesamo"
                    ],
        serving_size:[
            "Familiar", "Individual", "Bipersonal"
        ],
        discount:null,
        image:"https://res.cloudinary.com/dbkwplcjs/image/upload/v1686166670/instaChef/arroz-chaufa_hbrs6o.jpg",
    },

    // {
    //             // 46
    //     name:"nascetur ridiculus mus",
    //     category:"Postre",
    //     price:17.45,
    //     ingredients:
    //                 [
    //                     "hendrerit"
    //                 ],
    //     serving_size:"Individual",
    //     discount:null,
    //     image:"",
    // },

    // {
    //             // 47
    //     name:"sodales scelerisque mauris",
    //     category:"Pizza",
    //     price:5.22,
    //     ingredients:
    //                 [
    //                     "varius ut blandit non interdum in"
    //                 ],
    //     serving_size:"Individual",
    //     discount:null,
    //     image:"",
    // },

    // {
    //             // 48
    //     name:"lacinia erat",
    //     category:"Empanada",
    //     price:9.57,
    //     ingredients:
    //                 [
    //                     "donec vitae nisi"
    //                 ],
    //     serving_size:"Familiar",
    //     discount:null,
    //     image:"",
    // },

    // {
    //             // 49
    //     name:"vitae nisi",
    //     category:"Postre",
    //     price:8.07,
    //     ingredients:
    //                 [
    //                     "sapien urna pretium nisl ut volutpat sapien arcu sed augue"
    //                 ],
    //     serving_size:"Individual",
    //     discount:null,
    //     image:"",
    // },

    // {
    //             // 50
    //     name:"vitae nisi",
    //     category:"Postre",
    //     price:8.07,
    //     ingredients:
    //                 [
    //                     "sapien urna pretium nisl ut volutpat sapien arcu sed augue"
    //                 ],
    //     serving_size:"Individual",
    //     discount:null,
    //     image:"",
    // },
    
    ]
}