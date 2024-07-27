import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PetCalendar.scss';

export default function PetCalendar() {
  const [clickedDates, setClickedDates] = useState([]);

  function handleDateClick(e) {
    const date = e.toDateString();

    if (!clickedDates.includes(date)) {
      setClickedDates([...clickedDates, date]);
    } else {
      const index = clickedDates.indexOf(date);
      clickedDates.splice(index, 1);
      setClickedDates([...clickedDates]);
    }

    console.log(clickedDates);
  }

  function tileClassName({ date, view }) {
    if (view === 'month' && clickedDates.includes(date.toDateString())) {
      return 'highlighted-date';
    }
  }

  return (
    <div className="PetCalendar">
      <h2>Activity</h2>
      <Calendar onClickDay={handleDateClick} tileClassName={tileClassName} />
      <p>Activity this month: {clickedDates.length} days</p>
    </div>
  );
}
