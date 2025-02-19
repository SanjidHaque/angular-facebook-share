import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-sports',
  standalone: false,
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
  constructor(private metaService: Meta) {
    this.metaService.updateTag({property: 'og:title', content: 'This is Sports Page'});
    this.metaService.updateTag({property: 'og:description', content: 'This is Sports Description'});
    this.metaService.updateTag({property: 'og:image', content: 'https://www.sheboyganpress.com/gcdn/-mm-/7f7ac36bf6998f943da63f517814bfe47f8bdd87/c=140-0-4115-2236/local/-/media/2017/01/21/Marshfield/B9325774862Z.1_20170121012309_000_GJPH577EF.1-0.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp'});
  }
}
