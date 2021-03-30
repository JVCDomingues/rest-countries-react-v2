import Header from './components/Header';

import { GlobalStyle } from './styles/global';

import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './hooks/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
