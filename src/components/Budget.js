import React, {useState } from 'react';
//import { AppContext } from '../context/AppContext';
const Budget = () => {
   // const { budget } = useContext(AppContext);
   const [budget1, setBudget] = useState('20000');
   if(budget1 < 20000) {
    alert("The value cannot exceed remaining funds  £"+ 20000);
    setBudget("");
    return;
}
   
  
    return (
         <div className='alert alert-secondary'>
             Budget $:<input
    required='required'
    type='number'
    id='budget'
    value={budget1}
    style={{ marginLeft: '2rem' , size: 10}}
    onChange={(event) => setBudget(event.target.value)}>
    </input>
         </div>
      
    );
   
};
export default Budget;
