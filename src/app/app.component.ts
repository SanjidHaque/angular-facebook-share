import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-facebook-share';
  constructor(private metaService: Meta) {
  }

  updateMetatags() {
    this.metaService.updateTag({property: 'og:title', content: 'Updated Title'});
  }
}
