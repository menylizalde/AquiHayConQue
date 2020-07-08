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
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Extraemos café en frio por más de 20 horas con granos mexicanos seleccionados cuidadosamente, Col brew coffe es un café con menos acidez, mayor concentración de cafeína, refrescante y terso, con buen cuerpo y mayor vida.",
        "Articulos:",
        "Contacto: 449-688-2993",
      ],
    },
    {
      id: "2",
      title: "Carta 39",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Se busca que el Cliente encuentre en las Suculentas y Cactáceas una alternativa para decorar los interiores y exteriores más importantes de su hogar o espacio laboral, así como acompañarte en eventos especiales para ti ",
        "Articulos:",
        "Contacto: 449-180-6416",
      ],
    },
    {
      id: "3",
      title: "Chamoyin",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Chamoyin es chamoy totalmente artesanal, nace en casa, hecho con dedicación, pasión y esfuerzo; ingredientes esenciales para sazonar nuestra vida",
        "Articulos:",
        "Contacto: 449-769-4775",
      ],
    },
    {
      id: "4",
      title: "Ferratela",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Ferratella es una empresa que su objetivo es ofrecer productos naturales, pero principalmente saludables, no añadiendo azúcar a nuestros postres y usando productos de primera calidad, así que lo pueden consumir todo tipo de personas, sin descuidar su salud y disfrutando sin culpa",
        "Articulos:",
        "Contacto: 449-366-5355",
      ],
    },
    {
      id: "5",
      title: "Kuki",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Es la mejor opción para consumir galletas con ingredientes de la más alta calidad, frescura y sabor 100% caseras.",
        "Articulos:",
        "Contacto: 449-903-0394",
      ],
    },
    {
      id: "6",
      title: "La Casa de las Uñas",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "En La Casa de las Uñas nos ocupamos de la belleza de tus manos y tus pies, ofrecemos un espacio exclusivamente para ti, con servicio de manicure, pedicure, Gelish, aplicación de acrílico y decoración.",
        "Articulos:",
        "Contacto: 449-364-8215",
      ],
    },
    {
      id: "7",
      title: "Luchiana",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Es una marca diseñada y creada por manos hidrocálidas, tratamos de juntar la elegancia con la moda para llegar a todas las edades.",
        "Articulos:",
        "Contacto: 449-348-6698",
      ],
    },
    {
      id: "8",
      title: "Mermellata",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Es una marca emprendedora de la ciudad de Aguascalientes, que ofrece productos creados a mano de mujeres, con ingredientes de primera calidad.",
        "Articulos:",
        "Contacto: 449-155-8772",
      ],
    },
    {
      id: "9",
      title: "Mr Carbón",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Nuestro carbón de mezquite da un sabor especial a tus platillos, tiene mayor duración, son piezas enteras y es 100% natural, además de que la ceniza del carbón de mezquite es excelente opción para abono de plantas",
        "Articulos:",
        "Contacto: 449-222-4300",
      ],
    },
    {
      id: "10",
      title: "Patagonia",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Es una salsa chimichurri tipo argentino para cortes de carne, paninis, pizzas, ensaladas, etc.",
        "Articulos: ",
        "Contacto: 449-179-1136",
      ],
    },
    {
      id: "11",
      title: "Pelea de Gallos",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Cerveza artesanal que puedes encontrar en dos estilos.",
        "Articulos:",
        "Contacto: 449-906-0446",
      ],
    },
    {
      id: "12",
      title: "PinPinss",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Tarjetas personalizadas con aplicación en foil, utilizadas como papelería social, el estampado es en colores metálicos e impresión láser.",
        "Articulos:",
        "Contacto: 449-246-5221",
      ],
    },
    {
      id: "13",
      title: "Richter Snacks",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Elaboramos polvorones y galletas hechas a mano con los mejores ingredientes, orgullosamente mexicanos, contamos con las variedades de nuez, naranja, vainilla, chocolate y chispas de chocolate.",
        "Articulos:",
        "Contacto: 449-129-4011",
      ],
    },
    {
      id: "14",
      title: "Terza",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "La crema para manos, está diseñada con una formula exclusiva que brinda máxima hidratación hasta por 24 horas. El uso regular de una buena humectación da un aspecto a las manos perfectas, jóvenes y cuidadas.",
        "Articulos:",
        "Contacto: 449-102-3491",
      ],
    },
    {
      id: "15",
      title: "Tzoalli",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Deliciosos Snacks de Amaranto para disfrutar en casa, oficina, escuela, por su gran sabor y múltiples beneficios le encantara a toda la familia.",
        "Articulos:",
        "Contacto: 449-541-0553",
      ],
    },
    {
      id: "16",
      title: "XOA Tortillas",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: [
        "Es una empresa hidrocálida que tiene como objetivo brindarte un alimento básico, 100% natural, formamos nuestra materia prima a base de un proceso de nixtamalización, de la misma forma, nuestros ingredientes, son completamente naturales, evitando los conservadores e ingredientes artificiales.",
        "Articulos:",
        "Contacto: 449-904-8849",
      ],
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
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id! == placeId;
    });
  }
}
