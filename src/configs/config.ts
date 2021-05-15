import { Config } from './config.interface';

const config: Config = {
  security: {
    expiresIn: '15m',
  },
};

export default (): Config => config;
