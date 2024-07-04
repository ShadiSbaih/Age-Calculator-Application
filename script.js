function calculateAge() {
    const today = new Date();
    const birthDateInput = document.getElementById('birthdate').value;
    const birthdateParts = birthDateInput.split('-');
    const day = parseInt(birthdateParts[0]);
    const month = parseInt(birthdateParts[1]) - 1;
    const year = parseInt(birthdateParts[2]);
    const birthDate = new Date(year, month, day);

    const isValidDate = (date) => {
        return Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
    };

    if (!isValidDate(birthDate)) {
        alert('Invalid date! Please enter a valid date in the format DD-MM-YYYY.\n for example 30-8-2004');
        return;
    }

    // Calculate age components
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

    if (ageInDays < 0) {
        ageInMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageInDays += lastMonth;
    }
    
    if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12;
    }

    // Exact calculations for weeks, days, hours, minutes, seconds
    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDaysTotal = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDaysTotal / 7);
    const ageInMonthsTotal = Math.floor(ageInDaysTotal / 30.4375);

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <div class="result">
            <h3>Age</h3>
            <p>${formatNumber(ageInYears)} Years, ${formatNumber(ageInMonths)} Months, ${formatNumber(ageInDays)} Days</p>
        </div>
        <div class="result">
            <h3>Months Passed</h3>
            <p>${formatNumber(ageInMonthsTotal)} Months</p>
        </div>
        <div class="result">
            <h3>Weeks Passed</h3>
            <p>${formatNumber(ageInWeeks)} Weeks</p>
        </div>
        <div class="result">
            <h3>Days Passed</h3>
            <p>${formatNumber(ageInDaysTotal)} Days</p>
        </div>
        <div class="result">
            <h3>Hours Passed</h3>
            <p>${formatNumber(ageInHours)} Hours</p>
        </div>
        <div class="result">
            <h3>Minutes Passed</h3>
            <p>${formatNumber(ageInMinutes)} Minutes</p>
        </div>
        <div class="result">
            <h3>Seconds Passed</h3>
            <p>${formatNumber(ageInSeconds)} Seconds</p>
        </div>
    `;
    
    resultContainer.style.display = 'block';
}

const ageCalcForm = document.getElementById('agecalc');

ageCalcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateAge();
});

// function formatNumber(number) {
//     return number.toLocaleString();
// }
function formatNumber(number) {
    let numStr = number.toString();
    let formatted = '';
    let count = 0;

    for (let i = numStr.length - 1; i >= 0; i--) {
        formatted = numStr[i] + formatted;
        count++;
        if (count === 3 && i !== 0) {
            formatted = ',' + formatted;
            count = 0;
        }
    }
    return formatted;
}