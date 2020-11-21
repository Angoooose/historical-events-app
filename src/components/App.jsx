import { useState, useEffect } from 'react';
import '../styles/App.css';

import Header from './Header.jsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('#2196f3');
  const [textTheme, setTextTheme] = useState('black');

  useEffect(() => {
    if (isDarkMode) {
      setHeaderTheme('#424242');
      setTextTheme('white');
      document.body.style.backgroundColor = '#303030';
    } else {
      setHeaderTheme('#2196f3');
      setTextTheme('black');
      document.body.style.backgroundColor = 'white';
    }
  }, [isDarkMode]);

  return (
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} headerTheme={headerTheme} />
  );
}

export default App;
