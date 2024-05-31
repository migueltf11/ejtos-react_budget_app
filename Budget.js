import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, Location } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if(event.target.value < totalExpenses){
      alert('you cannot reduce the budget value lower than the spending');
    }else{
      setNewBudget(event.target.value);
    }    
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {Location} </span>
      <input
        type="number"
        max="2000"
        style={{width: "150px"}}
        step="5"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
