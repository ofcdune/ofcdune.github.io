async function getData () {
  let response = await fetch('https://server.vboi.repl.co/countdowns/all').then(response => response.json());
  let time = response[0].seconds_left;
  let name = response[0].name;
  
  let heading = document.getElementById("headline");
  heading.textContent = 'Countdown of the countdown ' + name;
  
  let resulting_Date = new Date(time * 1000)
  modifyElements(resulting_Date.getDay(), resulting_Date.getHours(), resulting_Date.getMinutes(), resulting_Date.getSeconds(), time)
}

function modifyElements(days, hours, minutes, seconds, total) {
  let daysdiv = document.getElementById("days");
  daysdiv.textContent = days;
  
  let hoursdiv = document.getElementById("hours");
  hoursdiv.textContent = hours;
  
  let minutessdiv = document.getElementById("minutes");
  minutessdiv.textContent = minutes;
  
  let secondsdiv = document.getElementById("seconds");
  secondsdiv.textContent = seconds;
  
  let unixdiv = document.getElementById("unix");
  unixdiv.textContent = total;
}
