import React, {Fragment } from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <Fragment>
            <div className="pa2 tc">
                 <input className='pa3 ba  b--green bg-lightest-blue' 
                 type='search' 
                 onChange={searchChange} 
                 placeholder='Search the android'
                 
                 />
            </div>
        </Fragment>       
    )
}

export default SearchBox;