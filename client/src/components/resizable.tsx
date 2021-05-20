import React, { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.sass';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  // 75% of the initial window width
  const [width, setWidth] = useState(window.innerWidth * 0.75);

  let resizableProps: ResizableBoxProps;

  useEffect(() => {
    let timer: any;

    const listener = () => {
      if (timer) {
        window.clearTimeout(timer);
      }

      // resize it smoother
      timer = window.setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);

        // If 75% of the current window width is less than the width of the element
        // adjust the width of the element to 75% of the window width
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [width]);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      // Take at least 20% of the width and 100% of height
      minConstraints: [innerWidth * 0.4, Infinity],
      // Take as maximum value 75% of the width and 100% of height
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width,
      resizeHandles: ['e'],
      onResizeStop: (_, data) => {
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      // Take at least 100% of the width and 24px of height
      minConstraints: [Infinity, 24],
      // Take as maximum value 100% of the width and 90% of height
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
