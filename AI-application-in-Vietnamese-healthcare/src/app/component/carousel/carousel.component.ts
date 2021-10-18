import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images = [
    'assets/image/bn1.jpg',
    'assets/image/bn2.jpg',
    'assets/image/bn3.jpg',
    'assets/image/bn4.jpg',
    'assets/image/bn5.png',
    'assets/image/bn6.png',
    'assets/image/bn7.jpg',
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {}
}
