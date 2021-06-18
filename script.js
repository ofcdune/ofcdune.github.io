let socket = new WebSocket('wss://sock.vboi.repl.co');

socket.onmessage = function(event) {
	var messages = document.getElementById('time');
	let dic = JSON.parse(event.data);
  processData(dic);
};

function processData (jsonObj) {
  // Gather information about the respective countdown
  let time = jsonObj[0].seconds_left;
  let name = jsonObj[0].name;

  let resulting_Date = new Date(time * 1000);
  let timestring = `das bedeutet ${d.getDay()} Tage, ${d.getHours()} Stunden, ${d.getMinutes()} Minuten und ${d.getSeconds()} Sekunden`
  modifyElements(name, time, resultingDate);
  
}

function modifyElements(name, total, timestr) {
  let heading = document.getElementById("headline");
  heading.textContent = 'Countdown (' + name + ')';
  
  let unixdiv = document.getElementById("unix");
  unixdiv.textContent = total + ' Sekunden,';
  
  let timestringdiv = document.getElementById("datetime_string");
  timestringdiv.textContent = timestr;
}

