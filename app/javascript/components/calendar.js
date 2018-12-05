import Flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.css";

const calendarPickr = () => {
  const calendar = document.querySelectorAll(".calendar")
  flatpickr(calendar, {
    enableTime: false,
    dateFormat: "Y-m-d",
    allowInput: true
  });
};

export default calendarPickr;
