import { useState, useEffect } from 'react';
import '../styles/App.css';

import Header from './Header.jsx';
import Cards from './Cards.jsx';
import Gather_Events from '../api/Gather-Events';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('#2196f3');
  const [bodyTextTheme, setBodyTextTheme] = useState('black-text');
  const [isNeedNewEvents, setIsNeedNewEvents] = useState(true);
  const [dailyEvents, setDailyEvents] = useState(['', '', '', '', '']);

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
      <Cards headerTheme={headerTheme} bodyTextTheme={bodyTextTheme} dailyEvents={dailyEvents} />
      <Gather_Events isNeedNewEvents={isNeedNewEvents} setIsNeedNewEvents={setIsNeedNewEvents} dailyEvents={dailyEvents} setDailyEvents={setDailyEvents}/>
    </div>
  );
}

export default App;