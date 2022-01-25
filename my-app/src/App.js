import './App.css';
import { store } from './actions/store';
import {Provider} from 'react-redux'
import Profiles from './components/Profiles';

function App() {
  return (
    <Provider store={store}>
      <Profiles />
    </Provider>
  );
}

export default App;
