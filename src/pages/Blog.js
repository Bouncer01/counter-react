import React from 'react';
import { useSelector } from 'react-redux';

function Blog() {
    const CountObj = useSelector(store => store.counterslice?.counter); // Use optional chaining to handle undefined properties
    console.log(CountObj);

    return (
        <div>
            <h1>REDUX</h1>
            {CountObj !== undefined ? ( // Check if CountObj is defined before rendering
                <h1>{CountObj}</h1>
            ) : (
                <p>Counter value not available</p> // Display an error message if CountObj is undefined
            )}
        </div>
    );
}

export default Blog;
