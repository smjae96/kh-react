import React, {useContext} from 'react';
import { ResultContext } from './hook/UseContextTest';

const ResultArea = (props) => {
    const style = {
        height: '300px',
        border: '1px solid blue'
    }

    const hobby = useContext(ResultContext);
    return (
        <div style={style}>
            {/* <p>{props.hobby}</p> */}
            {hobby}
        </div>
    );
};

export default ResultArea;