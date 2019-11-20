import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userpostdetail',
  templateUrl: './userpostdetail.component.html',
  styleUrls: ['./userpostdetail.component.css']
})
export class UserpostdetailComponent implements OnInit {
  data;

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    let postid=this.route.snapshot.params.postid


    this.http.get("https://jsonplaceholder.typicode.com/posts/"+postid).subscribe(data=>{
      this.data=data;
    })

  }

}
