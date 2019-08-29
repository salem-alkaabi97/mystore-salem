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
    //Create button
    var button = document.createElement("button");
    button.className = "buttonstyle";
    button.innerHTML = "Add To Cart";
    button.style.width = "100%";
    gallery.appendChild(button);

    //Adding this div to the container (middlepanel)
    middlePanel.appendChild(gallery);
  }
}
// get description
function getDescription(element) {
  return (
    "<strong>Name: </strong>" +
    element.name +
    "<br>" +
    " <strong>Color:</strong> " +
    element.color +
    "<br>" +
    " <strong>Price:</strong> " +
    element.price +
    "<br>" +
    " <strong>Description:</strong> " +
    element.description +
    "<br>"
  );
}
