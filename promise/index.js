/* 1) Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно). */

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("positive result"), 3000);
});
  
  
/* 2) Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой). */
  
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject("negative result"), 3000);
});
  
  
/* 3)Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран. */
   
function getRandom(num) {
    return Math.floor(Math.random()*num)
}
  
let promise = Promise.all([
    new Promise(function(resolve, reject) {
      let result = getRandom(5);
      setTimeout(() => resolve(result), result * 1000);
    }),
    new Promise(function(resolve, reject) {
      let result = getRandom(5);
      setTimeout(() => resolve(result), result * 1000);
    }),
    new Promise(function(resolve, reject) {
      let result = getRandom(5);
      setTimeout(() => resolve(result), result * 1000);
    })
    ]).then(
    result => console.log(result[0] + result[1] + result[2])
);
  
  
/* 4) Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id. */
  
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(res => res.filter(item => item.id % 2 == 0))
  .then(userNames => console.log(userNames))
  
  
/* 5) Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1 */
  
  
function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let response = "";
        for (let i = 0; i < data.length; i++) {
          response +=
           `<div class='card'>
             <h2> <b>User ID: ${data[i].id}</b> </h2>
                <ul>
                  <li> <b>Full Name</b>: ${data[i].name}</li>
                  <li> <b>Email</b>: ${data[i].email} </li>
                  <li> <b>Address</b>: ${data[i].address.city}, ${data[i].address.street}, ${data[i].address.suite}, ${data[i].address.zipcode} </li>
                  <li> <b>Geolocation</b> 
                    <ul>
                      <li> <b>Latitude</b>: ${data[i].address.geo.lat}</li>
                      <li> <b>Longitude</b>: ${data[i].address.geo.lng}</li>
                    </ul>
                  </li>
                  <li> <b>Phone</b>: ${data[i].phone}</li>
                  <li> <b>Website</b>: ${data[i].website}</li>
                  <li> <b>Company</b> 
                    <ul>
                      <li> <b>Company Name</b>: ${data[i].company.name}</li>
                      <li> <b>Company Catchphrase</b>: ${data[i].company.catchPhrase}</li>
                      <li> <b>Company BS</b>: ${data[i].company.bs}</li>
                    </ul>
                  </li>
                </ul>
           </div>`;
        }
  
        document.getElementById("1").innerHTML = response;
      });
}
  
fetchUsers()