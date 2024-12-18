import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ( ({addBox}) => {
    const initialState = {color: "select", width: "100", height: "100"};

    // Create a state to hold the data entered in the form fields
    const [formData, setFormData] = useState(initialState);

    // function to handle when the whole form is returned/submitted
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Create the updated formData with a new ID
        const newFormData = { ...formData, id: uuid() };
        console.log("formData just prior to sending to addBox func:", newFormData);
        addBox(newFormData);           // use the function passed in by props
        setFormData(initialState);  // reset the form
    }  // END handleSubmit()

    const colorOptions = [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'grey', label: 'Grey' },
        { value: 'black', label: 'Black' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'purple', label: 'Purple' },
        { value: 'orange', label: 'Orange' },
      ];

      /** function to receive the user input as they type 
       * and store it in formData state.
       * Can accept any number of fields */ 
      const handleChange = (evt) => {
        const {name, value } = evt.target;
        setFormData(fData => ({
            ...fData, [name]: value}));
        console.log("In handleChange. formData:", formData);
        };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorSelect">Choose a Color:&nbsp;</label>
            <select 
                id="colorSelect" 
                name="color"
                placeholder={formData.color}
                value={formData.color} 
                onChange={handleChange}
            >
                {colorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select><br />

            <label htmlFor='width'>Width:&nbsp;</label>
            <input type='number'
            id='width'
            name='width'
            placeholder={formData.width}
            value={formData.width}
            onChange={handleChange} 
            /><br />

            <label htmlFor='height'>Height:&nbsp;</label>
            <input type='number'
            id='height'
            name='height'
            placeholder={formData.height}
            value={formData.height}
            onChange={handleChange} 
            /><br />

            <button type="submit">Submit</button>
        </form>
    )
});

export default NewBoxForm;