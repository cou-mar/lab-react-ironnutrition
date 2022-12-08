import './App.css';
import foodData from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row,Input } from 'antd';
// import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodData);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const updatedName = (event) => {
    setName(event.target.value);
  };
  const updatedImage = (event) => {
    setImage(event.target.value);
  };
  const updatedCalories = (event) => {
    setCalories(event.target.value);
  };
  const updatedServings = (event) => {
    setServings(event.target.value);
  };

  const submitFunction = (event) =>{
    event.preventDefault();
    const copyFoodArr = [...foods];
    copyFoodArr.push({name, image, calories, servings});
    setFoods(copyFoodArr); //setting the value of the old arr into the new copy
    setName('');
    setImage('');
    setCalories(0);
    setServings(0); //set values of the form to zero after adding
  }

  return (
    <div>
      <div className='formStyle'>
        <AddFoodForm
          name={name}
          image={image}
          calories={calories}
          servings={servings}
          updatedName={updatedName}
          updatedImage={updatedImage}
          updatedCalories={updatedCalories}
          updatedServings={updatedServings}

          submit={submitFunction}
          // search={searchFunction}
        />

      </div>

      {/* <div className='searchBar'>
        <Search searchFunction={searchFunction}/>
      </div> */}
      
  <div className='searchBar'>
    <label>Search</label>
    <Input
      onChange= {(event) => {
        const newList = foodData.filter(singleFood => {
            return singleFood.name.toLowerCase().includes(event.target.value.toLowerCase());
          })
        setFoods(newList);
      }}
    />
  </div>

      <h1>Food List</h1>

      <Row>
        {foods.map((element) => {
          return (
            <div>
              <FoodBox food={element} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;