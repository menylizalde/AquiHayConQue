import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: "Pelea de Gallos",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: ["Reseña:", "Articulos:","Contacto:"],
    },
    {
      id: "2",
      title: "El Carnes",
      imageURL:
        "https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.0-9/p960x960/72610646_2664947533544868_3216968420675289088_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHAfSHtuWETDObnfG5_XzQqzpt9EcZvkqnOm30Rxm-SqS_lcpMqJcMhrKgyDH4zRtg&_nc_ohc=xLc52rGsBTUAX-AHwuH&_nc_ht=scontent.fbjx1-1.fna&_nc_tp=6&oh=ef8111142a9b2d10395a81a0d1aae6de&oe=5F237D9C",
      Comments: ["Reseña:", "Articulos:","Contacto:"],
    },
    {
      id: "3",
      title: "Jugos y Chocos Tony",
      imageURL:
        "https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.0-9/p960x960/72610646_2664947533544868_3216968420675289088_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHAfSHtuWETDObnfG5_XzQqzpt9EcZvkqnOm30Rxm-SqS_lcpMqJcMhrKgyDH4zRtg&_nc_ohc=xLc52rGsBTUAX-AHwuH&_nc_ht=scontent.fbjx1-1.fna&_nc_tp=6&oh=ef8111142a9b2d10395a81a0d1aae6de&oe=5F237D9C",
      Comments: [],
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
