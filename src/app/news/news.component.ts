import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  constructor(private metaService: Meta) {
    this.metaService.updateTag({property: 'og:title', content: 'I am updated news title'});
    this.metaService.updateTag({property: 'og:description', content: 'I am updated news description'});
    this.metaService.updateTag({property: 'og:image', content: 'https://i0.wp.com/themes.svn.wordpress.org/random-news/1.0.3/screenshot.png?w=post-thumbnail&strip=all'});
  }
}
