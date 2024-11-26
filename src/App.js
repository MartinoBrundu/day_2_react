
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'



function App() {
  return (
    <div className="App">
      <header>

        <MyNavbar nome="Martino" />


      </header>
      <main>
        <Welcome />
        <Container >
          
           
       <AllTheBooks />
           
        
        </Container>



      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;





