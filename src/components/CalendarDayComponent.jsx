import React from 'react';
import './calendar.css'

const CalendarDayComponent = ({dayInfo}) => {
    return (
        <div className=' calendar-day-info'>
            <p className='calendar-day-info-day'>{dayInfo.id}</p>
            <div className='event-list'>
                {dayInfo.events.map((event, index) => {
                    return (
                        <div className='calendar-day-info-events'>
                            <div className='calendar-day-info-events__component '>{event.time}</div>
                            <div key={index} className='calendar-day-info-events__component'>{event.tittle}</div>
                        </div>

                    )
                })}
            </div>

        </div>
    );
};

export default CalendarDayComponent;