import SchemaBuilder from '@pothos/core';
import ValidationPlugin from '@pothos/plugin-validation';
import ErrorsPlugin from '@pothos/plugin-errors';
// This is the default location for the generator, but this can be
// customized as described above.
// Using a type only import will help avoid issues with undeclared
// exports in esm mode
import SimpleObjectsPlugin from '@pothos/plugin-simple-objects';
import { DateTimeResolver } from 'graphql-scalars';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import RelayPlugin from '@pothos/plugin-relay';
import { GraphQLContext } from '../context.js';
import { GraphQLError } from 'graphql';

interface AuthenticatedContext extends GraphQLContext {
  currentUserId: NonNullable<GraphQLContext['currentUserId']>;
}

export const builder = new SchemaBuilder<{
  Context: GraphQLContext;
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
  AuthScopes: {
    authenticated: boolean;
  };
  AuthContexts: {
    authenticated: AuthenticatedContext;
  };
}>({
  plugins: [ErrorsPlugin, ScopeAuthPlugin, RelayPlugin, SimpleObjectsPlugin, ValidationPlugin],
  errorOptions: {
    defaultTypes: [],
  },
  authScopes: async (context) => ({
    authenticated: !!context.currentUserId,
  }),
  scopeAuthOptions: {
    // Recommended when using subscriptions
    // when this is not set, auth checks are run when event is resolved rather than when the subscription is created
    authorizeOnSubscribe: true,
  },
  relayOptions: {
    // These will become the defaults in the next major version
    clientMutationId: 'omit',
    cursorType: 'ID',
  },
  validationOptions: {
    // optionally customize how errors are formatted
    validationError: (zodError, _args, _context, _info) => {
      // the default behavior is to just throw the zod error directly
      return new GraphQLError(zodError.issues.map((issue) => issue.message).join('\n'));
    },
  },
});

builder.addScalarType('Date', DateTimeResolver, {});
