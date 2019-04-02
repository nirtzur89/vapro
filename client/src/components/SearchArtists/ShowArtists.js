import React from 'react';
import { Link } from 'react-router-dom';

const ShowArtists = (props) => {

    return (
        <div>
            <div>
                {props.data.map(oneArtist => {
                    // console.log("u", oneArtist.hashtags)
                    return (
                        <div key={oneArtist._id}>
                            <Link to={`/user/artist/${oneArtist._id}`}>
                                <h3 >{oneArtist.userName}</h3>
                            </Link>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowArtists;