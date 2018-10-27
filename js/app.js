var data = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11, imgUrl : 'https://img.chewy.com/is/image/catalog/128489_MAIN._AC_SL1500_V1499718730_.jpg'}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57,imgUrl :'https://img.discogs.com/rmLrfgSD3vl6GR6Ozf96AjXjsRs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1490551-1480197980-8810.jpeg.jpg'}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88, imgUrl:'https://pm1.narvii.com/6917/090dcd04695be369526fa84e6cf1e68f66d57d35r1-540-526v2_hq.jpg'}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29, imgUrl:'https://cdn.neweasy.com/pimg/71B71B8BDCFC4906A65CB7740D42294B.jpg'}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33, imgUrl :'http://cdn.oboxeditions.com/sites/prod/files/styles/gallery/public/photos/top-5-wtf-gifts-including-bacon-soda-and-sauna-pants-161078.jpg'}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99, imgUrl:'https://beta.techcrunch.com/wp-content/uploads/2009/02/l10048158.jpg'}];









for(var i=0; i<data.length; i++){
    var itemVar = document.createElement('div');
    itemVar.className = 'item';
    itemVar.innerHTML = data[i].product;
    orderBox.appendChild(itemVar);

}

var go = document.getElementsByClassName('item');

for(var i=0; i<data.length; i++){
    var imgVar = document.createElement('img');
    imgVar.className = 'photos';
    imgVar.src = data[i].imgUrl;
    go[i].appendChild(imgVar);
}
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
