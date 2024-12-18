import React, {useState} from 'react';

const BoxList = () => {
    const [allBoxes, setAllBoxes] = useState([{ "id": 1, "color":"purple", "width": 100, "height": 100},
        { "id": 2, "color":"red", "width": 50, "height": 50},
        { "id": 3, "color":"yellow", "width": 150, "height": 150}
    ]);

    const removeItem = (x) => (
        setAllBoxes(allBoxes.filter((box) => box.id !== x))
    )

    return (
        <div>
            <p> BoxList App </p> 
            { allBoxes.map( (box) => (
                <p style={{
                    backgroundColor: box.color, 
                    height: `${box.height}px`, 
                    width: `${box.width}px`, 
                    margin: '5px',
                    }}>Box {box.id} &nbsp;
                    <button onClick={() => removeItem(box.id)}>X</button>
                </p> 
            ))}
            
            
        </div>
    ) 
}

export default BoxList;