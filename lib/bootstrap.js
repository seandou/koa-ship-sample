'use strict';

import path from 'path';
import fs from 'fs';
import createApp from 'koa-ship';

module.exports = createApp(path.dirname(__dirname));
