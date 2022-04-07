import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();
  return (
    <>
    <h1>Our Counter App</h1>
    {isLogged ? <p>Counter {counter}</p> : <p>You are not logged In</p>}
    <button onClick={() => dispatch(increment(5))}>+</button>
    <br />
    <button onClick={() => dispatch(decrement())}>-</button>
  </>
  );
}

export default App;
