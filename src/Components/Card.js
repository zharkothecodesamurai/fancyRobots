import React,{ Fragment } from "react";
 

const Card=({name, email, id})=>{
    return(
        <Fragment >
        <div className=" tc code bg-lightest-blue grow br2 dib pa3 ma2 bw2 shadow-5" >
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p> {email} </p>
            </div>
        </div>
        </Fragment>
    )
}

export default Card;