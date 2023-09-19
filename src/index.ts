import { createYoga } from 'graphql-yoga';
import { createContext } from './context.js';
import { createServer } from 'node:http'
import schema from './schema/index.js';
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection';

const index = () => {

  const yoga = createYoga({
    schema,
    context: createContext,
  });

  const server = createServer(yoga)

  const port = 4000;
  server.listen(port, () => {
    console.log(`[Server is running on http://localhost:${port}/graphql`);
  });
};

index();
