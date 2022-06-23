import './App.css';

import {WeatherView} from './views';

function App() {
  const _props = {
    appContainer: {
      className: "bg-stone-200 h-screen w-full flex flex-column justify-center content-center"
    }
  }
  return (
    <div {..._props.appContainer}>
      <WeatherView/>
    </div>
  );
}

export default App;
