import React, {useState} from 'react';

const Box = ({box, remove}) => (
        <span style={{
            backgroundColor: box.color, 
            height: `${box.height}px`, 
            width: `${box.width}px`, 
            margin: '5px',
            }}>
            <button onClick={() => remove(box.id)}>X</button>
        </span> 
    );

export default Box;