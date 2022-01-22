function Time() {
  var date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  document.getElementById("hour").innerHTML = hours + "<br>Hour";
  document.getElementById("minutes").innerHTML = minutes + "<br>Minutes";
  document.getElementById("second").innerHTML = seconds + "<br>Seconds";
  document.getElementById("am-pm").innerHTML = am_pm;
}
setInterval(Time, 1000);

function display() {
  var date = new Date();
  var hours = date.getHours();

  let waketime = document.getElementById("Wake").value;
  let lunchtime = document.getElementById("Lunch").value;
  let naptime = document.getElementById("Nap").value;

  if (waketime == hours) {
    document.getElementById("image").style.backgroundImage ="url(wakeup.png)";
    document.getElementById("msgs").innerHTML = "Let's have some breakfast";
  }
  if (lunchtime == hours) {
    document.getElementById("image").style.backgroundImage =  "url(lunch.png)";
    document.getElementById("msgs").innerHTML = "Let's have lunch";
  }
  if (naptime == hours) {
    document.getElementById("image").style.backgroundImage = "url(nap.png)";
    document.getElementById("msgs").innerHTML = "Let's have some dinner";
  }

  displayValue();
}

function displayValue() {
  let waketime = document.getElementById("Wake").value;
  let lunchtime = document.getElementById("Lunch").value;
  let naptime = document.getElementById("Nap").value;

  var insideValue1 = document.getElementById("Wake");
  var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;

  var insideValue2 = document.getElementById("Lunch");
  var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;

  var insideValue3 = document.getElementById("Nap");
  var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;

  if (waketime == "none") {
    document.getElementById("wakeup").innerHTML = "";
  } else {
    document.getElementById("wakeup").innerHTML = "Wake Up Time : " + invalue1;
  }

  if (lunchtime == "none") {
    document.getElementById("lunch0").innerHTML = "";
  } else {
    document.getElementById("lunch0").innerHTML = "Lunch Time : " + invalue2;
  }

  if (naptime == "none") {
    document.getElementById("nap0").innerHTML = "";
  } else {
    document.getElementById("nap0").innerHTML = "Nap Time : " + invalue3;
  }
}
