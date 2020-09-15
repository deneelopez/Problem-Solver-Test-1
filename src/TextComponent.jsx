import React from 'react';
import TextBox from './TextBox.jsx';

const TextComponent = (props) => {

    return (
        props.someText.map((currentItem, i) => {

                <TextBox 
                    text={props.sometText.currentItem} 
                    func={props.alertWindow}/>  
        })
    )
};

export default TextComponent;