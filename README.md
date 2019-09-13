![Moleculer logo](http://moleculer.services/images/banner.png)

[![Build Status](https://travis-ci.org/olivmonnier/moleculer-pdf.svg?branch=master)](https://travis-ci.org/olivmonnier/moleculer-pdf)
[![Coverage Status](https://coveralls.io/repos/github/olivmonnier/moleculer-pdf/badge.svg?branch=master)](https://coveralls.io/github/olivmonnier/moleculer-pdf?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/<----hash----->)](https://www.codacy.com/app/<---username---->/moleculer-pdf?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=olivmonnier/moleculer-pdf&amp;utm_campaign=Badge_Grade)
[![Code Climate](https://codeclimate.com/github/olivmonnier/moleculer-pdf/badges/gpa.svg)](https://codeclimate.com/github/olivmonnier/moleculer-pdf)
[![David](https://img.shields.io/david/olivmonnier/moleculer-pdf.svg)](https://david-dm.org/olivmonnier/moleculer-pdf)
[![Known Vulnerabilities](https://snyk.io/test/github/olivmonnier/moleculer-pdf/badge.svg)](https://snyk.io/test/github/olivmonnier/moleculer-pdf)
[![Join the chat at https://gitter.im/moleculerjs/moleculer](https://badges.gitter.im/moleculerjs/moleculer.svg)](https://gitter.im/moleculerjs/moleculer?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# moleculer-pdf [![NPM version](https://img.shields.io/npm/v/moleculer-pdf.svg)](https://www.npmjs.com/package/moleculer-pdf)

Moleculer service to generate PDF

## Features

## Install
```
npm install moleculer-pdf --save
```

## Usage

```js
'use strict';

let { ServiceBroker } = require("moleculer");
let PDFService = require("../../index");
const { promisify } = require("util");
const { writeFile } = require("fs");
const writeFileAsync = promisify(writeFile);

// Create broker
let broker = new ServiceBroker({
  logger: console
});

// Load my service
broker.createService(PDFService);

// Start server
broker.start().then(() => {
  // Call action
  broker
    .call("pdf.transform", { html: "<h1>John Doe</h1>" })
    .then(buff => writeFileAsync("./pdf.pdf", buff))
    .catch(broker.logger.error);
});
```

# Settings

| Property        | Type      | Default                | Description |
| --------------- | --------- | ---------------------- | ----------- |
| `puppeteerArgs` | `Object`  | `{ headless: true }`   | Set of configurable options to set on the browser |
| `options`       | `Object`  | `{ format: 'letter' }` | Set of configurable options to set pdf document   |
| `remoteContent` | `Boolean` | `true`                 | Content to load on webpage like                   |

# Test
```
$ npm test
```

In development with watching

```
$ npm run ci
```

# Contribution
Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

# License
The project is available under the [MIT license](https://tldrlegal.com/license/mit-license).

# Contact
Copyright (c) 2019 moleculer-pdf

[![@icebob](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@icebob](https://img.shields.io/badge/twitter-Icebobcsi-blue.svg)](https://twitter.com/Icebobcsi)