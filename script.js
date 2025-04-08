// Notice : 
// G stands for of Gregorian Date
// P stands for of Persian , Shamsi or Jalali Date

let dateValue;

let Year_G = 0;
let Month_G = 0;
let Day_G = 0;

var Year_P = 0;
var Month_P = 0;
var Day_P = 0;

var Sum_G = 0; // Total days of the Gregorian months since the beginning of the year
var Sum_P = 0; // Total days of the Jalali months since the beginning of the year

var b = 0;

const ND = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

document.querySelector('#datePicker').addEventListener('change', function (event) {

    Year_P = 0;
    Month_P = 0;
    Day_P = 0;

    Sum_G = 0;
    Sum_P = 0;

    b = 0;

    dateValue = event.target.value;

    if (dateValue) {

        let date = new Date(dateValue);
        Year_G = date.getFullYear();
        Month_G = date.getMonth() + 1; // Months are zero-based
        Day_G = date.getDate();

        getPersianCalendar();
    }

    gregorianDateDetails(dateValue);
    persianDateDetails(dateValue);
});

function getPersianCalendar() {
    var i = 0;
    for (i = 0; i < Month_G - 1; i++) {
        Sum_G += ND[i];
    }

    if ((Year_G % 4) == 0 && Sum_G >= 59) {
        Sum_G += Day_G + 1;
    }
    else {
        Sum_G += Day_G;
    }

    Sum_P = Sum_G - 79;

    if ((Year_G - 1) % 4 == 0 && Sum_P == 0) b = 1;

    if ((Year_G - 1) % 4 == 0 && Sum_P < 0) Sum_P++;

    if (Sum_P <= 0) Year_P = Year_G - 622;
    else Year_P = Year_G - 621;

    // for (i = 0, j = 1000; i < 4; i++, j /= 10) {
    //     Year_P %= j;
    // } //for i

    if (Sum_P <= 0) Sum_P += 365;
    if (b) Sum_P++;

    if (Sum_P <= 186) {
        Month_P = Math.floor(Sum_P / 31);
        Day_P = Sum_P % 31;
        if (Day_P == 0) {
            Day_P = 31;
        }
        else {
            Month_P++;
        }
    }
    else {
        Sum_P -= 186;
        Month_P = Math.floor(Sum_P / 30);
        Day_P = Sum_P % 30;
        if (Day_P == 0) {
            Day_P = 30;
        }
        else {
            Month_P++;
        }
        Sum_P += 186;
        Month_P += 6;
    }
}

function persianDateDetails(dateP) {
    if (dateP) {
        document.getElementById('year_P').innerText = `Year : ${Year_P} `;
        document.getElementById('month_P').innerText = `Month : ${Month_P.toString().padStart(2, '0')} `;
        document.getElementById('day_P').innerText = `Day : ${Day_P.toString().padStart(2, '0')} `;
    } else {
        document.getElementById('year_P').innerText = `Year : `;
        document.getElementById('month_P').innerText = `Month : `;
        document.getElementById('day_P').innerText = `Day : `;
    }
}

function gregorianDateDetails(dateG) {

    let lable = document.getElementById('notice');

    if (dateG) {
        document.getElementById('year_G').innerText = `Year : ${Year_G} `;
        document.getElementById('month_G').innerText = `Month : ${Month_G.toString().padStart(2, '0')} `;
        document.getElementById('day_G').innerText = `Day : ${Day_G.toString().padStart(2, '0')} `;

        lable.classList.remove('text-danger');
    } else {
        document.getElementById('year_G').innerText = `Year : `;
        document.getElementById('month_G').innerText = `Month : `;
        document.getElementById('day_G').innerText = `Day : `;

        lable.classList.add('text-danger');
    }
}
