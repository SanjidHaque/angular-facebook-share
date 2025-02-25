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
    this.metaService.updateTag({property: 'og:title', content: 'News Content Updated'});
    this.metaService.updateTag({property: 'og:description', content: 'News Content Description'});
    this.metaService.updateTag({property: 'og:image', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmFTv8XUAZTc8wRVwgZPQvMPlsLckQxtt-uQ&s'});
  }
}
