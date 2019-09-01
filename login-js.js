var usersData;
var promise = fetch("./users.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    usersData = data;
  });

function validateLogin() {
  var username = document.getElementById("userid").value;
  var password = document.getElementById("pswrd").value;
  for (value of usersData) {
    if (value.username == username && value.password == password) {
      localStorage.setItem("username", username);
      localStorage.setItem(username, localStorage.getItem(username));
      location.replace("main.html");
    }
    alert("The password or the username is incorrect, try again.");
  }
}

// function check(form) {
//   if (form.userid.value == "123" && form.pswrd.value == "123") {
//     location.replace("main.html");
//   } else {
//     alert("The password or the username is incorrect, try again.");
//   }
// }
