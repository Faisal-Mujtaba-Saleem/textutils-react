import React, { useState } from 'react'

const handleSentenceClick = (Text, setText, showAlert) => {

    let SentenceCased = (text) => {
        text = text.toLowerCase();
        console.log(text);
        text = text.replace(/\s+/g, " ");
        // console.log(text);
        let splitedText = text.split(' ');
        // console.log(splitedText);

        const firstWord_firstLetter = splitedText[0].charAt(0);
        const firstLetterUpperCased = splitedText[0].charAt(0).toUpperCase();
        const firstWordCapitalized = splitedText[0].replace(firstWord_firstLetter, firstLetterUpperCased);
        splitedText.splice(0, 1, firstWordCapitalized);

        splitedText = splitedText.map((word, index, array) => {

            const preWord = index !== 0 ? array[index - 1] : array[index];
            if (preWord[preWord.length - 1] === '.' || preWord[preWord.length - 1] === '?' || preWord[preWord.length - 1] === ':') {
                return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
            } else {
                return word;
            }
        });

        let joinedText = splitedText.join(' ');

        // console.log(splitedText);
        // console.log(joinedText);

        return joinedText;
    }
    SentenceCased = SentenceCased(Text);
    setText(SentenceCased);
    showAlert('Converted to sentence case!', 'success');
}
const handleUpClick = (Text, setText, showAlert) => {

    const UpperCased = Text.toUpperCase();
    setText(UpperCased);
    showAlert('Converted to upper case!', 'success')
}
const handleLowClick = (Text, setText, showAlert) => {

    const LowerCased = Text.toLowerCase();
    setText(LowerCased);
    showAlert('Converted to lower case!', 'success')
}
const handleTitleClick = (Text, setText, showAlert) => {

    let capitalized = (text) => {
        if (text !== '') {

            text = text.toLowerCase();
            let splitted_text = text.split(' ');
            splitted_text = splitted_text.map((element) => {
                const firstICapitalized = element[0].toUpperCase();
                const charAt_1stIndex = element[0]
                return element.replace(charAt_1stIndex, firstICapitalized);
            });
            return splitted_text.join(' ');
        } else {
            return 'no text to capitalize'
        }
    }
    capitalized = capitalized(Text);
    setText(capitalized);
    showAlert('Converted to title case!', 'success')
}
const handleExtraClick = (Text, setText, showAlert) => {

    const extraSpacesRemoved = Text.replace(/ +/g, " ");
    setText(extraSpacesRemoved);
    showAlert('Removed extra spaces!', 'success')
}
const handleCopyClick = (showAlert) => {

    let text = document.getElementById('text-box');
    window.navigator.clipboard.writeText(text.value);
    // console.log(text);
    showAlert('Copied text!', 'success')
}
const handleClearClick = (Text, setText, showAlert) => {

    const Cleared = ''
    setText(Cleared);
    showAlert('Cleared text box!', 'success')
}
export { handleClearClick, handleCopyClick, handleExtraClick, handleLowClick, handleSentenceClick, handleTitleClick, handleUpClick };