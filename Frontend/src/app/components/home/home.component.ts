import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pod_detail: { name: string; discription: string }[] = [
    {
      name: 'Artisan Pizza Village',
      discription: 'Try 50+ styles of pizzas from around the world',
    },
    {
      name: 'Pizza Talks',
      discription:
        'Industry experts spill the sauce on trends, tech, and techniques',
    },
    {
      name: 'Tasting Trails',
      discription: 'One ticket. Endless slices',
    },
    {
      name: 'Live Entertainment',
      discription: 'Music, stand-up, and interactive pizza games',
    },
  ];
  usp_detail: { name: string }[] = [
    {
      name: 'Authentic Flavors, Global Inspiration',
    },
    {
      name: 'Stone-Baked, Handcrafted Perfection',
    },
    {
      name: 'Custom Pizza, Your Way',
    },
    {
      name: 'Fast, Friendly & Always Fresh',
    },
  ];
}
