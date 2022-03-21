import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {

  data: any = [];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    const ref = this.db.list("Listings");
    ref.valueChanges().subscribe((data)=>{
    this.data = data;
    console.log(data);
  })
  }
}
