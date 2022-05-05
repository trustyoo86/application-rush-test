const dotenv = require('dotenv');

const stage = process.env.STAGE || 'local';

module.exports = async () => {
  const envVars = dotenv.config({ path: `./envs/.env.${stage}` }).parsed;
  return envVars;
};
