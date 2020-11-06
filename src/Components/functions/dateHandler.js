export const sortAscDate = (orders) => {
  var byDate = orders.slice(0);
  byDate.sort(function (a, b) {
    return a.createdAt - b.createdAt;
  });
  return byDate;
};

export const sortDescDate = (orders) => {
  var byDate = orders.slice(0);
  byDate.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });
  return byDate;
};

export const dateFormater = (milliseconds) => {
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toDateString();
  return humanDateFormat;
};

export const timeFormater = (seconds) => {
  const dateObject = new Date(seconds);
  const humanTimeFormat = dateObject.toLocaleTimeString(); //voy a cambiar esto
  return humanTimeFormat;
};

export const timeFormater2 = (milliseconds) => {
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return `${hour} Horas: ${minute} Minutos: ${seconds} Segundos`;
};

export const timeDifference = (a, b) => {
  const seconds = a - b;
  const format = (val) => `0${Math.floor(val)}`.slice(-2);
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;
  return [hours, minutes, seconds % 60].map(format).join(":");
};
