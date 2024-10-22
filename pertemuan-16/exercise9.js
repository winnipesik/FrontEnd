//1.Promise
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  async function messages() {
    let msg = await helloWorld();
    console.log(msg);
  }
  messages();

//2.Function untuk mengambil data user
  function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        users.data.forEach((user) => {
          console.log(user.email);
        });
      });
  }
  ambilDataUser();

//3.Function untuk mengambil data user dengan Async Await
  async function ambilDataUser() {
    try {
      let response = await fetch("https://reqres.in/api/users");
      let users = await response.json();
      users.data.forEach((user) => {
        console.log(user.email);
      });
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  }
  ambilDataUser();
  
  //4.Axios
const axios = require("axios");
(async () => {
  let response = await axios.get("https://reqres.in/api/users");
  response.data.data.forEach((user) => console.log(user.email));
})();