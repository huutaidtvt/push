import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import { from } from 'rxjs';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent  {
product: Product[]=[
  {id:1,name:"nguyen huu tai",description:"",price:5000,image:"https://cdn.vox-cdn.com/thumbor/3LI5EGLK1lbgApqkw06rr_x2h5U=/0x0:655x365/1200x800/filters:focal(249x23:353x127)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg",quantity:1},
  {id:2,name:"nguyen huu tai",description:"",price:15000,image:"https://cdn.vox-cdn.com/thumbor/3LI5EGLK1lbgApqkw06rr_x2h5U=/0x0:655x365/1200x800/filters:focal(249x23:353x127)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg",quantity:1},
  {id:3,name:"nguyen huu tai",description:"",price:20000,image:"https://cdn.vox-cdn.com/thumbor/3LI5EGLK1lbgApqkw06rr_x2h5U=/0x0:655x365/1200x800/filters:focal(249x23:353x127)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg",quantity:1},
  {id:4,name:"nguyen huu tai",description:"",price:30000,image:"https://cdn.vox-cdn.com/thumbor/3LI5EGLK1lbgApqkw06rr_x2h5U=/0x0:655x365/1200x800/filters:focal(249x23:353x127)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg",quantity:1}
]

removeProduct(id:number){
  var  answer =confirm("ban muon xoa khong");
  if(answer){
    const index=this.product.findIndex(item=>item.id===id);
    console.log(index);
    if(index !==-1) this.product.splice(index,1);
    console.log(this.product);

  }

}


}
