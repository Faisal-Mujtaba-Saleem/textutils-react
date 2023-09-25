import React, { useState } from 'react'
import { handleClearClick, handleCopyClick, handleExtraClick, handleLowClick, handleSentenceClick, handleTitleClick, handleUpClick } from "../custom_modules/TextUtility_Functions.mjs";

export default function TextForm(props) {
    const [Text, setText] = useState('');

    const handle_onChange = (event) => {
        // console.log('onChange Clicked');
        setText(event.target.value)
    }

    const TextWordsCount = () => {
        const filteredSplitedText = Text.split(' ').filter((word, index, array) => {
            const condition = word !== '';
            return condition;
        })
        return filteredSplitedText.length;
    }

    function myStyle() {

        return {
            backgroundColor: props.mode === 'dark' ? 'lightgray' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
        }
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h3>
                        <label htmlFor="text-box" className="form-label">
                            {props.heading}
                        </label>
                    </h3>
                    <textarea className="form-control " id="text-box" rows="8" placeholder='Enter some text here' value={Text} onChange={handle_onChange} style={myStyle()}></textarea>
                </div>
                <button className="btn btn-primary mx-1 " onClick={() => handleSentenceClick(Text, setText, props.showAlert)}>Convert to Sentence Case</button>
                <button className="btn btn-primary mx-1 " onClick={() => handleUpClick(Text, setText, props.showAlert)}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 " onClick={() => handleLowClick(Text, setText, props.showAlert)}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 " onClick={() => handleTitleClick(Text, setText, props.showAlert)}>Convert to Title Case</button>
                <button className="btn btn-primary mx-1 " onClick={() => handleExtraClick(Text, setText, props.showAlert)}>Remove extra spaces</button>
                <div>
                    <button className="btn btn-primary mx-1 my-2 " onClick={() => handleCopyClick(props.showAlert)}>Copy</button>
                    <button className="btn btn-primary mx-1 my-2 " onClick={() => handleClearClick(Text, setText, props.showAlert)}>Clear</button>
                </div>
            </div>

            <div className="container my-3 ">
                <h3>Your Text Analyzation</h3>
                <p>{TextWordsCount()} words, {Text.length} characters and {Text.split(' ').length} spaces.</p>
                {
                    TextWordsCount() !== 0 ?
                        <p>
                            {TextWordsCount()} words per {(0.2 * TextWordsCount()) / 60} Minutes to read.
                        </p> :
                        <p>No words to analyze!</p>
                }
                <h3>Preview</h3>
                <p>
                    {TextWordsCount() !== 0 ?
                        Text :
                        `Enter some text in the textbox above to preview here!`
                    }
                </p>
            </div>
        </>
    )
}
