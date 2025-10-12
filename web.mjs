let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
renderCalendar(currentMonth, currentYear);
});

function renderCalendar(month, year) {
const calendar = document.getElementById("calendar");
calendar.innerHTML = "";

const firstDay = new Date(year, month, 1);
const startDay = (firstDay.getDay() + 6) % 7; // Monday = 0, Sunday = 6
const daysInMonth = new Date(year, month + 1, 0).getDate();
const monthName = new Date(year, month).toLocaleString("en-GB", { month: "long" });

document.getElementById("current-month").textContent = `${monthName} ${year}`;

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "100%";

  // Header row for weekdays
const headerRow = document.createElement("tr");
["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].forEach(day => {
    const th = document.createElement("th");
    th.textContent = day;
    th.style.border = "1px solid black";
    th.style.padding = "5px";
    th.style.backgroundColor = "#f0f0f0";
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

let date = 1 - startDay;

for (let week = 0; week < 6; week++) {
    const row = document.createElement("tr");

    for (let i = 0; i < 7; i++) {
    const cell = document.createElement("td");
    cell.style.border = "1px solid black";
    cell.style.padding = "10px";
    cell.style.height = "80px";
    cell.style.verticalAlign = "top";

    if (date >= 1 && date <= daysInMonth) {
        cell.textContent = date;
    } else {
        cell.textContent = "";
    }

    row.appendChild(cell);
    date++;
    }

    table.appendChild(row);

    if (date > daysInMonth) break;
}

calendar.appendChild(table);
}
