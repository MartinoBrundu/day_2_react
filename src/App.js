
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { container, row, col } from 'bootstrap'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header>

        <MyNavbar nome="Martino" />


      </header>
      <main>
        <Welcome />
       <AllTheBooks/>



      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;





