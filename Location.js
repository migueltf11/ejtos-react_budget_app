import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    
  return (
   
    <div className='alert alert-success'> Currency {
        <select name="Location" id="Location" class="form-select-sm" style={{ background: "#92E499" }}  onChange={event=>changeLocation(event.target.value)}>
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>        
          <option value="€">€ Europe</option>
          <option value="₹">₹ Ruppee</option>
        </select>	
        }	
      </div>
   
    );
};

export default Location;