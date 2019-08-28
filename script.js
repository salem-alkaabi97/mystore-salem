// Fetch data
var prodData;
var promise = fetch("./products.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    prodData = data;
    createProducts(data);
  });

function createProducts(test) {
  // we will get the id of the middle panel here
  var middlePanel = document.getElementById("flex-item-middle-panel");
  for (let obj of test) {
    // div gallery has img tag only
    var gallery = document.createElement("div");
    gallery.className = "gallery";

    //create tag img and assign each URL to it
    var img = document.createElement("img");
    img.src = obj.imageURL;
    // append this img to the parent div gallery
    gallery.appendChild(img);

    //div description has description only
    var description = document.createElement("div");
    description.className = "desc";
    description.innerHTML = getDescription(obj);
    gallery.appendChild(description);

    middlePanel.appendChild(gallery);
  }
}
// get description
function getDescription(element) {
  return (
    "Name: " +
    element.name +
    "<br>" +
    " Color: " +
    element.color +
    "<br>" +
    " Price: " +
    element.price +
    "<br>" +
    " Description: " +
    element.description
  );
}
