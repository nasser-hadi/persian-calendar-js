
// Notice : 
// G stands for of Gregorian Date

let dateValue;
let Year_G = 0;
let Month_G = 0;
let Day_G = 0;

document.querySelector('#datePicker').addEventListener('change', function (event) {

    dateValue = event.target.value;

    if (dateValue) {
        document.getElementById('dateDetails01').innerText = '';

        let date = new Date(dateValue);
        Year_G = date.getFullYear();
        Month_G = date.getMonth() + 1; // Months are zero-based
        Day_G = date.getDate();
    }
    else {
        document.getElementById('dateDetails01').innerText = 'Please select a date.';
    }
});


function getGregorianDateDetails() {
    if (dateValue) {
        document.getElementById('dateDetails01').innerText = `Year: ${Year_G} - Month: ${Month_G} - Day: ${Day_G} `;
    } else {
        document.getElementById('dateDetails01').innerText = 'Please select a date.';
    }
}
