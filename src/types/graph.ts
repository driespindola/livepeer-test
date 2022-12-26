import * as Apollo from '@apollo/client';
import { RecommendedProfilesDocument, RecommendedProfilesQuery, RecommendedProfilesQueryVariables } from './lens';

export function useRecommendedProfilesQuery(
    baseOptions?: Apollo.QueryHookOptions<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useQuery<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>(
      RecommendedProfilesDocument,
      options
    )
  }