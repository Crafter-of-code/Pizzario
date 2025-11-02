import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PizzarioService } from '../../services/pizzario.service';
import { StatusComponent } from '../status/status.component';
interface home_page_data_Structure {
  h1: string | any;
  afterHeroSectionH2: string;
}
@Component({
  selector: 'app-home',
  imports: [NgFor, CommonModule, StatusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  status_value: {
    message: string;
    status: boolean;
  } = { message: '', status: false };
  home_page_data: home_page_data_Structure | any = { h1: '' };
  constructor(private service: PizzarioService) {}
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
  ngOnInit() {
    this.service.getHomeData().subscribe({
      next: (data) => {
        this.status_value = {
          message: 'Fetched Data success fully',
          status: true,
        };
        console.log(data);
        this.home_page_data = data;
        console.log(this.home_page_data.h1);
      },
      error: (err) => {
        this.status_value = { message: 'Server is not working', status: false };
        console.error(err);
      },
      complete: () => {
        console.log('Fetch request is complete ');
      },
    });
  }
}
