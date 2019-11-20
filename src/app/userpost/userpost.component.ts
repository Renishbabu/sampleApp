import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {
  postsdata;

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    let id=this.route.snapshot.params.id
    this.http.get("https://jsonplaceholder.typicode.com/posts/?userId="+id).subscribe(data=>{
      console.log(data);
      this.postsdata = data;
    }); 

  }

}
