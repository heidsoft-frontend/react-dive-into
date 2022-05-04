import './App.css';
import StateTutorial from './UseState/StateTutorial';
import StateTutorialV2 from './UseState/StateTutorialV2';
import ReducerTutorial from './ReducerTutorial/ReducerTutorial';
import ReducerTutorialV2 from './ReducerTutorial/ReducerTutorialV2';
import EffectTutorial from './UseEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import ContextTutorial from './UseContext/ContextTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
function App() {
  return (
    <div className="App">
       {/* <StateTutorial></StateTutorial>
       <StateTutorialV2></StateTutorialV2>
       <ReducerTutorial></ReducerTutorial>
       <ReducerTutorialV2></ReducerTutorialV2>
       <EffectTutorial></EffectTutorial>
       <RefTutorial></RefTutorial>
       <LayoutEffectTutorial></LayoutEffectTutorial>
       <ImperativeHandle></ImperativeHandle>
       <ContextTutorial></ContextTutorial>
        */}
       <MemoTutorial></MemoTutorial>
    </div>
  );
}

export default App;
