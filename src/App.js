import './App.css';
import StateTutorial from './UseState/StateTutorial';
import StateTutorialV2 from './UseState/StateTutorialV2';
import ReducerTutorial from './ReducerTutorial/ReducerTutorial';
function App() {
  return (
    <div className="App">
       <StateTutorial></StateTutorial>
       <StateTutorialV2></StateTutorialV2>
       <ReducerTutorial></ReducerTutorial>
    </div>
  );
}

export default App;
