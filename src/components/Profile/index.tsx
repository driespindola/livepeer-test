import { useRouter } from 'next/router';
import React from 'react'
import formatHandle from '../../lib/formatHandle';
import { useAppStore } from '../../store/app';
import { useProfileQuery, useProfilesQuery } from '../../types/graph';
import { Profile } from '../../types/lens';
import ProfilePage from './ProfilePage';
import ProfilePublications from './ProfilePublications';

const Profile = () => {
    const router = useRouter();

    const { id } = router.query

    const { data } = useProfileQuery({
        variables: { request: { profileId: id }},
    });

    const profile = data?.profile;

  return (
    <div>
      <ProfilePage profile={profile as Profile} />
      <ProfilePublications profile={profile as Profile} />
    </div>
  )
}

export default Profile