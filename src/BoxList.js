import React, {useState} from 'react';
import Box from './Box';

const BoxList = () => {
    const [allBoxes, setAllBoxes] = useState([
        { "id": 1, "color":"purple", "width": 100, "height": 100},
        { "id": 2, "color":"red", "width": 50, "height": 50},
        { "id": 3, "color":"yellow", "width": 150, "height": 150}
    ]);

    const removeItem = (x) => (
        setAllBoxes(allBoxes.filter((box) => box.id !== x))
    )

    const displayBoxList = allBoxes.map((box) => (
        <Box			
          box={box}
          remove={removeItem}
        />)
    );

    return (
        <div>
            <p> {displayBoxList} </p> 
  </div>
  )
}



export default BoxList;