import React, {useState, useRef} from 'react'

const FocusApp = () => {

    const [text, setText] = useState("");
    const inputRef = useRef();

    const handlefocus = () => {
      const input = inputRef.current
      //console.log(input)
      input.focus();
      //console.log(input.value);
    }

    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          //id='input'
          ref={inputRef}
        />
        <button onClick={handlefocus}>Focus</button>
      </div>
    );
}

export default FocusApp
