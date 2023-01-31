"use strict";

const daysleftHTML = document.querySelector("#daysleftHTML");
const hoursleftHTML = document.querySelector("#hoursleftHTML");
const minutesleftHTML = document.querySelector("#minutesleftHTML");
const secondsleftHTML = document.querySelector("#secondsleftHTML");
const launchDate = new Date("Dec 12, 2023 00:00:00");

const updateTime = () => {
  const currentDate = new Date();
  const totalLeftTime = launchDate - currentDate;
  const daysLeft = Math.floor(totalLeftTime / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (totalLeftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (totalLeftTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const SecondsLeft = Math.floor((totalLeftTime % (1000 * 60)) / 1000);

  daysleftHTML.innerHTML = daysLeft;
  hoursleftHTML.innerHTML = hoursLeft;
  minutesleftHTML.innerHTML = minutesLeft;
  secondsleftHTML.innerHTML = SecondsLeft;

  console.log("hello");
};

setInterval(updateTime, 1000);
