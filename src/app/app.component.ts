import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-facebook-share';
  constructor(private metaService: Meta, private http: HttpClient) {
  }

  updateMetatags() {
    this.metaService.updateTag({property: 'og:title', content: 'Updated Title'});
    // this.http.post('http://localhost:4000/api/update-metatags', {}).subscribe()
    // this.http.get('http://localhost:4000/api/get-metatags', {}).subscribe(console.log)


  }
}
