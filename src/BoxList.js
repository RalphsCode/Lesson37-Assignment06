import React, {useState} from 'react';

const BoxList = () => {
    const [allBoxes, setAllBoxes] = useState([{"color":"grey", "width": 100, "height": 100}]);
    return (
        <div>
            <p> BoxList App </p>
            <p style={{backgroundColor: allBoxes[0].color}}> allBoxes, color: {allBoxes[0].color} </p>
        </div>
    ) 
}

export default BoxList;