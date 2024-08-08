
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store'
import { increment, decrement, incrementByAmount } from '../../store/slice/counterSlice';
const Counter = () => {
    //Sử dụng useSelector để lấy dữ liệu từ store và useDispatch để phát hành các action.
    const count = useSelector((state: RootState) => state.counter.value); 
    const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  )
}

export default Counter
