import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRec = () => {
    const commands = [
        {
            command: 'reset',
            callback: () => resetTranscript()
        },
        {
            command: 'shut up',
            callback: () => setMessage('I wasn\'t talking.')
        },
        {
            command: 'Hello',
            callback: () => setMessage('Hi there!')
        },
    ]

    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
    } = useSpeechRecognition();

    const [message, setMessage] = useState("")

    useEffect(() => {
        if (finalTranscript !== '') {
            console.log('Got final result:', finalTranscript);
        }
    }, [interimTranscript, finalTranscript]);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }
   
    if(listening) {
        setTimeout(() => {
            eval(transcript)
    
        },2000)
    }

    return (
        <div>
            <div>
                <span>
                    listening:
                    {' '}
                    {listening ? 'on' : 'off'}
                </span>
                <div>
                    <button type="button" onClick={resetTranscript}>Reset</button>
                    <button type="button" onClick={() => SpeechRecognition.startListening({language:"en-US",continuous:true})}>Listen</button>
                    <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
                </div>
            </div>
            <div>
                <span>{transcript}</span>
            </div>
        </div>
    );
}

export default SpeechRec;