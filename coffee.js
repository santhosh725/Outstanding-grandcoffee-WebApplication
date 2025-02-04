let img = document.getElementById('h');
let images = ['imgg2.png','imgg3.png','imgg4.png','imgg5.png','imgg6.png','imgg7.png','imgg8.png','imgg9.png',];

setInterval(function(){
    let random = Math.floor(Math.random() *8)
    img.src=images[random];
},2000)

function changeImage(){
    var imge = document.getElementById('h');
    imge.src= 'imgg1.png';
}



