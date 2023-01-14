import React, { FC } from 'react'
import { Profile } from '../../types/lens'

interface Props {
  profile: Profile
}

const ProfilePage: FC<Props> = ({ profile }) => {
  return (
    <div>
      {profile?.name}
    </div>
  )
}

export default ProfilePage