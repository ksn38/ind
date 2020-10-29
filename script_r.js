let namesHigh = document.querySelectorAll('.name-high');
let namesLow = document.querySelectorAll('.name-low');
let changesHigh = document.querySelectorAll('.change-high');
let changesLow = document.querySelectorAll('.change-low');
let button = document.querySelector('.button');
let text = document.querySelector('p');
let days = document.getElementById('days');


let dict = function (dif) {
  let day = new Map();
  let dateLast = new Date();
  dateLast.setDate(dateLast.getDate() - dif);
    if (dateLast.getDay() == 6) {
    dateLast.setDate(dateLast.getDate() - 1);
  } else if (dateLast.getDay() == 0) {
    dateLast.setDate(dateLast.getDate() - 2);
  };
  console.log(`dateLast ${dateLast}`);
  let url = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2020'/* + dateLast.getDate() + '/' dateLast.getMonth() + '/' + dateLast.getFullYear();*/
  $.ajax({
  url: url,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  async: false,
  dataType: 'xml',
  success: function (data) {
    let rows = data;
    console.log(`data ${rows}`);
    /*for (let row = 0; row < rows.length; row++) {
      day.set(rows[row][2], rows[row][9]);
    };*/
  }});
  return day;
};
  

button.onclick = function () {
  let dict1 = dict(1);
  console.log(`dict ${dict1}`);
  /*dict1 = new Map([...dict1.entries()]);
  let dict2 = new Map([...dict(days.value).entries()]);
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
  outMapRev = new Map([...outMap.entries()].sort((a,b) => a[1] - b[1]));
  outMap = new Map([...outMap.entries()].sort((a,b) => b[1] - a[1]));
  outMapKeys = [...outMap.keys()].slice(0, 20);
  outMapValues = [...outMap.values()].slice(0, 20);
  outMapRevKeys = [...outMapRev.keys()].slice(0, 20);
  outMapRevValues = [...outMapRev.values()].slice(0, 20);
  for (let i = 0; i < namesHigh.length; i++) {
    namesHigh[i].textContent = outMapKeys[i];
    changesHigh[i].textContent = outMapValues[i];
    namesLow[i].textContent = outMapRevKeys[i];
    changesLow[i].textContent = outMapRevValues[i];
  };*/
};

