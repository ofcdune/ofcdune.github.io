async function getData () {
  let response = await fetch('https://server.vboi.repl.co/countdowns?token="repl-workcountdown"').then(response => response.json());
  // Gather information about the respective countdown
  let time = response[0].seconds_left;
  let name = response[0].name;
  let timestring = response[0].string;

  let resulting_Date = new Date(time * 1000)
  modifyElements(name, time, timestring);
  
}

function modifyElements(name, total, timestr) {
  let heading = document.getElementById("headline");
  heading.textContent = 'Countdown (' + name + ')';
  
  let unixdiv = document.getElementById("unix");
  unixdiv.textContent = total + ' seconds,';
  
  let timestringdiv = document.getElementById("datetime_string");
  timestringdiv.textContent = timestr;
}

