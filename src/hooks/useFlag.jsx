import { useState } from 'react';

const UseFlag = () => {
    const [flag, setFlag] = useState(false);

    const toggleFlag = () => {
        setFlag(prev => !prev)
    }

    return {
        flag,
        toggleFlag
    }
}

export default UseFlag;
