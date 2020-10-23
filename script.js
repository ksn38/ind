let x = document.querySelector('.out');
let button = document.querySelector('.button');
let text = document.querySelector('p');
console.log(x);
let y = 1;

let dict = function (day, dif) {
  let day = new Map();  
  let dateLast = new Date();
  dateLast.setDate(dateLast2.getDate() - dif);
  dateLast = dateLast.toISOString().slice(0, 10);
  console.log(dateLast);
  for (let i = 0; i < 201; i += 100) {
    let url = 'http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json?date=' + dateLast + '&start=' + i;
    $.getJSON(url, function(data) {
      let rows = data.history.data;
      for (let row = 0; row < rows.length; row++) {
        day.set(rows[row][2], rows[row][9]);
      };      
    });
  };
  return console.log(day);
  for (let [key, value] of day) {
  console.log(key + ' ' + value)};
};


button.onclick = function () {
  y += 1;
  x.textContent = y;
  
  /*let dayLast = new Map();
  let dateLast = new Date();
  dateLast.setDate(dateLast.getDate() - 1);
  dateLast = dateLast.toISOString().slice(0, 10);
  console.log(dateLast);
  for (let i = 0; i < 201; i += 100) {
    let url = 'http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json?date=' + dateLast + '&start=' + i;
    $.getJSON(url, function(data) {
      let rows = data.history.data;
      for (let row = 0; row < rows.length; row++) {
        dayLast.set(rows[row][2], rows[row][9]);
      };      
    });
  };
  console.log(dayLast);
  for (let [key, value] of dayLast) {
    console.log(key + ' ' + value)};*/
  
  /*let day2 = new Map();  
  let dateLast2 = new Date();
  dateLast2.setDate(dateLast2.getDate() - 2);
  dateLast2 = dateLast2.toISOString().slice(0, 10);
  console.log(dateLast2);
  for (let i = 0; i < 201; i += 100) {
    let url = 'http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json?date=' + dateLast2 + '&start=' + i;
    $.getJSON(url, function(data) {
      let rows = data.history.data;
      for (let row = 0; row < rows.length; row++) {
        day2.set(rows[row][2], rows[row][9]);
      };      
    });
  };
  console.log(day2);
  for (let [key, value] of day2) {
    console.log(key + ' ' + value)};*/
};

