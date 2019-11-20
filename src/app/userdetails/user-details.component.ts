import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  data;

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {

    let id = this.route.snapshot.params.id


      
    this.http.get("https://jsonplaceholder.typicode.com/users/"+id).subscribe(data=>{
      this.data = data;
    });
  }

}
