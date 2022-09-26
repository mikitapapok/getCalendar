import React, {useMemo, useState} from 'react';
import {DateInfo} from "../helpers";
import './calendar.css'
import Calendar from "./calendar";

const CalendarContainer = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const dayList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const tasks = [
        {id: 1, date: new Date("2022-07-29T08:00:00.000Z"), title: "Phone call 📞"},
        {id: 2, date: new Date("2022-07-21T10:30:00.000Z"), title: "Interview 🙊"},
        {id: 3, date: new Date("2022-08-01T08:00:00.000Z"), title: "Meeting 🍔"},
        {id: 4, date: new Date("2022-08-01T15:00:00.000Z"), title: "Thinking 💫"},
        {id: 5, date: new Date("2022-08-05T11:15:00.000Z"), title: "Meeting 🚀"},
        {id: 6, date: new Date("2022-08-25T13:15:00.000Z"), title: "Eating 🚀"},
        {id: 7, date: new Date("2022-09-21T13:18:30.000Z"), title: "Eating 🚀"}
    ];

    const fullCurrentDate = useMemo(() => new DateInfo(currentYear, currentMonth), [currentMonth])
    const daysList = useMemo(() => fullCurrentDate.getDaysListWithEvents(tasks), [currentMonth, tasks])


    const getPreviousMonthHandler = () => {
        setCurrentMonth(prev => prev - 1)
    }
    const getNextMonthHandler = () => {
        setCurrentMonth(prev => prev + 1)
    }


    return (
        <div className='calendar-container'>
            <div className='calendar-container__component'>{fullCurrentDate.getYear()}</div>
            <div className='calendar-container__component-months'>
                <button onClick={getPreviousMonthHandler}>previous month</button>
                {fullCurrentDate.getMonth()}
                <button onClick={getNextMonthHandler}>next month</button>
            </div>
            <Calendar dayList={dayList} daysInfoList={daysList}/>

        </div>
    );
};

export default CalendarContainer;