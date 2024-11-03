import './App.css';
import Header from './components/Header';
import LearningCont from './components/LearningCont';
import bell from './assets/bell.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <LearningCont/>
      <div className="extramenu">
        <img src={bell} alt="icon" className="icon" />
        <div className='profile'></div>
      </div>
    </div>
  );
}

export default App;
