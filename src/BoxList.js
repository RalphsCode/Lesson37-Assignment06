import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [allBoxes, setAllBoxes] = useState([
        { "id": 1, "color":"purple", "width": 100, "height": 100},
        { "id": 2, "color":"red", "width": 50, "height": 50},
        { "id": 3, "color":"yellow", "width": 150, "height": 150}
    ]);

    /** Function to remove a box from the list/array */
    const removeBox = (x) => (
        setAllBoxes(allBoxes.filter((box) => box.id !== x))
    );

    const addBox = ( newBox ) => {			// addBox is passed to child as prop
        setAllBoxes(items => [...items, newBox]);
      };

    /** Function to iterate over the boxes in the array that is stored in state
     * Each box is passed to the Box Component as a prop.
     * The removeBox function is also passed as a prop to the child component.
     * The Box Component returns the formatting
     * for each box in the list of boxes, plus a delete button.
     */
    const displayBoxList = allBoxes.map((box) => (
        <Box			
        box={box}
        remove={removeBox}
        />)
    );

    return (
        <div>
            <NewBoxForm addBox = {addBox} />
            <p> {displayBoxList} </p> 
        </div>
        );

}  // END BoxList()


export default BoxList;