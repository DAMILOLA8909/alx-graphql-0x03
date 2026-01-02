// Type declarations to help TypeScript understand Apollo Client v4 exports
declare module '@apollo/client/react' {
  export const ApolloProvider: any;
  export const useQuery: any;
  export const useMutation: any;
  export const useSubscription: any;
  export const gql: any;
}

declare module '@apollo/client/core' {
  export const ApolloClient: any;
  export const InMemoryCache: any;
  export const HttpLink: any;
  export const gql: any;
}