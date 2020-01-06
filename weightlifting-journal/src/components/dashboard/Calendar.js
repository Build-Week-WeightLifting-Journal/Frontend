import React, { useState } from "react";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  // parse,
  isSameDay,
  addDays
} from "date-fns";
import "./calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const header = () => {
    const dateFormat = "MMMM yyyy";

    const nextMonth = () => {
      setCurrentDate(addMonths(currentDate, 1));
    };
    const prevMonth = () => {
      setCurrentDate(subMonths(currentDate, 1));
    };

    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>

        <div className="column col-center" id="monthName">
          {format(currentDate, dateFormat)}
        </div>

        <div className="column col-end" id="right-arrow">
          <div className="icon" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    // const dateFormat = 'd';
    // const days = [];
    // let startDate = startOfWeek(currentDate);

    // for (let i=0; i<7; i++) {
    //   days.push(
    //     <div className="column col-center" key={i}>
    //       {format(addDays(startDate, i), dateFormat)}
    //     </div>
    //   )
    // }

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return (
      <div className="weekDayRow">
        {days.map(day => {
          return <div className="days">{day}</div>;
        })}
      </div>
    );
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    const onDateClick = day => {
      setSelectedDate(day);
    };

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        // const cloneDay = day;

        days.push(
          <div
            className={`column cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={e => {
              e.preventDefault();
              onDateClick(e);
              console.log(selectedDate);
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar">
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
};

export default Calendar;
