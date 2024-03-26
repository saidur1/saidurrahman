export const getToday = () => {
  // Get today's date
  const today = new Date();

  // Define months and days arrays for formatting
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Function to add ordinal suffix to the day
  function addOrdinalSuffix(day) {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }

  // Format the date
  const formattedDate = `${days[today.getDay()]} ${addOrdinalSuffix(
    today.getDate()
  )} ${months[today.getMonth()]}, ${today.getFullYear()}`;

  return formattedDate;
};
