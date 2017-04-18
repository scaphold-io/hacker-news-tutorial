#!/usr/bin/env babel-node --optional es7.asyncFunctions

import fs from 'fs';
import path from 'path';
import { introspectionQuery } from 'graphql/utilities'
import request from 'sync-request'
import config from '../config'

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  var result = await request('POST', config.scapholdUrl, { qs: { query: introspectionQuery } });
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../schema.json'),
      result.body
    );
  }
})();
