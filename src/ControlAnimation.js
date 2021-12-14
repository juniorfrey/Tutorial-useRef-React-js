import React, {useState, useEffect, useRef} from 'react'

const ControlAnimation = () => {

    const [background, setbackground] = useState("yellow");
    const divRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current;
            const { y } = div.getBoundingClientRect();
            const backgroundColor = y <= 0 ? 'orange' : 'yellow';
            setbackground(backgroundColor);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [])

    return (
      <div>
        <div
          style={{ height: "180vh", backgroundColor: background }}
          ref={divRef}
        >
          <h1>Scroll</h1>
        </div>
      </div>
    );
}

export default ControlAnimation
