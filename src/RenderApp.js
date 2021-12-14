import React, {useState, useRef, useEffect} from 'react'

const RenderApp = () => {

    const [text, setText] = useState('');
    const renderRef = useRef(1); // # render1 ref=1


    useEffect( () => {
       renderRef.current++;

        
    })

    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1>Render: {renderRef.current}</h1>
      </div>
    );
}

export default RenderApp
