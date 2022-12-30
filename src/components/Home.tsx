import React from 'react'
import Video from './Video'
import { ExplorePublicationResult, ExplorePublicationsDocument, Publication } from '../types/lens';
import { useQuery } from '@apollo/client';
import { Box, Container } from '@mui/material';
import StreamButton from './Stream';

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
    <Container>
      <StreamButton />
      {publications?.map((publication) => (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: 'auto',
          textAlign: 'center',
          padding: 3
        }}>
          handle: {publication.profile.handle}
          <Video publication={publication as Publication} />
        </Box>
      ))}
    </Container>
  )
}

export default Home