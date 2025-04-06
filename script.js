
// Notice : 
// G stands for of Gregorian Date

let dateValue;
let Year_G = 0;
let Month_G = 0;
let Day_G = 0;

document.querySelector('#datePicker').addEventListener('change', function (event) {

    dateValue = event.target.value;

    if (dateValue) {

        let date = new Date(dateValue);
        Year_G = date.getFullYear();
        Month_G = date.getMonth() + 1; // Months are zero-based
        Day_G = date.getDate();

        gregorianDateDetails(dateValue);
    }
    else {
        document.getElementById('year_G').innerText = 'Please select a date.';
    }
});


function gregorianDateDetails(date2) {
    if (date2) {
        document.getElementById('year_G').innerText= `Year : ${Year_G} `;
        document.getElementById('month_G').innerText= `Month : ${Month_G.toString().padStart(2,'0')} `;
        document.getElementById('day_G').innerText= `Day : ${Day_G.toString().padStart(2,'0')} `;
    } else {
        document.getElementById('year_G').innerText = 'Please select a date.';
    }
}
