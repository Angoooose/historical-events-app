import { useEffect } from 'react';

export default function GatherEvents(props) {
    const { isNeedDailyEvents, setIsNeedDailyEvents, dailyEvents, setDailyEvents, dailyEventsYears, setDailyEventsYears, isNeedWeeklyEvents, setIsNeedWeeklyEvents, weeklyEvents, setWeeklyEvents, weeklyEventsYears, setWeeklyEventsYears } = props;

    const fetch = require('node-fetch');
    const HISTORICAL_EVENTS_API_URL = "http://history.muffinlabs.com/";

    useEffect(() => {
        if (isNeedDailyEvents) {
            getHistoricalEventsForToday();
        } else if (isNeedWeeklyEvents) {
            getHistoricalEventsForWeek();
        }
    }, [isNeedDailyEvents, isNeedWeeklyEvents]);

    async function getHistoricalEventsForToday() {
        let date = new Date();
        await fetch(`https://cors-anywhere.herokuapp.com/${HISTORICAL_EVENTS_API_URL}/date/${date.getMonth() + 1}/${date.getDate()}`).then(res => res.json()).then(res => {
            const updatedEvents = [...dailyEvents];
            const updatedEventsYears = [...dailyEventsYears];
            for (let i = 0; i < updatedEvents.length; i++) {
                updatedEvents[i] = res.data.Events[i].no_year_html;
                updatedEventsYears[i] = res.data.Events[i].year;
            }
            setDailyEvents(updatedEvents);
            setDailyEventsYears(updatedEventsYears);
            setIsNeedDailyEvents(false);
            awaitDailyEvents(date.getDate());
        });
    }

    async function getHistoricalEventsForWeek() {
        let date = new Date();

        const updatedEvents = [...weeklyEvents];
        const updatedEventsYears = [...weeklyEventsYears];
    
        for (let i = 0; i < 7; i++) {
            let month = date.getMonth() + 1;
            let day = date.getDate();
    
            await getHistoricalEventForDay(month, day).then(res => {
                updatedEvents[i] = res[i].no_year_html;
                updatedEventsYears[i] = res[i].year;
            });
    
            date.setDate(date.getDate() + 1);
        }
        
        setWeeklyEvents(updatedEvents);
        setWeeklyEventsYears(updatedEventsYears);
        setIsNeedWeeklyEvents(false);
        awaitWeeklyEvents(date.getDate());
    }

    async function getHistoricalEventForDay(month, day) {
        return new Promise(resolve => {
            fetch(`https://cors-anywhere.herokuapp.com/${HISTORICAL_EVENTS_API_URL}/date/${month}/${day}`).then(res => res.json()).then(res => {
                resolve(res.data.Events);
            });
        });
    }

    function awaitDailyEvents(oldDate) {
        setInterval(function() {
            let date = new Date();
            if (date.getDate() !== oldDate) {
                setIsNeedDailyEvents(true);
            }
        }, 60000);
    }

    function awaitWeeklyEvents(oldDate) {
        setInterval(function() {
            let date = new Date();
            if (date.getDate() !== oldDate) {
                setIsNeedWeeklyEvents(true);
            }
        }, 60000);
    }

    return (
        null
    );
}