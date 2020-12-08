import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNum, removeNum } from '../../actions/demoAction';

const DemoRedux = () => {

  const number = useSelector(state => state.demo);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number: { number } </h2>
      <button onClick={()=> dispatch(addNum(2))}>+</button>
      <button onClick={()=> dispatch(removeNum(2))}>-</button>
    </div>
  )
}

export default DemoRedux;