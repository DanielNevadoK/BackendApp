
import React, { useState } from 'react'

const Form = (props) => {
  

  return (
    <div>
      <form action="">
        <input type="text" onChange={props.onSearch} defaultValue={null}/>
        <select name="" id="TypeSelector" value={props.selectedType} onChange={props.onTypeChange}>
          <option value="All">All</option>
          <option value="Movie">Movie</option>
          <option value="Game">Game</option>
          <option value="Series">Series</option>
        </select>
      </form>
    </div>
  )
}

export default Form
