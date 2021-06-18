// the heart of our program, the websocket
let socket = new WebSocket('wss://sock.vboi.repl.co');


// sends all messages directely to the processing function
socket.onmessage = function(event) {
  processData(event.data);
};


// when the window closes, the socket closes the connection normally instead of aborting it each time
window.onbeforeunload = function () {
	socket.close(1000, "Work complete");
}


// converts any unix timestamp bigger than 1 into an object that splits it into days, hours, minutes and seconds
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
	// processes the data by parsing it to JSON
  let info = JSON.parse(data);
  let time = info.seconds_left;
  let name = info.name;
	
	// converts the date into a string representation
  let resulting_Date = toDHMS(time);
  let timestring = `das bedeutet ${resulting_Date.days} Tage, ${resulting_Date.hours} Stunden, ${resulting_Date.minutes} Minuten und ${resulting_Date.seconds} Sekunden`
	
	// edits the site
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
