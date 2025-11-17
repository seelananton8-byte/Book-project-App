import { useReducer } from 'react';
import Button from '../components/Button.jsx';
import Panel from '../components/panel.jsx'

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {

  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    default:
        return state;
    }
};


function CounterPage(initialValue) {
    // const [count, setCount] = useState(initialValue)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer produce((reducer), {
      count: initialValue,
      valueToAdd: 0,
 });
 console.log(state)

    const increment = () => {
     dispatch({
      type: INCREMENT_COUNT,
     })
    };
    const decrement = () => {
      dispatch({
        type: DECREMENT_COUNT
      })
    };

    const handleClick= (event) => {
      const value = parseInt(event.target.value) || 0;

      dispatch ({
        type: SET_VALUE_TO_ADD,
        payload: value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();

      dispatch({
        type: ADD_VALUE_TO_COUNT,
      });
    };
  
  return(
    <Panel className="m-3">
        <h1 Count is >{state.count}</h1>
        <div className='fex flex-row'>
        <Button onClick={increment}> Increment </Button>
         <Button onClick={decrement}> Decrement </Button>
         </div>

         <form onSubmit={handleSubmit}> 
          <label>Add a lot!</label>
          <input 
          value={state.valueToAdd || '' }
          onChange={handleClick}
          type='number' 
          className='p-1 m-3 bg-gray-50 border border-gray-300' 
          />
          <Button>Add it!</Button>
         </form>
    </Panel>
  )
}
export default CounterPage; 