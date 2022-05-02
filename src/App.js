import './App.css';
import StateTutorial from './UseState/StateTutorial';
import StateTutorialV2 from './UseState/StateTutorialV2';
import ReducerTutorial from './ReducerTutorial/ReducerTutorial';
import ReducerTutorialV2 from './ReducerTutorial/ReducerTutorialV2';
function App() {
  return (
    <div className="App">
       <StateTutorial></StateTutorial>
       <StateTutorialV2></StateTutorialV2>
       <ReducerTutorial></ReducerTutorial>
       <ReducerTutorialV2></ReducerTutorialV2>
    </div>
  );
}

export default App;
