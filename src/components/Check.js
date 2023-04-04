// import { Link } from 'react-router-dom';
// import { useState } from 'react'

const Check = () => {
  // localStorage.clear()
  let data2 = JSON.parse(localStorage.getItem('tehkikat'))
  let data1 = JSON.parse(localStorage.getItem('entry'))
  console.log(data1)
  console.log(data2)

  return (
       <div>
        Hello
       </div>
  );
};

export default Check;
