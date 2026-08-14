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

function randomUser() {
  fetch("https://randomuser.me/api")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var userName = document.getElementById("user-name");
      var userImage = document.getElementById("user-image");
      var userGender = document.getElementById("user-gender");

      var newUserName =
        data.results[0].name.first + " " + data.results[0].name.last;
      var newUserGender = data.results[0].gender;
      var newUserImage = data.results[0].picture.large;
      userName.innerHTML = newUserName;
      userImage.src = newUserImage;
      userGender.innerHTML = newUserGender;
    })
    .catch(function (error) {
      console.log("Error fetching random user:" + error);
    });
}
