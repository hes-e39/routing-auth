import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useUrlStateParam = (name, initialValue) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get(name) ?? initialValue);

    useEffect(() => {
        searchParams.set(name, value);
        setSearchParams(searchParams);
    }, [value]);

    return [value, setValue];
};

const Size = () => {
    const [width, setWidth] = useUrlStateParam('w', 100);
    const [height, setHeight] = useUrlStateParam('h', 100);

    return (
        <div>
            Width: {width}, Height: {height}
            <button onClick={() => setWidth(Number.parseInt(width) + 10)}>Increment Width</button>
            <button onClick={() => setHeight(Number.parseInt(height) + 10)}>Increment Height</button>
            <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor: 'red' }} />
        </div>
    );
};

export default Size;
