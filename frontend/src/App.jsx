import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.svg';
import GridResults from './components/GridResults';
import './styles.css';

function App () {
  return (
      <div className="App">
        <header >
          <img  className="img-header" src={ logo } alt="svgLogo" />
        </header>
        <body>
          <GridResults />
        </body>
      </div>
  );
}


export default App;
