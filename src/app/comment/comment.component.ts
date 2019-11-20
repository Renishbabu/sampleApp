import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  data;

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    let id=this.route.snapshot.params.id
    this.http.get("https://jsonplaceholder.typicode.com/comments/" +id).subscribe(data=>{
      this.data=data;
    })
  }

}
