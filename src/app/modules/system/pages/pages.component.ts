import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { FooterComponent } from '../components/footer/footer.component';
import { headerComponent } from '../components/header/header.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    headerComponent,
    HeroComponent,
    FooterComponent
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
