var data = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];


for(var i=0; i<data.length; i++){
data[i].pic=[2,1,3,4,5,6]
    console.log(data[i].pic)
}


for(var i=0; i<data.length; i++){
    var itemVar = document.createElement('div');
    itemVar.className = 'item';
    itemVar.innerHTML = data[i].product;
    orderBox.appendChild(itemVar);

}

var go = document.getElementsByClassName('item');

// console.log(go);

for(var i=0; i<data.length; i++){
    var aboutVar = document.createElement('div');
    aboutVar.className= 'about';
    aboutVar.innerHTML = data[i].description;
    // console.log(aboutVar)
    go[i].appendChild(aboutVar);
}

for(var i=0; i<data.length; i++){
    var pVar= document.createElement('div');
    pVar.className= 'howMuch';
    pVar.innerHTML=data[i].price;
   go[i].appendChild(pVar);
}




















// for(var i=0; i<data.length; i++){
//     var boughtBox = document.createElement('div');
//     boughtBox.className= 'stuff';
//     boughtBox.innerHTML= data[i].product;
//     boughtBox.addEventListener('click', showMe);

//     var aboutBox = document.createElement('a');
//     aboutBox.className = 'aboutIt';
//     aboutBox.innerHTML=data[i].description;

//     var priceBox = document.createElement('div');
//     priceBox.className = 'dollar'
//     priceBox.innerHTML = data[i].price;
//     aboutBox.innerHTML = data[i].description;


    
//     order.appendChild(boughtBox);
//     order.appendChild(aboutBox);
//     order.appendChild(priceBox);

   
// }

// // for(var i=0;i<data.length;i++){
// //     var aboutBox = document.createElement('a');
// //     aboutBox.className = 'aboutIt';
// //     aboutBox.innerHTML=data[i].description;
// //     order.appendChild(aboutBox);
// // }



//     var priceBox = document.createElement('div');
//     priceBox.className = 'dollar'
//     priceBox.innerHTML = data[i].price;
//     aboutBox.innerHTML = data[i].description;
//     order.appendChild(aboutBox);
//     order.appendChild(priceBox);






// function showMe(){
// console.log(whereAbout)
// var poof = this.querySelectorAll('.stuff')[0];

// console.log(poof);
