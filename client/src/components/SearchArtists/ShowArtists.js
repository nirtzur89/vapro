import React from 'react';

const ShowArtists = (props) => {
    console.log("props", props)


    return (
        <div>
            <div>
                {props.data.map(oneArtist => {
                    console.log("u", oneArtist.hashtags)
                    return (
                        <div>
                            <h3>{oneArtist.userName}</h3>
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