import { builder } from './builder.js';

import './integrations/list.js';

builder.queryType({
  fields: (_t) => ({}),
});

// builder.mutationType({
//   fields: (_t) => ({}),
// });

// builder.subscriptionType({
//   fields: (_t) => ({}),
// });

export default builder.toSchema();
