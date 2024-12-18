import React, {useState} from 'react';

const Box = ({box, remove}) => (
        <p style={{
            backgroundColor: box.color, 
            height: `${box.height}px`, 
            width: `${box.width}px`, 
            margin: '5px',
            }}>Box {box.id} &nbsp;
            <button onClick={() => remove(box.id)}>X</button>
        </p> 
    );


export default Box;