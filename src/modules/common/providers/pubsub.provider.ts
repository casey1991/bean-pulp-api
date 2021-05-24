import { PubSub } from 'apollo-server-express';

export const pubSubFactory = {
  provide: 'PUB_SUB',
  useFactory: () => {
    return new PubSub();
  },
  inject: [],
};
