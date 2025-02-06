import React, { useState } from "react";

const YearSelector = () => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const daysInMonth = (month, year) => {
    const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
      return 29; // Leap year
    }
    return daysInEachMonth[month - 1];
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setDay(""); // Reset day when month changes
  };

  const handleDayChange = (e) => setDay(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  return (
    <div>
      <label className="text-sm font-semibold">Date of Birth</label>
      <div className="flex gap-2">
        <select
          className="w-full p-2 border rounded"
          value={month}
          onChange={handleMonthChange}
        >
          <option value="">Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>

        <select
          className="w-full p-2 border rounded"
          value={day}
          onChange={handleDayChange}
          disabled={!month}
        >
          <option value="">Day</option>
          {month &&
            [...Array(daysInMonth(month, year)).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
        </select>

        <select
          className="w-full p-2 border rounded"
          value={year}
          onChange={handleYearChange}
        >
          <option value="">Year</option>
          {[...Array(100).keys()].map((i) => (
            <option key={i} value={2025 - i}>
              {2025 - i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default YearSelector;
