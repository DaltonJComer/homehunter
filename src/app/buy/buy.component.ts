import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  data: any = [];
  selectedListing : any = [];
  detailsVisible = false;
  fakeAmenities = ["Laundry","AC","Heating","Parking","Security System"];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    const ref = this.db.list("Listings");
    ref.valueChanges().subscribe((data)=>{
    this.data = data;
    console.log(data);
  })
  }

  matchesFilter(listing:any){
      return true;
  }
  viewListing(listing:any){
    if(listing == this.selectedListing){
      this.detailsVisible = false;
      this.selectedListing = [];
    }
    else{
      this.detailsVisible = true;
      this.selectedListing = listing;
    }
  }
}
