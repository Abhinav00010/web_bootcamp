//alert("Welcome to the Web Bootcamp!");

var users = [
  {
    name: "John Doe",
    gender: "Male",
    image: "john.png",
  },
  {
    name: "Jane Smith",
    gender: "Female",
    image: "jane.png",
  },
];

var curId = 0;

function toggleUser() {
  curId = (curId + 1) % 2;
  var userName = document.getElementById("user-name");
  var userImage = document.getElementById("user-image");
  var userGender = document.getElementById("user-gender");
  userName.innerHTML = users[curId].name;
  userImage.src = users[curId].image;
  userGender.innerHTML = users[curId].gender;
}
