import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios"
import produce from "immer";

export default function FormDialog(props) {

  const [editValues, setEditValues] = useState(props.entity)
  // const [editValues, setEditValues] = useState({
  //   id: props.id,
  //   parkingSpotNumber: props.entity.parkingSpotNumber,
  //   licensePlateCar: props.entity.licensePlateCar,
  //   brandCar: props.entity.brandCar,
  //   modelCar: props.entity.modelCar,
  //   colorCar: props.entity.colorCar,
  //   responsibleName: props.entity.responsibleName,
  //   apartment: props.entity.apartment,
  //   block: props.entity.block,
  // });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEdit = () => {
    Axios.put(`http://localhost:9999/api/parking-spot/${editValues.id}`, {
      parkingSpotNumber: editValues.parkingSpotNumber,
      licensePlateCar: editValues.licensePlateCar,
      brandCar: editValues.brandCar,
      modelCar: editValues.modelCar,
      colorCar: editValues.colorCar,
      responsibleName: editValues.responsibleName,
      apartment: editValues.apartment,
      block: editValues.block
    }).then((response) => {
      const { data }  = response
      var list = props.listCard.slice()
      const idx = props.listCard.findIndex(item => item.id === data.id)
      list[idx] = data
      props.setListCard(list)
      console.log(data)
      alert(`${response.status} - Updated!`)
    }).catch(error => {
      alert(`Status ${error.response.status} - ${error.response.data}`)
    }).finally(() => {
      handleClose()
    })
  }

  const handleDelete = () => {
    Axios.delete(`http://localhost:9999/api/parking-spot/${editValues.id}`)
    .then((response) => {
      props.setListCard(props.listCard.filter(item => item.id !== props.entity.id))
      alert(`${response.status} - Deleted!`)
    }).catch(error => {
      alert(`Status ${error.response.status} - ${error.response.data}`)
    }).finally(() => {
      handleClose()
    })
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit</DialogTitle>
      <DialogContent>
        <TextField
          disabled
          margin="dense"
          id="id"
          label="id"
          defaultValue={props.id}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="parkingSpotNumber"
          label="Parking Spot Number"
          defaultValue={props.entity.parkingSpotNumber}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="licensePlateCar"
          label="License Plate Car"
          defaultValue={props.entity.licensePlateCar}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="brandCar"
          label="Brand Car"
          defaultValue={props.entity.brandCar}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="modelCar"
          label="Model Car"
          defaultValue={props.entity.modelCar}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="colorCar"
          label="Color Car"
          defaultValue={props.entity.colorCar}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="responsibleName"
          label="Responsible Name"
          defaultValue={props.entity.responsibleName}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="apartment"
          label="Apartment"
          defaultValue={props.entity.apartment}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="block"
          label="Block"
          defaultValue={props.entity.block}
          type="text"
          onChange={handleChangeValues}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={() => handleDelete()}>
          Delete
        </Button>
        <Button color="primary" onClick={() => handleEdit()}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}
