import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {img: "https://thnworld.files.wordpress.com/2015/03/cool-games-banner.png"},
    {img: "https://i.pinimg.com/originals/4e/02/b9/4e02b987da9d2c3a8c27abc9afb3746a.jpg"},
    {img: "https://pbs.twimg.com/media/FQQW5LqXoAcwrqe?format=jpg&name=900x900"},
    {img: "https://4.bp.blogspot.com/-sQVUZgsTOeM/VriJm-ROtRI/AAAAAAAAXzE/dsSw8rX2xas/s1600/red_dead_capa.jpg"}
  ];
  slideConfig = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  }
  addSlide() {
    this.slides.push({img: "https://th.bing.com/th/id/R.216fb8dacc94b08c140c96c01c0edb35?rik=gMSylwEA3QzMow&riu=http%3a%2f%2fconteudo.imguol.com.br%2fc%2fentretenimento%2fe7%2f2019%2f04%2f30%2fjogos-do-sonic-1556633720731_v2_1920x1030.jpg&ehk=oRrat7soqWCPvBPUhneAx7sRSEyIDGc91xdoY4%2bs4Ds%3d&risl=&pid=ImgRaw&r=0"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(event:any) {
    // console.log('slick initialized');
  }
  
  breakpoint(event:any) {
    // console.log('breakpoint');
  }
  
  afterChange(event:any) {
    // console.log('afterChange');
  }
  
  beforeChange(event:any) {
    // console.log('beforeChange');
  }

}//ENDO_CLASS
