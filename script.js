let socket = new WebSocket('wss://sock.vboi.repl.co');

socket.onmessage = function(event) {
  processData(event.data);
};

function processData (data) {
  // Gather information about the respective countdown
  let info = JSON.parse(data);
  let time = info.seconds_left;
  let name = info.name;

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

