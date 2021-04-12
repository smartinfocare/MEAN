import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  msg2  = "you can remove the item from cut option";

  constructor() { }
  count = 1;
  isErrorMsg = false;
  msg1 = "you can add only 5 items";
  myCart = Array();
 items =[
   {
     id:1,
  name:"adidas",
  price:"1500",
  decs:"its more extra space bag",
  count:1,
  image:"../../assets/1.jpg"
},
{
  id:2,
  name:"nike",
  price:"5000",
  decs:"its more extra space bag",
  count:1,
  image:"../../assets/2.jpg"
}
,{
  id:3,
  name:"Peperone",
  price:"1200",
  decs:"its more extra space bag",
   count:1,
   image:"../../assets/3.jpg"
},{
  id:4,
name:"Gucci",
price:"1500",
decs:"its more extra space bag",
count:1,
image:"../../assets/4.jpg"
},
{
id:5,
name:"Parada",
price:"2100",
decs:"its more extra space bag",
count:1,
image:"../../assets/5.jpg"
}
,{
id:6,
name:"Reyban",
price:"901",
decs:"its more extra space bag",
count:1,
image:"../../assets/6.jpg"
},
{
  id:7,
name:"Caprese",
price:"6221",
decs:"its more extra space bag",
count:1,
image:"../../assets/2.jpg"
},
{
id:8,
name:"Ladida",
price:"2511",
decs:"its more extra space bag",
count:1,
image:"../../assets/1.jpg"
}
,{
id:9,
name:"bmw",
price:"1100",
decs:"its more extra space bag",
count:1,
image:"../../assets/3.jpg"
}
];


  ngOnInit(): void {
  }

//Add to cart selected items
onSelect(data:any){
  if(data.count >= 5){
    this.msg1;
    this.isErrorMsg = true
  }else{
  let cart = data;
  var index = this.myCart.map(x => {
    return x.id;
  }).indexOf(data.id);
  if(index == -1){
  this.myCart.push(cart)
  }else{
    data.count = data.count + 1
    this.isErrorMsg = false;
  }
}
}

//remove the item from cart
removeCartItem(data:any){
// console.log(item);
var index = this.myCart.map(x => {
  return x.id;
}).indexOf(data.id);

this.myCart.splice(index, 1);
this.isErrorMsg = false;
console.log(this.myCart);
}


//decrease count of item 
countDecrease(item:any){
  if(item.count<=1){
    this.msg2;
  }else{
  item.count = item.count-1;
  this.isErrorMsg = false;
  }
}

//adding same item multiple time
countIncrease(item:any){
  if(item.count >= 5){
    this.isErrorMsg = true;
 this.msg1;
  }else{
    item.count = item.count+1;
  }
}
}
