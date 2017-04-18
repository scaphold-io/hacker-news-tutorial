import getBabelRelayPlugin from 'babel-relay-plugin';

const schema = require('../schema.json');

export default getBabelRelayPlugin(schema.data);
