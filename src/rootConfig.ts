import { registerAs } from '@nestjs/config';

export default registerAs('rootConfig', () => {
  return {
    dbName: process.env.MYSQL_DB,
    port: parseInt(process.env.APP_PORT, 10),
    password: process.env.MYSQL_ROOT_PASSWORD,
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
  };
});
