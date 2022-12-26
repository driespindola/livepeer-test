import React from 'react'
import Video from './Video'
import { ExplorePublicationResult, ExplorePublicationsDocument, Publication } from '../types/lens';
import { useQuery } from '@apollo/client';

const Home = () => {
  const { data, loading, error } = useQuery<{
    explorePublications: ExplorePublicationResult;
  }>(ExplorePublicationsDocument, {
    variables: {
      request: {
        sortCriteria: "CURATED_PROFILES",
        publicationTypes: ["POST"],
        limit: 20,
        metadata: {
          mainContentFocus: ["VIDEO"],
        },
      },
    },
  });
  const publications = data?.explorePublications.items;
  console.log("DATA", data?.explorePublications.items);

  return (
    <div>
      {publications?.map((publication) => (
        <div>
          handle: {publication.profile.handle}
          <Video publication={publication as Publication} />
        </div>
      ))}
    </div>
  )
}

export default Home