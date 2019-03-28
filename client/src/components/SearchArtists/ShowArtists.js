import React from 'react';

const ShowArtists = (props) => {
    // console.log("props", props)


    return (
        <div>
            <div>
                {props.data.map((oneArtist, index) => {
                    // console.log("u", oneArtist.hashtags)
                    return (
                        <div key={index}>
                            <h3 >{oneArtist.userName}</h3>
                        </div>
                    )
                })}
            </div>
            {/* <div>
                {props.data.map(oneArtist => {
                    return
                })}
            </div> */}

        </div>
    )
}

export default ShowArtists;