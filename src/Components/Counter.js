import {useSelector,useDispatch} from 'react-redux'
import { increse_count,decrese_count} from '../Redux/Slice/countSlice';
function Counter() {
  const count=useSelector(state=>state.count.value)//receive state value
  const dispatch=useDispatch()

  const increseCount=()=>{
    if(count<15){
      dispatch(increse_count({
        count:count+1
      }))
    }
  }

  const decreseCount=()=>{
    if(count>0){
      dispatch(decrese_count({
        count:count-1
      }))
    }
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decreseCount}>Decrease</button>
    </div>
  );
}

export default Counter;
