import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { PaginatedPublicationResult, Profile, PublicationsDocument } from '../../types/lens';

interface Props {
  profile: Profile
}

const ProfilePublications: FC<Props> = ({ profile }) => {
  const { data, loading, error } = useQuery
  <{publications: PaginatedPublicationResult}>
  ((PublicationsDocument), {
    variables: { 
      request: {
        profileId: profile?.id,
        publicationTypes: ["POST"],
        limit: 10,
        metadata: {
          mainContentFocus: ["TEXT_ONLY"],
        },
      }
     },
  });

  const publications = data?.publications.items
  console.log(publications)

  return (
    <>
      {publications?.map((publication) => (
        <div>
          {publication?.id}
        </div>
      ))}
    </>
  )
}

export default ProfilePublications