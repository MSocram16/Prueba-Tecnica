import { useEffect } from 'react';

import './App.css';

import { WeatherView } from './views';

import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  const _props = {
    appContainer: {
      className: "bg-stone-200 min-h-screen w-full flex flex-column justify-center content-center"
    }
  }
  return (
    <Provider store={store}>
      <div {..._props.appContainer}>
        <WeatherView />
      </div>
    </Provider>
  );
}

export default App;
