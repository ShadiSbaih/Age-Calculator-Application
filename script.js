function calculateAge() {
    const today = new Date();
    const birthDateInput = document.getElementById('birthdate').value;
    const birthdateParts = birthDateInput.split('-');
    const day = parseInt(birthdateParts[0], 10);
    const month = parseInt(birthdateParts[1], 10) - 1;
    const year = parseInt(birthdateParts[2], 10);
    const birthDate = new Date(year, month, day);

    const isValidDate = (date) => {
        return Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
    };

    if (!isValidDate(birthDate)) {
        alert('Invalid date! Please enter a valid date in the format DD-MM-YYYY.\n for example 30-8-2004');
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.4375);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <div class="result">
            <h3>Age</h3>
            <p> ${ageInYears} Years , ${ageInMonths % 12} Months,  ${ageInDays % 30} Days</p>
        </div>
         <div class="result">
            <h3>Months Passed</h3>
            <p> ${ageInMonths} Months</p>
        </div>
         <div class="result">
            <h3>Weeks Passed</h3>
            <p> ${ageInWeeks} Weeks</p>
        </div>
        <div class="result">
            <h3>Days Passed</h3>
            <p> ${ageInDays} Days</p>
        </div>
         <div class="result">
            <h3>Hours Passed</h3>
            <p> ${ageInHours} Hours</p>
        </div>
        <div class="result">
            <h3>Minutes Passed</h3>
            <p> ${ageInMinutes} Minutes</p>
        </div>
        <div class="result">
            <h3>Seconds Passed</h3>
            <p> ${ageInSeconds} Seconds</p>
        </div>
    `;
    
    resultContainer.style.display = 'block';
}

const ageCalcForm = document.getElementById('agecalc');

ageCalcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateAge();
});