import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-news-content',
  standalone: false,
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.css'
})
export class NewsContentComponent {
  constructor(private metaService: Meta) {
    this.metaService.updateTag({property: 'og:title', content: 'News Content'});
    this.metaService.updateTag({property: 'og:description', content: 'News Content Description'});
    this.metaService.updateTag({property: 'og:image', content: 'https://about.fb.com/wp-content/uploads/2024/02/Facebook-News-Update_US_AU_Header.jpg?fit=1920%2C1080'});
  }
}
