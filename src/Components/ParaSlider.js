import React from 'react';

const ParaSlider = () => {
    const paras = [
        {
            para:"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.",
            author: "Asim"},
        {
            para:"Tag in HTML defines a paragraph. These have both opening and closing tag. So anything mentioned within",
            author: "Asim2"},
        {
            para:"Is treated as a paragraph. Most browsers read a line as a paragraph even if we don’t use the closing tag, but this may raise unexpected results. So, it is both a good convention, and we must use the closing tag.",
            author: "Asim3"
        }
    ];
    

    const delay = 3500;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === paras.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return (
        <div id="testimonials" className="slideshow">
        <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {paras.map((para, index) => (
                <div
                className="slide"
                key={index}>
                    <p>{para.para}</p>
                    <h5>{para.author}</h5>
                </div>
            ))}
        </div>

        <div className="slideshowDots">
            {paras.map((_, idx) => (
            <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                setIndex(idx);
                }}></div>
            ))}
        </div>
        </div>
    );
}

export default ParaSlider;