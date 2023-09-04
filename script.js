const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");
const yearElement = document.querySelector(".year");

const setClock = () => {
  let now = new Date();
  let hh = now.getHours() * 30;
  let mm = now.getMinutes() * deg;
  let ss = now.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  // Get and format the day, date, and year
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let day = days[now.getDay()];
  let date = now.getDate().toString().padStart(2, '0');
  let month = (now.getMonth() + 1).toString().padStart(2, '0');
  let year = now.getFullYear();

  dayElement.textContent = day;
  dateElement.textContent = `${date}-${month}-${year}`;
};

setClock();
setInterval(setClock, 1000);

const switchTheme = (evt) => {
  const switchBtn = evt.target;
  if (switchBtn.textContent.toLowerCase() === "light") {
    switchBtn.textContent = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    switchBtn.textContent = "light";
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "dark";
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  switchModeBtn.textContent = currentTheme;
}
