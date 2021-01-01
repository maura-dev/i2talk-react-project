import React from 'react';
import { unstable_concurrentAct } from 'react-dom/test-utils';
import { DateSchema } from 'yup';
import { date } from 'yup/lib/locale';

const Exercise = () => {
  let weekday = ["Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"]
  // [new Date().getDay()];

  return (
    <div>
      <h4>Today is {weekday[new Date().getDay()]} </h4>
      <p>{new Date().getDay()}</p>
      <p>{new Date().getMonth()+1}</p>
      <p>{new Date().getHours()}</p>
    </div>

  )
}

export default Exercise;