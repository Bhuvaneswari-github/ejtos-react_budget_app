import React from 'react';
import Remaining from './components/Remaining';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */
                                    // Budget component
                                    <div className='col-sm'>
                                    <Budget />
                                </div>}        

                        {/* Add Remaining component here under */
                                     //Remaining component
                                     <div className='col-sm'>
                                     <Remaining />
                                 </div>}        

                        {/* Add ExpenseTotal component here under */
                                     //ExpenseTotal component
                                     <div className='col-sm'>
                                     <ExpenseTotal />
                                 </div>}        
                                     {/* Add AllocationForm component here under */
                    <div className='col-sm'>
                    <Currency />
                </div>
                 } 
                        {/* Add ExpenseList component here under */
                     <div className='col-sm'>
                     <ExpenseList />
                 </div>}         

                        {/* Add ExpenseItem component here under */
                     <div className='col-sm'>
                     <ExpenseItem />
                 </div>}        

                        {/* Add AllocationForm component here under */
                     <div className='col-sm'>
                     <AllocationForm />
                 </div>}
                      

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
