import React, {useState, useRef} from 'react'

const CopyApp = () => {

    const [text, setText] = useState("Hola");
    const [isCopied, setIsCopied] = useState(false);
    const inputRef = useRef();

    const handleCopy = () => {
        const input = inputRef.current;
        input.select();
        document.execCommand('copy');

        setIsCopied(true);
        setTimeout( () => setIsCopied(false), 2000 );
    }

    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          ref={inputRef}
        />
        <button onClick={handleCopy}>Copy</button>
        { isCopied && <h1>Copiado</h1> }
      </div>
    );
}

export default CopyApp
