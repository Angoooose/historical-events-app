import { useEffect } from 'react';

export default function GatherEvents(props) {
    const { isNeedNewEvents, setIsNeedNewEvents, dailyEvents, setDailyEvents} = props;

    const fetch = require('node-fetch');
    const HISTORICAL_EVENTS_API_URL = "http://history.muffinlabs.com/";

    useEffect(() => {
        if (isNeedNewEvents) {
            getHistoricalEventsForToday();
        }
    }, [isNeedNewEvents]);

    async function getHistoricalEventsForToday() {
        await fetch(`https://cors-anywhere.herokuapp.com/${HISTORICAL_EVENTS_API_URL}/date`).then(res => res.json()).then(res => {
            const updatedEvents = [...dailyEvents];
            updatedEvents.forEach((event, i) => {
                updatedEvents[i] = `${res.data.Events[i].year} - ${res.data.Events[i].text}`;
            });
            setDailyEvents(updatedEvents);
            let date = new Date();
            awaitNewEvents(date.getDate());
        });
    }

    function awaitNewEvents(oldDate) {
        setInterval(function() {
            let date = new Date();
            if (date.getDate() !== oldDate) {
                setIsNeedNewEvents(true);
            }
        }, 60000);
    }

    return (
        null
    );
}