import React, { useState } from 'react'

export default function About(props) {
    // const [displayModeStyle, setDisplayModeStyle] = useState({
    //     backgroundColor: white,
    //     color: 'black'
    // })
    let displayModeStyle = {
        backgroundColor: document.body.style.backgroundColor,
        color: props.mode === 'dark' ? 'white' : 'black',
    }

    return (
        <div className='container' style={displayModeStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" style={displayModeStyle}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={displayModeStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={displayModeStyle}>
                        <div className="accordion-body">
                            Welcome to our app, where text analysis meets simplicity. Whether you're a writer, a student, or simply curious about the power of words, our platform is designed to help you dissect and understand any text you throw at it. From sentiment analysis to keyword extraction, we provide the tools to unravel the secrets hidden within your text. So, start exploring, and let the words speak for themselves.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={displayModeStyle}>
                    <h2 className="accordion-header" style={displayModeStyle}>
                        <button className="accordion-button collapsed" type="button" style={displayModeStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={displayModeStyle}>
                        <div className="accordion-body">
                            Our mission is to make text analysis accessible to all. Our app is not just user-friendly; it's also completely free to use. We believe that everyone should have the power to explore, understand, and harness the potential of their written words, without any cost barriers. So, dive in and experience the magic of text analysis without breaking the bank.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={displayModeStyle}>
                    <h2 className="accordion-header" style={displayModeStyle}>
                        <button className="accordion-button collapsed" type="button" style={displayModeStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={displayModeStyle}>
                        <div className="accordion-body">
                            Our text analysis app is designed with your convenience in mind. It's fully browser-compatible, which means you can access and use it seamlessly on any device, whether you prefer to work on your desktop, laptop, tablet, or smartphone. No downloads, no installations—just open your browser, and you're ready to analyze text effortlessly. Embrace the freedom to explore and understand your content wherever you are.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
