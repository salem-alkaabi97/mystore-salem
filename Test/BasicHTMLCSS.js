// var arr = [
//   { name: "Ashish", car: "Fortuner" },
//   { name: "Salem", car: "VW" },
//   { name: "Magic", car: "Bicycle" }
// ];
var test = [
  {
    product_id: "1",
    name: "DXRacer Gaming Chair",
    brand: "DXRacer",
    color: "Black/Red",
    price: "1200 AED",
    imageURL: "./assets/gamingchair1.png",
    description: "A gaming chair meant for long-term sitting time."
  },
  {
    product_id: "2",
    name: "Black Chair",
    brand: "king",
    color: "Black",
    price: "600 AED",
    imageURL: "./assets/chair1.png",
    description: "A black leather chair."
  },
  {
    product_id: "3",
    name: "DXRacer Gaming Chair",
    brand: "DXRacer",
    color: "Orange/Black",
    price: "1200 AED",
    imageURL: "./assets/gamingchair.png",
    description: "A gaming chair meant for long-term sitting time."
  }
];
// var container = document.getElementById("container");
// for (let obj of test) {
//   for (let prop in obj) {
//     var value = obj[prop];
//     var div = document.createElement("div");
//     div.innerHTML = value;
//     container.appendChild(div);
//   }
// }
{
  /* <div class="gallery">
<a target="_blank" href="./assets/gamingchair1.png"></a>
<img src="./assets/gamingchair1.png" alt="gamingchair.png">
</a>
<div class="desc">DXRacer Gaming Chair Black/Yellow<br> Price: 1,200 AED</div>
</div> */
}

var container = document.getElementById("container");
for (let obj of test) {
  var gallery = document.createElement("div");
  gallery.className = "gallery";
  var description = document.createElement("div");
  description.className = "desc";
  description.innerHTML = getDescription(obj);
  gallery.appendChild(description);
  for (let prop in obj) {
    // create gallery
    // if (prop == "name") {
    // }
    // var value = obj[prop];
    // var div = document.createElement("div");
    // div.innerHTML = value;
    // container.appendChild(gallery);
  }
  container.appendChild(gallery);
}
function getDescription(element) {
  return (
    "Name: " +
    element.name +
    " The Color is: " +
    element.color +
    " The Price: " +
    element.price +
    " Description: " +
    element.description
  );
}
// var container = document.getElementById("container");
// var div = document.createElement("div");
// div1.innerHTML = obj[0].car;

// var div1 = document.createElement("div1");
// container.appendChild(div1);

// var obj = { name: "Ashish", car: "Fortuner" };
// for (let prop in obj) {
//   var value = obj[prop];
// }
