// Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer className="items" message="Bienvenido !!" />
    </div>
  );
}

export default App;