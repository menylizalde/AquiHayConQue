import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"],
})
export class PlacesPage implements OnInit {
  private places = [
    {
      id: "1",
      title: "Pelea de Gallos",
      imageURL:
        "https://www.peleadegallos.beer/wp-content/uploads/2018/09/balnco2-200x80.png",
      Comments: ["Comida Rica", "Trato Amable"],
    },
    {
      id: "2",
      title: "El Carnes",
      imageURL:
        "https://scontent.fbjx1-1.fna.fbcdn.net/v/t1.0-9/p960x960/72610646_2664947533544868_3216968420675289088_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHAfSHtuWETDObnfG5_XzQqzpt9EcZvkqnOm30Rxm-SqS_lcpMqJcMhrKgyDH4zRtg&_nc_ohc=xLc52rGsBTUAX-AHwuH&_nc_ht=scontent.fbjx1-1.fna&_nc_tp=6&oh=ef8111142a9b2d10395a81a0d1aae6de&oe=5F237D9C",
      Comments: ["Comida Rica", "Trato Amable"],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
