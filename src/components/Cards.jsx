import '../styles/Cards.css';

import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Cards(props) {
    const { headerTheme, bodyTextTheme, dailyEvents } = props;

    function getCurrentDate() {
        const date = new Date();
        const daysArray = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
        const properDate = daysArray[date.getDate() - 1];
        return `${date.toLocaleString("default", { weekday: "long" })}, ${date.toLocaleString("default", { month: "long" })} ${properDate}`;
    }

    const cardStyles = makeStyles((theme) => ({
        card: {
            backgroundColor: headerTheme,
            color: 'white',
            maxWidth: '15%',
            marginLeft: '8px',
            marginRight: '8px',
            minWidth: '15%',
            textAlign: 'center',
        },
    }));

    const classes = cardStyles();

    return (
        <div className="cards-container">
            <div className={`cards-title ${bodyTextTheme}`} >Historical events for today ({getCurrentDate()}):</div>
            <Box className="cards-box" display="flex" flexDirection="row" justifyContent="center">
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        {ReactHtmlParser(dailyEvents[0])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        {ReactHtmlParser(dailyEvents[1])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        {ReactHtmlParser(dailyEvents[2])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        {ReactHtmlParser(dailyEvents[3])}
                    </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        {ReactHtmlParser(dailyEvents[4])}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}