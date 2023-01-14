import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { PaginatedPublicationResult, Profile, PublicationsDocument } from '../../types/lens';

interface Props {
  profile: Profile
}

const ProfilePublications: FC<Props> = ({ profile }) => {
  const router = useRouter();
  const { id } = router.query

  const { data, loading, error } = useQuery
  <{publications: PaginatedPublicationResult}>
  ((PublicationsDocument), {
    variables: { 
      request: {
        profileId: profile?.id,
        publicationTypes: ["POST"],
        limit: 10,
      }
    },
  });

  const publications = data?.publications.items;
  console.log("DATA", data?.publications?.items);

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