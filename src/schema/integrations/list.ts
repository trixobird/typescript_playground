import {builder} from '../builder.js';
import {LengthError} from '../errors.js';
import {ForbiddenError} from '@pothos/plugin-scope-auth';

builder.queryFields((t) => ({
  integrations: t.withAuth({ authenticated: true }).field({
    type: 'Boolean',
    errors: {
      types: [LengthError, ForbiddenError]
    },
    resolve: async (root, args, ctx, info) => {
      return true;
    },
  }),
}));

