import React from 'react';
import './calendar.css'
import CalendarDayComponent from "./CalendarDayComponent";

const Calendar = ({dayList, daysInfoList}) => {
    return (
        <div className='calendar-display'>
            {dayList?.map((day, index) => {
                return (<div className="calendar-display__component" key={index}>
                    {day}
                </div>)
            })}
            {daysInfoList?.map(dayInfo => {

                return (
                    <CalendarDayComponent key={dayInfo.id} dayInfo={dayInfo}/>
                )
            })}

        </div>
    );
};

export default Calendar;