import { useState, useEffect } from 'react';
import '../styles/App.css';

import Header from './Header.jsx';
import Cards from './Cards.jsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('#2196f3');
  const [bodyTextTheme, setBodyTextTheme] = useState('black-text');

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
      <Cards headerTheme={headerTheme} bodyTextTheme={bodyTextTheme} />
    </div>
  );
}

export default App;