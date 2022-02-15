import React, {useState} from "react"
import Axios from "axios"
import './App.css';
import Card from './components/Card'

function App() {
  const [values, setValues] = useState();
  console.log(values)

  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleSubmit = () => {
    Axios.post('http://localhost:9999/api/parking-spot', {
        parkingSpotNumber: values.parkingSpotNumber,
        licensePlateCar: values.licensePlateCar,
        brandCar: values.brandCar,
        modelCar: values.modelCar,
        colorCar: values.colorCar,
        responsibleName: values.responsibleName,
        apartment: values.apartment,
        block: values.block
      }).then((response) => {
        console.log(response.data)
        alert(`${response.status} - Submited!`)
      }).catch(error => {
        alert(`Status ${error.response.status} - ${error.response.data}`)
      })
  }

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Parking Control</h1>
        <input
          className="register--input"
          type="text"
          name="parkingSpotNumber"
          placeholder="Parking Spot Number"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="licensePlateCar"
          placeholder="License Plate Car"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="brandCar"
          placeholder="Brand Car"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="modelCar"
          placeholder="Model Car"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="colorCar"
          placeholder="Color Car"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="responsibleName"
          placeholder="Responsible Name"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="apartment"
          placeholder="Apartment"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="block"
          placeholder="Block"
          onChange={handleChangeValues}
        />
        <button className="register--button" onClick={() => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
}

export default App;
