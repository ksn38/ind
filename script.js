let x = document.querySelector('.out');
let button = document.querySelector('.button');
let text = document.querySelector('p');
let y = 1;

let z = 0;


let dict = function (dif) {
  let day = new Map();
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
  let dict2 = new Map([...dict(8).entries()]);
  let listKeys = [...dict1.keys()];
  let outMap = new Map();
  for (let key = 0; key < listKeys.length; key++) {
    let val = ((dict1.get(listKeys[key])/dict2.get(listKeys[key])) - 1) * 10000;
    if (!Number.isNaN(val)) {
      val = Math.round(val, 2);
      val = val/100;
      outMap.set(listKeys[key], val);
    };
  };
  outMaprev = new Map([...outMap.entries()].sort((a,b) => a[1] - b[1]));
  outMap = new Map([...outMap.entries()].sort((a,b) => b[1] - a[1]));
  console.log(outMap);
  console.log([...outMap].slice(0, 20));
  console.log([...outMaprev].slice(0, 20));
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
