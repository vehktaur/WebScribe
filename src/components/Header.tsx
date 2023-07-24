import { useState, useEffect } from "react";

export default function Header() {
  const date = new Date();
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

  const hours = date.getHours();

  const [timeOfDay, setTimeOfDay] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [dayOfMonth, setDayOfMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  useEffect(() => {
    if (hours < 12) {
      setTimeOfDay("Morning");
    } else if (hours < 17) {
      setTimeOfDay("Afternoon");
    } else {
      setTimeOfDay("Evening");
    }

    setDay(days[date.getDay()]);
    setMonth(months[date.getMonth()])
    setDayOfMonth(date.getDate())
    setYear(date.getFullYear())
  }, [hours]);

  return (
    <header>
      <div className="container">
        <div className="row">
            <span className="greeting">{`Good ${timeOfDay} 😁`}</span>
            <span className="date">{day}, {month} {dayOfMonth}, {year}</span>
        </div>
      </div>
    </header>
  );
}
