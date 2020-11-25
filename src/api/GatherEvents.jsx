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
        let date = new Date();
        await fetch(`https://cors-anywhere.herokuapp.com/${HISTORICAL_EVENTS_API_URL}/date/${date.getMonth() + 1}/${date.getDate()}`).then(res => res.json()).then(res => {
            const updatedEvents = [...dailyEvents];
            for (let i = 0; i < updatedEvents.length; i++) {
                updatedEvents[i] = res.data.Events[i].html;
            }
            setDailyEvents(updatedEvents);
            setIsNeedNewEvents(false);
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