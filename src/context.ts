import { YogaInitialContext } from 'graphql-yoga';

export type GraphQLContext = {
  currentUserId: undefined | string;
};

export async function createContext(initialContext: YogaInitialContext): Promise<GraphQLContext> {
  return {
    currentUserId: undefined,
  };
}
