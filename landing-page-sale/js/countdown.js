const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MS_PER_HOUR = 60 * 60 * 1000;
const MS_PER_MINUTE = 60 * 1000;
const MS_PER_SECOND = 1000;

const timerContainer = document.querySelector('.timer-container');
const daysContainer = document.querySelector('#days');
const daysLabel = daysContainer.nextElementSibling;
const hoursContainer = document.querySelector('#hours');
const hoursLabel = hoursContainer.nextElementSibling;
const minutesContainer = document.querySelector('#minutes');
const minutesLabel = minutesContainer.nextElementSibling;
const secondsContainer = document.querySelector('#seconds');
const secondsLabel = secondsContainer.nextElementSibling;

const endDate = new Date('Jul 16, 2021 17:41:10').getTime();
const startDate = new Date('Jul 14, 2021 17:41:08').getTime();

let secondsToAdd = 0;

const interval = setInterval(() => {
  const currentTime = startDate + secondsToAdd;

  const distance = endDate - currentTime;

  const days = Math.floor(distance / MS_PER_DAY);
  const hours = Math.floor((distance % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((distance % MS_PER_HOUR) / MS_PER_MINUTE);
  const seconds = Math.floor((distance % MS_PER_MINUTE) / MS_PER_SECOND);

  if (days <= 1) {
    daysLabel.innerHTML = 'DAY';
  } else {
    daysLabel.innerHTML = 'DAYS';
  }

  if (hours <= 1) {
    hoursLabel.innerHTML = 'HOUR';
  } else {
    hoursLabel.innerHTML = 'HOURS';
  }

  if (minutes <= 1) {
    minutesLabel.innerHTML = 'MINUTE';
  } else {
    minutesLabel.innerHTML = 'MINUTES';
  }

  if (seconds <= 1) {
    secondsLabel.innerHTML = 'SECOND';
  } else {
    secondsLabel.innerHTML = 'SECONDS';
  }

  daysContainer.innerHTML = days ;
  hoursContainer.innerHTML = hours ;
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;
  
  secondsToAdd += 1000;

  if (distance < 0) {
    clearInterval(interval);
    timerContainer.innerHTML = "Period ended";
  }
}, 1000);

