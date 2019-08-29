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

function filterdProducts() {
  var search_input = document.getElementById("searchTerm").value;
  document.getElementById("flex-item-middle-panel").innerHTML = "";
  createProducts(
    prodData.filter(value => {
      var lowerCaseProduct = value.description.toLocaleLowerCase();
      return lowerCaseProduct.includes(search_input);
    })
  );
}

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
    //Create button + assign onClick event
    var button = document.createElement("button");
    //assign class + id name;
    button.className = "buttonstyle";
    button.id = "AddButton";
    //assign onclick
    button.onclick = incrementCartAmount;
    //assign button value
    button.innerHTML = "Add To Cart";
    //assign width
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
function incrementCartAmount() {
  var currentCount = document.getElementById("cartCount");
  var currentCountParsed = parseInt(currentCount.textContent);
  var nextCount = counter(currentCountParsed);
  // console.log(currentCount);
  currentCount.innerHTML = nextCount;
}
function counter(currentCountParsed) {
  // var cartCount = cartCount.value;
  return currentCountParsed + 1;
}
