import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  @ViewChild("address") addressElem!: ElementRef;
  @ViewChild("city") cityElem!: ElementRef;
  @ViewChild("postalCode") postalElem!: ElementRef;
  @ViewChild("beds") bedsElem!: ElementRef;
  @ViewChild("baths") bathsElem!: ElementRef;
  @ViewChild("size") sizeElem!: ElementRef;
  @ViewChild("price") priceElem!: ElementRef;

  public isCreatingListing = false;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    
  }

  postListing(){
    var listing = {
      "address":this.addressElem.nativeElement.value,
      "city": this.cityElem.nativeElement.value,
      "postalCode": this.postalElem.nativeElement.value,
      "beds": this.bedsElem.nativeElement.value,
      "baths": this.bathsElem.nativeElement.value,
      "size": this.sizeElem.nativeElement.value,
      "price": this.priceElem.nativeElement.value
    };

    try{
      this.db.database.ref('Listings').push(listing);
      alert("Listing Posted!");
    }
    catch(e:any){
      alert("Error Submitting Listing, Please try again")
    }

    this.addressElem.nativeElement.value = null;
    this.cityElem.nativeElement.value = null;
    this.postalElem.nativeElement.value = null;
    this.bedsElem.nativeElement.value = null;
    this.bathsElem.nativeElement.value = null;
    this.sizeElem.nativeElement.value = null;
    this.priceElem.nativeElement.value = null;

    this.isCreatingListing = false;
  }
}
