import { useState, useEffect } from 'react';
import '../styles/App.css';

import Header from './Header.jsx';
import Cards from './Cards.jsx';
import GatherEvents from '../api/GatherEvents';
import Footer from './Footer.jsx';

import { useMediaQuery } from 'react-responsive'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('#2196f3');
  const [bodyTextTheme, setBodyTextTheme] = useState('black-text');
  const [isNeedDailyEvents, setIsNeedDailyEvents] = useState(true);
  const [dailyEvents, setDailyEvents] = useState(['', '', '', '', '', '']);
  const [dailyEventsYears, setDailyEventsYears] = useState(['', '', '', '', '', '']);
  const [isNeedWeeklyEvents, setIsNeedWeeklyEvents] = useState(true);
  const [weeklyEvents, setWeeklyEvents] = useState(['', '', '', '', '', '', '']);
  const [weeklyEventsYears, setWeeklyEventsYears] = useState(['', '', '', '', '', '', '']);
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isVerySmallScreen = useMediaQuery({ query: '(max-device-width: 320px)' });

  useEffect(() => {
    if (isDarkMode) {
      setHeaderTheme('#424242');
      setBodyTextTheme('white-text');
      document.body.style.backgroundColor = '#303030';
    } else {
      setHeaderTheme('#2196f3');
      setBodyTextTheme('black-text');
      document.body.style.backgroundColor = 'white';
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} headerTheme={headerTheme} />
      <Cards headerTheme={headerTheme} bodyTextTheme={bodyTextTheme} dailyEvents={dailyEvents} dailyEventsYears={dailyEventsYears} weeklyEvents={weeklyEvents} weeklyEventsYears={weeklyEventsYears} isPortrait={isPortrait} />
      <GatherEvents isNeedDailyEvents={isNeedDailyEvents} setIsNeedDailyEvents={setIsNeedDailyEvents} dailyEvents={dailyEvents} setDailyEvents={setDailyEvents} dailyEventsYears={dailyEventsYears} setDailyEventsYears={setDailyEventsYears} isNeedWeeklyEvents={isNeedWeeklyEvents} setIsNeedWeeklyEvents={setIsNeedWeeklyEvents} weeklyEvents={weeklyEvents} setWeeklyEvents={setWeeklyEvents} weeklyEventsYears={weeklyEventsYears} setWeeklyEventsYears={setWeeklyEventsYears} />
      <Footer headerTheme={headerTheme} isPortrait={isPortrait} isVerySmallScreen={isVerySmallScreen} />
    </div>
  );
}

export default App;