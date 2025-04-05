function getGregorianDateDetails() {
    const datePicker = document.getElementById('datePicker');
    const dateValue = datePicker.value;
    // Notice : G stands for of Gregorian Date
    if (dateValue) {
        const date = new Date(dateValue);
        const Year_G = date.getFullYear();
        const month_G = date.getMonth() + 1; // Months are zero-based
        const Day_G = date.getDate();

        document.getElementById('dateDetails01').innerText = `Year: ${Year_G} - Month: ${month_G} - Day: ${Day_G} `;

    } else {
        document.getElementById('dateDetails01').innerText = 'Please select a date.';
    }
}
