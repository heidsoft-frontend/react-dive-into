import './App.css';
import StateTutorial from './UseState/StateTutorial';
import StateTutorialV2 from './UseState/StateTutorialV2';
import ReducerTutorial from './ReducerTutorial/ReducerTutorial';
import ReducerTutorialV2 from './ReducerTutorial/ReducerTutorialV2';
import EffectTutorial from './UseEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
function App() {
  return (
    <div className="App">
       {/* <StateTutorial></StateTutorial>
       <StateTutorialV2></StateTutorialV2>
       <ReducerTutorial></ReducerTutorial>
       <ReducerTutorialV2></ReducerTutorialV2>
       <EffectTutorial></EffectTutorial>
       <RefTutorial></RefTutorial> */}
       <LayoutEffectTutorial></LayoutEffectTutorial>
    </div>
  );
}

export default App;
