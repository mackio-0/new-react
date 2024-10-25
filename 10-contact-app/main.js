import "./style.css";

function createRow(task) {
  const row = document.createElement("tr");

  const idCell = document.createElement("td");
  idCell.textContent = task.id;
  row.appendChild(idCell);

  const titleCell = document.createElement("td");
  titleCell.textContent = task.title;
  row.appendChild(titleCell);

  const priorCell = document.createElement("td");
  priorCell.textContent = task.priority;
  row.appendChild(priorCell);

  return row;
}

function createTable(tasks) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const theadRow = document.createElement("tr");

  const idHeader = document.createElement("th");
  idHeader.textContent = "#";
  theadRow.appendChild(idHeader);

  const titleHeader = document.createElement("th");
  titleHeader.textContent = "Title";
  theadRow.appendChild(titleHeader);

  const priorHeader = document.createElement("th");
  priorHeader.textContent = "Priority";
  theadRow.appendChild(priorHeader);

  thead.appendChild(theadRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  tasks.forEach((task) => {
    const bodyRow = createRow(task);
    tbody.appendChild(bodyRow);
  });

  table.appendChild(tbody);

  return table;
}

const fetchBtn = document.querySelector("#fetchTask");
const tableDiv = document.querySelector("#table");
const handleFetchBtn = () => {
  console.log("you clicked!");
  // fetch("http://localhost:5000/tasks").then((respond) => respond.text()).then((data) => {
  //   console.log(data)
  // })

  fetch("http://localhost:5000/tasks")
    .then((response) => response.json())
    .then((data) => {
      const tasks = data;
      const table = createTable(tasks);
      tableDiv.appendChild(table);
    });
};

const demoAsync = async () => {
  const res1 = await fetch("https://fakestoreapi.com/products/1"); // return respond o  
  const data1 = await res1.json();
  console.log(res1);

  const res2 = await fetch("https://fakestoreapi.com/products/2");
  const data2 = await res2.json();
  console.log(data2);

  const res3 = await fetch("https://fakestoreapi.com/products/3");
  const data3 = await res3.json();
  console.log(data3);

  const res4 = await fetch("https://fakestoreapi.com/products/4");
  const data4 = await res4.json();
  console.log(data4);

  // console.log("Fetching from fakestore api...")
  // fetch("https://fakestoreapi.com/products/1")
  //   .then((respond) => respond.json())
  //   .then((data) => console.log(data));
  // fetch("https://fakestoreapi.com/products/2")
  //   .then((respond) => respond.json())
  //   .then((data) => console.log(data));
  // fetch("https://fakestoreapi.com/products/3")
  //   .then((respond) => respond.json())
  //   .then((data) => console.log(data));
  // fetch("https://fakestoreapi.com/products/4")
  //   .then((respond) => respond.json())
  //   .then((data) => console.log(data));
  // fetch("https://fakestoreapi.com/products/5")
  //   .then((respond) => respond.json())
  //   .then((data) => console.log(data));

  // fetch("https://fakestoreapi.com/products/1")
  //   .then((respond) => respond.json())
  //   .then((data) => {
  //     console.log(data);
  //     fetch("https://fakestoreapi.com/products/2")
  //       .then((respond) => respond.json())
  //       .then((data) => {
  //         console.log(data);
  //         fetch("https://fakestoreapi.com/products/3")
  //           .then((respond) => respond.json())
  //           .then((data) => console.log(data));
  //       });
  //   });

  // let x = 0;
  // setTimeout(() => {
  //   x = 5;
  //   console.log(x === 5 ? "x is 5" : "x is not 5"); // after time out of 1s, log x is 5
  // }, 1000);

  // console.log(x === 5 ? "x is 5" : "x is not 5"); // while timeout is in background this clg runs first, log x is not 5

  // const p = new Promise(function (resolve, reject) {
  //   let x = 0;
  //   setTimeout(() => {
  //     const rand = Math.floor(Math.random() * 10);
  //     console.log(rand);

  //     if (rand > 5) resolve(rand);
  //     else reject(rand);
  //   }, 1000);
  // });
  // p.then(
  //   function (x) {
  //     console.log("success", x);
  //   },
  //   function (y) {
  //     console.log("fail", y);
  //   }
  // );
};

fetchBtn.addEventListener("click", demoAsync);
