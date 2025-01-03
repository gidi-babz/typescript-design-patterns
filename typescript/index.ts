// Date class
const date = new Date();

const currentYear = date.toISOString();

const currentMonth = date.getMonth() + 1;

const currentDate = date.getDate();

console.log("Current", currentYear);
