// receives meds from CreateMeds and displays in a table, TODO: route to different pages
import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';

const App = () => {

  return (
    <Container className="App">
      <Navigation />
    </Container>
  );
}

export default App;