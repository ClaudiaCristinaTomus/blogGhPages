import './App.css';
import Art from './components/Art';
import { Future } from './components/Future';
import Header from './components/Header';
import Free from './components/Free';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Future/>
      <Art/>
      <Free/>
      <Footer/>
    </div>
  );
}

export default App;
