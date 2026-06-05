const calendarDates = document.getElementById("calendar-dates");

const today = new Date();

const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const firstDay =
    new Date(currentYear, currentMonth, 1).getDay();

const daysInMonth =
    new Date(currentYear, currentMonth + 1, 0).getDate();

/* Empty spaces before first day */

for(let i = 0; i < firstDay; i++){
    const emptyCell = document.createElement("div");
    calendarDates.appendChild(emptyCell);
}

/* Generate dates */

for(let day = 1; day <= daysInMonth; day++){

    const dateCell = document.createElement("div");

    dateCell.textContent = day;

    if(day === today.getDate()){
        dateCell.classList.add("today");
    }

    calendarDates.appendChild(dateCell);
}

/* Dark Mode Toggle */

const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
