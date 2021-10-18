import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [
    'assets/image/bn1.jpg',
    'assets/image/bn2.jpg',
    'assets/image/bn3.jpg',
    'assets/image/bn4.jpg',
    'assets/image/bn5.png',
    'assets/image/bn6.png',
    'assets/image/bn7.jpg',
  ]
  constructor() {}

  ngOnInit(): void {}
}
