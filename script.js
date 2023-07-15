let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(
    (employee) => employee.profession === "developer"
  );
  developers.map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "Accio", age: "25", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const filteredArr = arr.filter((employee) => employee.profession !== "admin");
  arr = filteredArr;
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "emma", age: "22", profession: "developer" },
    { id: 5, name: "ryan", age: "21", profession: "designer" },
    { id: 6, name: "alex", age: "24", profession: "engineer" },
  ];
  const concatenatedArr = arr.concat(newArray);
  console.log(concatenatedArr);
}
