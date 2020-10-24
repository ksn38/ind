let x = document.querySelector('.out');
let button = document.querySelector('.button');
let text = document.querySelector('p');
let y = 1;
let day = new Map();
let z = 0;


let dict = function (dif) {
  let dateLast = new Date();
  dateLast.setDate(dateLast.getDate() - dif);
  dateLast = dateLast.toISOString().slice(0, 10);
  for (let i = 0; i < 201; i += 100) {
    let url = 'http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json?date=' + dateLast + '&start=' + i;
    $.ajax({
    url: url,
    async: false,
    dataType: 'json',
    success: function (data) {
      let rows = data.history.data;
      for (let row = 0; row < rows.length; row++) {
        day.set(rows[row][2], rows[row][9]);
      };
    }});
  };
  return day;
};
  

button.onclick = function () {
  y += 1;
  x.textContent = y;
  let dict1 = new Map([...dict(1).entries()]);
  let dict2 = new Map([...dict(2).entries()]);
  let listKeys = [...dict1.keys()];
  let outMap = new Map();
  console.log(listKeys[0]);
  for (let key = 0; key < listKeys.length; key++) {
    outMap.set(listKeys[key], (((dict1.get(listKeys[key])/dict2.get(listKeys[key])) - 1) * 100));
  };
  outMap = new Map([...outMap.entries()].sort((a,b) => b[1] - a[1]));
  console.log(outMap);
};

/*let dict = function (dif) {
  let day = new Map();
  let dateLast = new Date();
  dateLast.setDate(dateLast.getDate() - dif);
  dateLast = dateLast.toISOString().slice(0, 10);
  for (let i = 0; i < 201; i += 100) {
    let url = 'http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json?date=' + dateLast + '&start=' + i;
    $.getJSON(url, function(data) {
      let rows = data.history.data;
      for (let row = 0; row < rows.length; row++) {
        day.set(rows[row][2], rows[row][9]);
      };      
    });
  };
  return day;
};*/
