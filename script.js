let x = document.querySelector('.out');
let button = document.querySelector('.button');
let text = document.querySelector('p');
let y = 1;
let day = new Map();
let z = 0;


let dict = function (dif) {
  /*let day = new Map();*/
  day.clear();
  let dateLast = new Date();
  dateLast.setDate(dateLast.getDate() - dif);
  dateLast = dateLast.toISOString().slice(0, 10);
  /*console.log(dateLast);*/
  /*for (let i = 0; i < 201; i += 100) {*/
  let url = 'http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json?date=' + dateLast + '&start=' + 0;
  let json = $.getJSON(url);
    
  let rows = json.done(function(response) {
    console.log(response);
    return response;
  });
  console.dir(json.responseJSON.responseText);
    /*for (let row = 0; row < rows.length; row++) {
      day.set(rows[row][2], rows[row][9]);
  });
  /*};*/
  return day;
};


button.onclick = function () {
  y += 1;
  x.textContent = y;
  console.log(dict(1));
  /*let val = dict(1).entries();
  console.log(val.next().value);
  for (let [key, value] of dict(1)) {
    console.log(key + ' ' + value)};*/
    
    
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
