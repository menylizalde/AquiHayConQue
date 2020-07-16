import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: "Barrizzimo",
      imageURL:
        "/assets/img/barizimo.png",
      Comments: [
        "Extraemos café en frio por más de 20 horas con granos mexicanos seleccionados cuidadosamente, Col brew coffe es un café con menos acidez, mayor concentración de cafeína, refrescante y terso, con buen cuerpo y mayor vida.",
      ],
      Articulos:"",
      Contacto:"Av. Heroe de Nacozari Sur 500",
      Redes:[],
    },
    {
      id: "2",
      title: "Carta 39",
      imageURL:
        "https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/53736393_2273362796212080_3473358993080975360_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeGrDgpcypB3YXe4OdRO18AhRK82Sj7Ih_xErzZKPsiH_EF4ICU6faaX9NAK9nhPrKw&_nc_ohc=kzGZm7ssNwUAX-IqS9U&_nc_ht=scontent-qro1-1.xx&oh=d048579d79dfaae63fe4b62f7e33e96a&oe=5F2D5E48",
      Comments: [
        "Se busca que el Cliente encuentre en las Suculentas y Cactáceas una alternativa para decorar los interiores y exteriores más importantes de su hogar o espacio laboral, así como acompañarte en eventos especiales para ti "
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "3",
      title: "Chamoyin",
      imageURL:
        "/assets/img/Chamoyin.jpg",
      Comments: [
        "Chamoyin es chamoy totalmente artesanal, nace en casa, hecho con dedicación, pasión y esfuerzo; ingredientes esenciales para sazonar nuestra vida",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "4",
      title: "Ferratela",
      imageURL:
        "/assets/img/Ferratela.jpg",
      Comments: [
        "Ferratella es una empresa que su objetivo es ofrecer productos naturales, pero principalmente saludables, no añadiendo azúcar a nuestros postres y usando productos de primera calidad, así que lo pueden consumir todo tipo de personas, sin descuidar su salud y disfrutando sin culpa",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "5",
      title: "Kuki",
      imageURL:
        "/assets/img/Kuki.jpg",
      Comments: [
        "Es la mejor opción para consumir galletas con ingredientes de la más alta calidad, frescura y sabor 100% caseras.",
      ],
      Articulos:"",
      Contacto:"Av Aguascalientes Oriente  #1290 Fracc. Las hadas",
      Redes:[],
    },
    {
      id: "6",
      title: "La Casa de las Uñas",
      imageURL:
        "/assets/img/LCDU.jpg",
      Comments: [
        "En La Casa de las Uñas nos ocupamos de la belleza de tus manos y tus pies, ofrecemos un espacio exclusivamente para ti, con servicio de manicure, pedicure, Gelish, aplicación de acrílico y decoración.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "7",
      title: "Luchiana",
      imageURL:
        "https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.0-9/11987097_208642219466887_5502637970638023853_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_eui2=AeGQO89-0eRsZzoAvtYoH_qA0qGliuHvAvfSoaWK4e8C9wLf8eN_rkJyFsKPgbEzlg0&_nc_ohc=_OpT5GapFm8AX9GZrMl&_nc_ht=scontent.fbjx1-1.fna&oh=48843cdfb394d95b71dcb3ed4b86e0eb&oe=5F3430CF",
      Comments: [
        "Es una marca diseñada y creada por manos hidrocálidas, tratamos de juntar la elegancia con la moda para llegar a todas las edades.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "8",
      title: "Mermellata",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Es una marca emprendedora de la ciudad de Aguascalientes, que ofrece productos creados a mano de mujeres, con ingredientes de primera calidad.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "9",
      title: "Mr Carbón",
      imageURL:
        "https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/100874435_113455833719598_5456435240065040384_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeEpFpPjiN6KySRVlOAjjoOdIYAhWM3Q860hgCFYzdDzrTGsmLywVlXImyjJN-GAEdY&_nc_ohc=Oy2Vccy9Z-UAX9vab7B&_nc_ht=scontent-qro1-1.xx&oh=c8a75cd88ad3e87d3960742ec6b3872f&oe=5F2C2519",
      Comments: [
        "Nuestro carbón de mezquite da un sabor especial a tus platillos, tiene mayor duración, son piezas enteras y es 100% natural, además de que la ceniza del carbón de mezquite es excelente opción para abono de plantas",
      ],
      Articulos:"",
      Contacto:" Av Guadalupe González #818 Col Primo Verdad",
      Redes:[],
    },
    {
      id: "10",
      title: "Patagonia",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Es una salsa chimichurri tipo argentino para cortes de carne, paninis, pizzas, ensaladas, etc.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "11",
      title: "Pelea de Gallos",
      imageURL:
        "/assets/img/Pelea de Gallos.jpg",
      Comments: [
        "Cerveza artesanal que puedes encontrar en dos estilos.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "12",
      title: "PinPinss",
      imageURL:
        "/assets/img/Pinpins.jpg",
      Comments: [
        "Tarjetas personalizadas con aplicación en foil, utilizadas como papelería social, el estampado es en colores metálicos e impresión láser.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "13",
      title: "Richter Snacks",
      imageURL:
        "/assets/img/Richter Snacks.png",
      Comments: [
        "Elaboramos polvorones y galletas hechas a mano con los mejores ingredientes, orgullosamente mexicanos, contamos con las variedades de nuez, naranja, vainilla, chocolate y chispas de chocolate.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "14",
      title: "Terza",
      imageURL:
        "/assets/img/Terza.jpg",
      Comments: [
        "La crema para manos, está diseñada con una formula exclusiva que brinda máxima hidratación hasta por 24 horas. El uso regular de una buena humectación da un aspecto a las manos perfectas, jóvenes y cuidadas.",
        "Articulos:",
        "Contacto: 449-102-3491",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "15",
      title: "Tzoalli",
      imageURL:
        "/assets/img/Tzoalli.jpg",
      Comments: [
        "Deliciosos Snacks de Amaranto para disfrutar en casa, oficina, escuela, por su gran sabor y múltiples beneficios le encantara a toda la familia.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
    {
      id: "16",
      title: "XOA Tortillas",
      imageURL:
        "/assets/img/XOA.jpg",
      Comments: [
        "Es una empresa hidrocálida que tiene como objetivo brindarte un alimento básico, 100% natural, formamos nuestra materia prima a base de un proceso de nixtamalización, de la misma forma, nuestros ingredientes, son completamente naturales, evitando los conservadores e ingredientes artificiales.",
      ],
      Articulos:"",
      Contacto:"",
      Redes:[],
    },
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      Comments: [],
      id: this.places.length + 1 + "",
      Articulos:"",
      Contacto:"",
      Redes:[],
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id! == placeId;
    });
  }
}
