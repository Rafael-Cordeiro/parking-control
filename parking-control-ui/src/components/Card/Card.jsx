import React from "react";
import "./card.css";
import FormDialog from "../Dialog/Dialog";

export default function Card(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickCard = () => {
    setOpen(true)
  }

  return (
	<>
    <FormDialog
      open={open}
      entity={props.entity}
      setOpen={setOpen}
      listCard={props.listCard}
      setListCard={props.setListCard}
    ></FormDialog>
	  <div className="card--container" onClick={() => handleClickCard()}>
      <h1 className="card--title">{props.entity.parkingSpotNumber}</h1>
      <p className="card--field">{props.entity.licensePlateCar}</p>
      <p className="card--field">{props.entity.brandCar}</p>
      <p className="card--field">{props.entity.modelCar}</p>
      <p className="card--field">{props.entity.colorCar}</p>
      <p className="card--field">{props.entity.responsibleName}</p>
      <p className="card--field">{props.entity.apartment}</p>
      <p className="card--field">{props.entity.block}</p>
	  </div>
	</>
  );
}
