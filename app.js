function updateTime() {
  let hour = document.getElementById("time");

  let date = new Date();
  let getHour = date.getHours();
  let getMin = date.getMinutes();
  let getSec = date.getSeconds();
  // const m = date.toTimeString()
  //console.log(m)
  let state = "AM";
  if (parseInt(getHour) >= 12) {
    state = "PM";
    getHour -= 12;
  }
  // if (parseInt(getHour) < 10) {
  //   getHour = `0${getHour}`;
  // }

  getHour = getHour.toString().padStart(2, "0");

  getMin = getMin.toString().padStart(2, "0");
  getSec = getSec.toString().padStart(2, "0");

  hour.innerHTML = `${getHour}:${getMin}:${getSec} ${state}`;
}

setInterval(updateTime, 1000);

// location.reload();
