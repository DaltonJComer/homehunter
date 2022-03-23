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
  
  images=[
    {img:"assets/1.jpg"},
    {img:"assets/2.jpg"},
    {img:"assets/3.jpg"},
    {img:"assets/4.jpg"},
    {img:"assets/5.jpg"},
    {img:"assets/6.jpg"},
    {img:"assets/7.jpg"},
    {img:"assets/8.jpg"},
    {img:"assets/9.jpg"},
    {img:"assets/10.jpg"}];
    

  constructor(private db: AngularFireDatabase) { }

  newArr = [];
  ngOnInit(): void {
    const ref = this.db.list("Listings");
    ref.valueChanges().subscribe((data)=>{
    this.data = data;
    console.log(data);
  })
  }

  imgRand(){
    let img = this.images[Math.floor(Math.random()* this.images.length)];
    return img.img;
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
