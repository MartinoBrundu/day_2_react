
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFotter'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <header>

        <MyNavbar nome="Martino" />
        

      </header>
      <main>
        <Welcome/>

      </main>
      <footer>
       <MyFooter />
      </footer>
    </div>
  );
}

export default App;





