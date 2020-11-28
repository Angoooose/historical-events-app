import '../styles/Cards.css';

import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Cards(props) {
    const { headerTheme, bodyTextTheme, dailyEvents, dailyEventsYears, weeklyEvents, weeklyEventsYears } = props;

    const daysArray = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getCurrentDate() {
        let date = new Date();
        return `${date.toLocaleString("default", { weekday: "long" })}, ${date.toLocaleString("default", { month: "long" })} ${daysArray[date.getDate() - 1]}`;
    }

    function getWeekDates() {
        let date = new Date();
        
        const days = ['', '', '', '', '', '', ''];
        const months = ['', '', '', '', '', '', ''];
        const weekDays = ['', '', '', '', '', '', ''];

        for (let i = 0; i < 7; i++) {
            days[i] = date.getDate();
            months[i] = date.getMonth() + 1;
            weekDays[i] = date.getDay();
            
            date.setDate(date.getDate() + 1);
        }

        return `${weekDaysArray[weekDays[0]]}, ${monthsArray[months[0] - 1]} ${daysArray[days[0]]} - ${weekDaysArray[weekDays[6]]}, ${monthsArray[months[6] - 1]} ${daysArray[days[6]]}`;
    }

    function findEventDates(index) {
        let date = new Date();
        
        const days = ['', '', '', '', '', '', ''];
        const months = ['', '', '', '', '', '', ''];
        const weekDays = ['', '', '', '', '', '', ''];

        for (let i = 0; i < 7; i++) {
            days[i] = date.getDate();
            months[i] = date.getMonth() + 1;
            weekDays[i] = date.getDay();
            
            date.setDate(date.getDate() + 1);
        }

        return `${weekDaysArray[weekDays[index]]}, ${monthsArray[months[index] - 1]} ${daysArray[days[index]]} (${weeklyEventsYears[index]})`;
    }

    const cardStyles = makeStyles((theme) => ({
        card: {
            backgroundColor: headerTheme,
            color: 'white',
            marginBottom: '8px',
            marginLeft: '8px',
            marginRight: '8px',
            maxWidth: '40%',
            minWidth: '40%',
            textAlign: 'center',
        },
    }));

    const classes = cardStyles();

    return (
        <div className="cards-container">
            <div className={`cards-title ${bodyTextTheme}`}>Historical events for today ({getCurrentDate()}):</div>
            <Box className="cards-box" display="flex" flexDirection="row" justifyContent="center">
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{dailyEventsYears[0]}</b> - {ReactHtmlParser(dailyEvents[0])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{dailyEventsYears[1]}</b> - {ReactHtmlParser(dailyEvents[1])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{dailyEventsYears[2]}</b> - {ReactHtmlParser(dailyEvents[2])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{dailyEventsYears[3]}</b> - {ReactHtmlParser(dailyEvents[3])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{dailyEventsYears[4]}</b> - {ReactHtmlParser(dailyEvents[4])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{dailyEventsYears[5]}</b> - {ReactHtmlParser(dailyEvents[5])}
                    </CardContent>
                </Card>
            </Box>
            <div className={`cards-title ${bodyTextTheme}`} >Historical events for this week ({getWeekDates()}):</div>
            <Box className="cards-box" display="flex" flexDirection="row" justifyContent="center">
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{findEventDates(0)}</b> - {ReactHtmlParser(weeklyEvents[0])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{findEventDates(1)}</b> - {ReactHtmlParser(weeklyEvents[1])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{findEventDates(2)}</b> - {ReactHtmlParser(weeklyEvents[2])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{findEventDates(3)}</b> - {ReactHtmlParser(weeklyEvents[3])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{findEventDates(4)}</b> - {ReactHtmlParser(weeklyEvents[4])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{findEventDates(5)}</b> - {ReactHtmlParser(weeklyEvents[5])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <b>{findEventDates(6)}</b> - {ReactHtmlParser(weeklyEvents[6])}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}