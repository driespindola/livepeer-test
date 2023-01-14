import * as Apollo from '@apollo/client';
import { AuthenticateDocument, AuthenticateMutation, AuthenticateMutationVariables, ChallengeDocument, ChallengeQuery, ChallengeQueryVariables, ProfileDocument, ProfileQuery, ProfileQueryVariables, ProfilesDocument, ProfilesQuery, ProfilesQueryVariables, PublicationsDocument, PublicationsQuery, PublicationsQueryVariables, RecommendedProfilesDocument, RecommendedProfilesQuery, RecommendedProfilesQueryVariables, UserProfilesDocument, UserProfilesQuery, UserProfilesQueryVariables } from './lens';

  export function useRecommendedProfilesQuery(
    baseOptions?: Apollo.QueryHookOptions<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useQuery<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>(
      RecommendedProfilesDocument,
      options
    )
  }

  export function useChallengeLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<ChallengeQuery, ChallengeQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options);
  }

  export function useUserProfilesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<UserProfilesQuery, UserProfilesQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useLazyQuery<UserProfilesQuery, UserProfilesQueryVariables>(UserProfilesDocument, options);
  }

  export function useAuthenticateMutation(
    baseOptions?: Apollo.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(
      AuthenticateDocument,
      options
    );
  }

  export function useProfilesQuery(
    baseOptions: Apollo.QueryHookOptions<ProfilesQuery, ProfilesQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, options);
  }

  export function useProfileQuery(
    baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
  }

  export function usePublicationsQuery(
    baseOptions: Apollo.QueryHookOptions<PublicationsQuery, PublicationsQueryVariables>
  ) {
    const options = { ...baseOptions };
    return Apollo.useQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
  }