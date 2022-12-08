import { Card, Col, Button, Row } from 'antd';
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {    

    return (
      <form onSubmit={
        props.submit //aka submitFunction
      }>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={props.name} type="text" onChange={props.updatedName} />
  
        <label>Image</label>
        <Input value={props.image} type="text" onChange={props.updatedImage} />
  
        <label>Calories</label>
        <Input value={props.calories} type="number" onChange={props.updatedCalories} />
  
        <label>Servings</label>
        <Input value={props.servings} type="number" onChange={props.updatedServings} />
  
        <button type="submit">Create</button>
      </form>
    );
  }

export default AddFoodForm;