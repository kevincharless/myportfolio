import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function useMeasure() {
    const ref = useRef();
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const [ro, setRo] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
    useEffect(() => {
        setRo(() => () => ro?.__proto__?.observe(ref.current))
        setRo(() => ro?.__proto__?.disconnect);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return [{ ref }, bounds]
}
