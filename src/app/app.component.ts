import { Component } from '@angular/core';
import { pccomponent } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zaliczenie';

  cena:number = 0;
  karty:Array<pccomponent> = [
    {nazwa: "MSI GeForce RTX 3060 12GB ", cena: 2300},
    {nazwa: "MSI GeForce RTX 4070 Ventus 12GB", cena: 3500},
    {nazwa: "Gigabyte Radeon RX 6900 XT 16gb", cena: 6500}
  ];

  procesory:Array<pccomponent> = [
    {nazwa: "Intel Core i9-11900", cena: 2200},
    {nazwa: "AMD Ryzen 9 5900X", cena: 1600},
    {nazwa: "AMD Ryzen 7 5800X", cena: 1100}
  ];

  dyski:Array<pccomponent> = [
    {nazwa: "Samsung 980 M.2 SSD 1TB", cena: 420},
    {nazwa: "Crucial MX500 SSD 1TB SSD", cena: 340},
    {nazwa: "Toshiba P300 HDD 4TB", cena: 380}
  ]

  ram:Array<pccomponent> = [
    {nazwa: "G.SKILL 16GB(2x8GB) 4800MHz", cena: 1900},
    {nazwa: "Kingston Fury 128GB (4x32GB) 3200MHz", cena: 1800},
    {nazwa: "Corsair 32GB (2x16GB) 6000MHz", cena: 1800}
  ];

  obudowy:Array<pccomponent> = [
    {nazwa: "ASUS TUF GT501", cena: 1100},
    {nazwa: "Corsair iCUE 5000X", cena: 1050},
    {nazwa: "NXZT H7 Elite", cena: 970}
  ];

  procesor!:pccomponent;
  karta!:pccomponent;
  dysk!:pccomponent;
  pamiec!:pccomponent;
  obudowa!:pccomponent;
  wyslane:boolean=false;
  oblicz():void {
    this.cena = this.procesor.cena + this.karta.cena + this.dysk.cena + this.pamiec.cena + this.obudowa.cena;
    this.wyslane=true;
  }

  resetuj():void {
    window.location.reload();
  }
}
