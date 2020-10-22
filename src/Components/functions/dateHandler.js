export const sortAscDate = (orders) => {
  var byDate = orders.slice(0);
  byDate.sort(function (a, b) {
    return a.createdAt - b.createdAt;
  });
  return byDate;
}

export const sortDescDate = (orders) => {
  var byDate = orders.slice(0);
  byDate.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });
  return byDate;
}

export const dateFormater = (seconds) => {
  const dateObject = new Date(seconds * 1000);
  const humanDateFormat = dateObject.toDateString();
  return humanDateFormat;
}

export const timeFormater = (seconds) => {
  const dateObject = new Date(seconds * 1000);
  const humanTimeFormat = dateObject.toLocaleTimeString();
  return humanTimeFormat;
}

export const timeDifference = (a, b) => {
  const seconds = a - b;
  const format = val => `0${Math.floor(val)}`.slice(-2)
  const hours = seconds / 3600
  const minutes = (seconds % 3600) / 60
  return [hours, minutes, seconds % 60].map(format).join(':')
}
