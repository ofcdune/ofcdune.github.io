const readConfig = () => {
    const configStorage = localStorage.getItem("config");

    let cur = new Date();
    const year = new Date().getFullYear();
    let christmasThisYear = `12/24/${year} 00:00:00`;

    /* little fix for between the years */
    if (cur - christmasThisYear < 0) {
        year++;
    }

    if (configStorage === null) {
        const config = {
            "time": `12/24/${year} 00:00:00`,
            "title": `Christmas ${year}`
        };
        localStorage.setItem("config", JSON.stringify(config));
        return config;
    } else {
        return JSON.parse(configStorage);
    }
}

const config = readConfig();

const timestamp = Date.parse(config.time);
const name = config.title;

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


// converts any unix timestamp bigger than 1 into an object that splits it into days, hours, minutes and seconds
const toDHMS = (unix) => {
    let days = {
        value: unix / 86400,
        rest: unix % 86400
    };
    let hours = {
        value: days.rest / 3600,
        rest: days.rest % 3600
    };
    let minutes = {
        value: hours.rest / 60,
        rest: hours.rest % 60
    };
    let seconds = minutes.rest;

    return {
        days: days.value,
        hours: hours.value,
        minutes: minutes.value,
        seconds: seconds
    };
}


const processData = () => {
    // subtract the future timestamp from the one right now
    let now = Date.now();
    let difference = (timestamp - now) / 1000;

    // converts the date into a string representation
    let resultingDate = toDHMS(Math.floor(difference));
    // edits the site
    modifyElements(name, difference, resultingDate);
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

        let finalDegree = Math.floor(360 * ratios[i]);
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
    unixdiv.textContent = total.toFixed(3);

    const titles = ['days', 'hours', 'minutes', 'seconds'];
    let space;
    for (let i = 0; i < titles.length; i++) {
        space = document.getElementById(`${titles[i]}-txt`);
        space.textContent = `${Math.floor(timeObj[titles[i]])} ${titles[i]}`;
    }
}


setInterval(() => {
    processData();
}, 75);
