import React from 'react'

import LinkButtonArtistSignup from './LinkButtonArtistSignup'
import LinkButtonMemberSignup from './LinkButtonMemberSignup'

const SignupButtons = () => {

    return (
        <div>
            <LinkButtonMemberSignup to='/memberSignup' />
            <LinkButtonArtistSignup to='/artistSignup' />
        </div>

    )
}

export default SignupButtons;