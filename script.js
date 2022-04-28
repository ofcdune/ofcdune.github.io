// the heart of our program, the websocket
const socket = new WebSocket('wss://sock.vboi.repl.co');


// sends all messages directely to the processing function
socket.onmessage = function(event) {
  processData(event.data);
};

// closes all circles, so they can open
window.onload = () => {
  const titles = ['days', 'hours', 'minutes', 'seconds'];
  let wrapper;
  let left;
  let right;
  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    wrapper = document.getElementById(`${title}-wrapper`);
    left = document.getElementById(`${title}-left`);
    right = document.getElementById(`${title}-right`);

    left.style.transform = "rotate(360deg)";
    wrapper.style.clip = "rect(auto, auto, auto, auto)";
    right.style.transform = "rotate(180deg)";
  }
}

// when the window closes, the socket closes the connection normally instead of aborting it each time
window.onbeforeunload = () => {
	socket.close(1000, "Work complete");
}


// converts any unix timestamp bigger than 1 into an object that splits it into days, hours, minutes and seconds
const toDHMS = (unix) => {
  let days = {
    value: Math.floor(unix / 86400),
    rest: unix % 86400
  };
  let hours = {
    value: Math.floor(days.rest / 3600),
    rest: days.rest % 3600
  };
  let minutes = {
    value: Math.floor(hours.rest / 60),
    rest: hours.rest % 60
  };
  let seconds = Math.floor(minutes.rest);
  
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
  let timeFormatted = info.seconds_left_formatted;
  let name = info.name;
	
  // converts the date into a string representation
  let resultingDate = toDHMS(time);
  const timestring = `${resultingDate.days} days, ${resultingDate.hours} hours, ${resultingDate.minutes} minutes and ${resultingDate.seconds} seconds`
  // edits the site
  modifyElements(name, timeFormatted, resultingDate);
  turnCircle(resultingDate);
}

const turnCircle = (timeObj) => {
  let dayRatio = timeObj.days / 356;
  let hourRatio = timeObj.hours / 24;
  let minuteRatio = timeObj.minutes / 60;
  let secondRatio = timeObj.seconds / 60;

  const ratios = [dayRatio, hourRatio, minuteRatio, secondRatio];
  const titles = ['days', 'hours', 'minutes', 'seconds'];
  let wrapper;
  let left;
  let right;
  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    wrapper = document.getElementById(`${title}-wrapper`);
    left = document.getElementById(`${title}-left`);
    right = document.getElementById(`${title}-right`);

    let finalDegree = Math.floor(360*ratios[i]);
    right.style.transform = `rotate(180deg)`;
    if (finalDegree <= 180) {
      right.style.transform = `rotate(${finalDegree}deg)`;
      wrapper.style.clip = "rect(0px, 100px, 100px, 50px)"
    } else {
      wrapper.style.clip = "rect(auto, auto, auto, auto)";
    }
    left.style.transform = `rotate(${finalDegree}deg)`;
  }

};

const modifyElements = (name, total, timeObj) => {
  const heading = document.getElementById("headline");
  heading.textContent = name;
  
  const unixdiv = document.getElementById("unix");
  unixdiv.textContent = total + ' seconds, that means';

  const titles = ['days', 'hours', 'minutes', 'seconds'];
  let space;
  for (let i = 0; i < titles.length; i++) {
    space = document.getElementById(`${titles[i]}-txt`);
    space.textContent = `${timeObj[titles[i]]} ${titles[i]}`;
  }
}
