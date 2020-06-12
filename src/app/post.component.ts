import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.css' ]
})
export class PostComponent  {
  md;
  @Input() name: string;
  constructor(private http:HttpClient) { }

  async ngOnInit() {
    this.md = await this.http.get(`/assets/posts/1.md`, { responseType: 'text'}).toPromise();
    }
}