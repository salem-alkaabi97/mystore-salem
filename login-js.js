function check(form) {
  if (form.userid.value == "123" && form.pswrd.value == "123") {
    window.open("main.html");
  } else {
    alert("The password or the username is incorrect, try again.");
  }
}
