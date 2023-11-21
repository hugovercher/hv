const url = "https://swapi.dev/api/people";
const getPersons = async () => {
  const response = await fetch(url);
  console.log(response);
};
getPersons();
