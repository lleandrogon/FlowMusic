import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  backgrounds: string[] = [
    'url("https://cdn.mos.cms.futurecdn.net/ZooZoGmiqzjcfa4RbKXXME.jpg")',
    'url("https://articles.boss.info/wp-content/uploads/2022/03/Untitled-design-1.png")',
    'url("https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRydW18ZW58MHx8MHx8fDA%3D")',
    'url("https://img.pikbest.com/ai/illus_our/20230424/135beff8497b2554b2b33864d2252140.jpg!w700wp")',
    'url("https://i.pinimg.com/736x/76/60/0e/76600eaed902107be797b949fee3fdd8.jpg")'
  ];

  backgroundIndex: number = 0;
  backgroundAtual: string = "";

  ngOnInit(): void {
    this.backgroundAtual = this.backgrounds[this.backgroundIndex];
    this.trocaBackground();
  }

  trocaBackground(): void {
    setInterval(() => {
      this.backgroundIndex = (this.backgroundIndex + 1) % this.backgrounds.length;
      this.backgroundAtual = this.backgrounds[this.backgroundIndex];
    }, 4000);
  }

  proximoBackground(): void {
    this.backgroundIndex = (this.backgroundIndex + 1) % this.backgrounds.length;
    this.backgroundAtual = this.backgrounds[this.backgroundIndex];
  }

  anteriorBackground(): void {
    this.backgroundIndex = (this.backgroundIndex - 1 + this.backgrounds.length) % this.backgrounds.length;
    this.backgroundAtual = this.backgrounds[this.backgroundIndex];
  }
}