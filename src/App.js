import './Styles/Index/index.css';

import BkgRectangle from './Assets/Bkg-rectangle.svg';

import TimerSetup from './Body Components/TimerSetup';
import TimerShow from './Body Components/TimerShow';

function App() {
  return (
    <div className="App">
      <div className='background-images'>
        <div className='bkg-circle circle-1'></div>
        <div className='bkg-circle circle-2'></div>
        <img src={BkgRectangle} alt="" className='bottom-line'/>
      </div>

      <div className='timer-container'>
        <TimerSetup/>
        <TimerShow/>

        <p className='credits'>Created by Alex Benta</p>
      </div>
    </div>
  );
}

export default App;
