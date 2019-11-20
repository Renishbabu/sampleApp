import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commentcomponent',
  templateUrl: './commentcomponent.component.html',
  styleUrls: ['./commentcomponent.component.css']
})
export class CommentcomponentComponent implements OnInit {
  commentdata;

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.http.get("https://jsonplaceholder.typicode.com/comments?postId=" +id).subscribe(data=>{
      console.log(data);
      this.commentdata=data;
    })



  }

}
