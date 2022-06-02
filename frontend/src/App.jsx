import logo from './assets/logo.svg';
import GridResults from './components/GridResults';
import './styles.css';

function App () {
  if (typeof window !== 'undefined') {
    require('@squidit/css/dist/js/squid.min.js')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } alt="svgLogo" />
      </header>
      <body>
        <GridResults />
      </body>
    </div>
  );
}


export default App;
