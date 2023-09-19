import type { CodegenConfig } from '@graphql-codegen/cli';
import { printSchema } from 'graphql';
import schema from './index.js';

const config: CodegenConfig = {
  schema: printSchema(schema),
  emitLegacyCommonJSImports: false,
  generates: {
    './src/schema/generated/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
  config: {
    scalars: {
      Date: 'Date',
      UUID: 'string',
    },
  },
};
export default config;
