let socket = new WebSocket('wss://sock.vboi.repl.co');

socket.onmessage = function(event) {
  processData(event.data);
};

function toDHMS (unix) {
  days = {
    value: Math.floor(unix / 86400),
    rest: unix % 86400
  };
  hours = {
    value: Math.floor(days.rest / 3600),
    rest: days.rest % 3600
  };
  minutes = {
    value: Math.floor(hours.rest / 60),
    rest: hours.rest % 60
  };
  seconds = Math.floor(minutes.rest);
  
  return {
    days: days.value,
    hours: hours.value,
    minutes: minutes.value,
    seconds: seconds
  };
}

function processData (data) {
  // Gather information about the respective countdown
  let info = JSON.parse(data);
  let time = info.seconds_left;
  let name = info.name;

  let resulting_Date = toDHMS(time);
  let timestring = `das bedeutet ${resulting_Date.days} Tage, ${resulting_Date.hours} Stunden, ${resulting_Date.minutes} Minuten und ${resulting_Date.seconds} Sekunden`
  modifyElements(name, time, timestring);
  
}

function modifyElements(name, total, timestr) {
  let heading = document.getElementById("headline");
  heading.textContent = name;
  
  let unixdiv = document.getElementById("unix");
  unixdiv.textContent = total + ' Sekunden,';
  
  let timestringdiv = document.getElementById("datetime_string");
  timestringdiv.textContent = timestr;
}
