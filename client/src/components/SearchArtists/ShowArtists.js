import React from 'react';

const ShowArtists = (props) => {
console.log("props", props)


    return (
        <div>
      
            {props.data.map(oneArtist => {
                console.log("u",oneArtist.userName)
                return (
                    <div>
                        <h3>{oneArtist.userName}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowArtists;