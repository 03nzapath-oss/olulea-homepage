import React from 'react';

const Calendar: React.FC = () => {
  const today = new Date();
  const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

  // Holiday Logic Helpers
  const isMonday = (year: number, month: number, date: number) => {
    const d = new Date(year, month, date);
    return d.getDay() === 1;
  };

  const isFirstMonday = (year: number, month: number, date: number) => {
    if (!isMonday(year, month, date)) return false;
    // If the date is <= 7 and is a Monday, it's the first Monday
    return date <= 7;
  };

  const isTuesdayAfterFirstMonday = (year: number, month: number, date: number) => {
    const d = new Date(year, month, date);
    // Must be Tuesday (2)
    if (d.getDay() !== 2) return false;
    // The previous day (date - 1) must be the first Monday
    return isFirstMonday(year, month, date - 1);
  };

  const isThirdSunday = (year: number, month: number, date: number) => {
    const d = new Date(year, month, date);
    if (d.getDay() !== 0) return false;
    // 1st Sun: 1-7, 2nd: 8-14, 3rd: 15-21
    return date >= 15 && date <= 21;
  };

  const isHoliday = (year: number, month: number, date: number) => {
    if (isMonday(year, month, date)) return true; // All Mondays
    if (isTuesdayAfterFirstMonday(year, month, date)) return true; // Tuesday after 1st Mon
    if (isThirdSunday(year, month, date)) return true; // 3rd Sunday
    return false;
  };

  const renderSingleCalendar = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)

    const renderCalendarDays = () => {
      const days = [];
      // Empty cells for days before the 1st
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
      }

      // Days of the month
      for (let d = 1; d <= daysInMonth; d++) {
        const holiday = isHoliday(year, month, d);
        const isToday =
          d === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();

        days.push(
          <div
            key={d}
            className={`h-8 w-8 flex items-center justify-center rounded-full text-sm
              ${isToday ? 'font-bold ring-2 ring-accent' : ''}
              ${holiday ? 'text-accent font-medium bg-secondary' : 'text-text'}
            `}
          >
            {d}
          </div>
        );
      }
      return days;
    };

    return (
      <div className="bg-white p-5 md:p-6 border border-secondary rounded shadow-sm">
        <div className="text-center mb-5">
          <h3 className="text-base md:text-lg font-light tracking-widest mb-1">{year}</h3>
          <p className="text-xl md:text-2xl text-accent tracking-widest">{monthNames[month]}</p>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-3">
          {['日', '月', '火', '水', '木', '金', '土'].map((day, idx) => (
            <div key={day} className={`text-center text-xs md:text-sm font-medium ${idx === 0 ? 'text-accent' : 'text-subtext'}`}>
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 place-items-center">
          {renderCalendarDays()}
        </div>
      </div>
    );
  };

  // Current month and next month
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {renderSingleCalendar(currentYear, currentMonth)}
        {renderSingleCalendar(nextYear, nextMonth)}
      </div>

      <div className="mt-8 text-sm text-subtext text-center space-y-1">
        <p>● <span className="text-accent">色付きの日付</span> は定休日です</p>
      </div>
    </div>
  );
};

export default Calendar;
