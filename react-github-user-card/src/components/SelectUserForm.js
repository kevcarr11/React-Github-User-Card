import React from 'react'

function SelectUserForm(props) {
  return (
    <div>
      <label><h4>Select a Lambda Member</h4></label>
        <select value={props.userName} onChange={props.handleChange}>
            <option value="" selected="selected" >Choose here</option>
            <option value="kevcarr11">Kevin</option>
            <option value="bigknell">Josh</option>
            <option value="tetondan">Dan Frehner</option>
            <option value="dustinmyers">Dustin</option> 
            <option value="justsml">Dan Levy</option> 
            <option value="luishrd">Luis</option> 
            <option value="LaikaFusion">Andrew McLaughlin</option> 
            <option value="cladams0203">Chris Adams</option> 
            <option value="JacobWilliams90">Jacob Williams</option> 
          </select>
        
    </div>
  )
}

export default SelectUserForm
