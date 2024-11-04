import './App.css';
import Header from './components/Header';
import LearningCont from './components/LearningCont';
import bell from './assets/bell.svg'
import { useState } from 'react';
function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const clickHandler = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="App">
      <Header onMenuClick={clickHandler} selectedOption={selectedOption}/>
      {selectedOption === 'Upskill' && <LearningCont />}
      {selectedOption !== 'Upskill' && <p className='extraCont'>{selectedOption} Content here.</p>}
      <div className="extramenu">
        <img src={bell} alt="icon" className="icon" />
        <div className='profile'></div>
      </div>
    </div>
  );
}

export default App;
