
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html',

})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'phone', 'website', 'street', 'suite', 'city', 'zipcode', 'companyname', 'action'];

  dataSource;

  constructor(
    private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog
  ) { }
  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(dataSource => {
      this.dataSource = dataSource;
    })
  }
  openDialog(data) {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}




