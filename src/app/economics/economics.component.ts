import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-economics',
  standalone: false,
  templateUrl: './economics.component.html',
  styleUrl: './economics.component.css'
})
export class EconomicsComponent {
  constructor(private metaService: Meta) {
    this.metaService.updateTag({property: 'og:title', content: 'This is Economics Page'});
    this.metaService.updateTag({property: 'og:description', content: 'This is Economics Description Updated'});
    this.metaService.updateTag({property: 'og:image', content: 'https://static.vecteezy.com/system/resources/previews/022/894/348/non_2x/business-diagrams-and-charts-on-blue-background-with-random-numbers-data-statistic-and-commerce-research-financial-report-and-economic-diagrams-infographic-elements-illustration-vector.jpg'});
  }
}
