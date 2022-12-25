import { logger } from '../config/logger';

export const message = (): void => {
  logger.info('A message');
};
