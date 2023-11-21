// //*FORMS
// const forms = document.forms;
// // console.log(forms);
// const loginForm = forms.login;
// const firstName = loginForm.elements.name;
// const terms = loginForm.elements.accept;
// // console.log(firstName.value);
// // console.log(terms.checked);
// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   console.log("Data sent");
//   const data = new FormData(loginForm);
//   // console.log(Array.from(data));
//   // console.log(data.entries());
//   // for (const [key, value] of data.entries()) {
//   // 	console.log(`Key: ${key}, value: ${value}`);
//   // }
//   const user = data.get("name");
//   const lastName = data.get("last");
//   console.log(user);
//   console.log(lastName);
//   if (!terms.checked) {
//     alert("You need to accept terms and conditions first");
//   } else {
//     alert(
//       `Welcome ${user} ${lastName}. You have created you account successfully`
//     );
//     for (const [key, value] of data.entries()) {
//       localStorage.setItem(key, value);
//     }
//   }
//   const nameInput = document.getElementById("name");
//   const lastNameInput = document.getElementById("last");
//   const passInput = document.getElementById("password");
//   const termsInput = document.getElementById("accept");
//   nameInput.value = "";
//   lastNameInput.value = "";
//   passInput.value = "";
//   termsInput.checked = false;
// };
// loginForm.addEventListener("submit", handleFormSubmit);
// //* LOCAL STORAGE
// // localStorage.clear();
// const user = {
//   user: "John",
//   email: "user@test.com",
// };
// const userData = JSON.stringify(user);
// // console.log(userData);
// localStorage.setItem("user", userData);
// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser.user);
// const userName = localStorage.getItem("name");
// console.log(userName);
// //* URL
// const currentLocation = window.location.href;
// // console.log(currentLocation);
// const address = new URL(currentLocation);
// console.log(address);
// address.searchParams.set("login", "true");
// console.log(address.toString());
// console.log(address.searchParams.has("login"));
// const login = address.searchParams.get("login");
// console.log("LOGIN: ", login);
//* API
const url = "https://forkify-api.herokuapp.com/api/search";
const getRecipies = async (query) => {
  try {
    const response = await fetch(`${url}?q=${query}`);
    const search = await response.json();
    const recipes = search.recipes;
    return recipes;
  } catch (error) {
    console.error(error);
  }
};
const renderMenu = async (ingredient) => {
  const menu = await getRecipies(ingredient);
  console.log("MENU: ", menu);
  const container = document.getElementById("menu-container");
  container.innerHTML = `<ul>${menu
    .map(
      (element) =>
        `<li><a href=${element.source_url} target="_blank">${element.title}</a></li>`
    )
    .join("")}</ul>`;
};
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("change", (e) => {
  console.log(e.target.value);
  renderMenu(e.target.value);
});
// const sw_api = "https://swapi.dev/api/people";
// const searchCharacters = async () => {
//   const response = await fetch(sw_api);
//   const data = await response.json();
//   // console.log(data.results);
//   return data.results;
// };
// const printCharacters = async () => {
//   const characters = await searchCharacters();
//   // console.log(characters);
//   characters.map((person) => console.log(person.name));
// };
// printCharacters();
