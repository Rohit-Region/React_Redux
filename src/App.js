import logo from './logo.svg';
import './App.css';
import Customer_Add from './Customer_Add';
import { Provider } from 'react-redux';
import { store } from './store';
import Customer_List from './Customer_List';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div> CUTOMER PAGE : </div>
        <Customer_Add/>
        <Customer_List/>
      </div>
     </Provider> 
  );
}

export default App;
