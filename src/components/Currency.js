import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const [name, setName] = useState('');
    const { Currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Currency : {Currency} {name}</span>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                <option value="$Dollar" name="$Dollar">$Dollar</option>
                <option value="£Pound" name="£Pound">£Pound</option>
                <option value="£Pound" name="£Pound">Euro</option>
                <option value="£Pound" name="£Pound">Rupees</option>

                </select>
        </div>
    );
};
export default Currency;
