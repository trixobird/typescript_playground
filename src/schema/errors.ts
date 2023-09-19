import {builder} from './builder.js';
import {ForbiddenError} from '@pothos/plugin-scope-auth';
// import {PothosError, PothosValidationError} from '@pothos/core';

const ErrorInterface = builder.interfaceRef<Error>('Error').implement({
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.objectType(Error, {
  name: 'BaseError',
  interfaces: [ErrorInterface],
});

builder.objectType(ForbiddenError, {
  name: 'AuthForbiddenError',
  interfaces: [ErrorInterface],
  fields: (t) => ({
  })
});

export class LengthError extends Error {
  minLength: number;

  constructor(minLength: number) {
    super(`string length should be at least ${minLength}`);

    this.minLength = minLength;
    this.name = 'LengthError';
  }
}

builder.objectType(LengthError, {
  name: 'LengthError',
  interfaces: [ErrorInterface],
  fields: (t) => ({
    minLength: t.exposeInt('minLength'),
  }),
});
