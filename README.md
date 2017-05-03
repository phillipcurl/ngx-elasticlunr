# ngx-elasticlunr
[![Build Status](https://travis-ci.org/phillipcurl/ngx-elasticlunr.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-elasticlunr)
[![codecov](https://codecov.io/gh/phillipcurl/ngx-elasticlunr/branch/master/graph/badge.svg)](https://codecov.io/gh/phillipcurl/ngx-elasticlunr)
[![npm version](https://badge.fury.io/js/ngx-elasticlunr.svg)](http://badge.fury.io/js/ngx-elasticlunr)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-elasticlunr/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-elasticlunr?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-elasticlunr.svg)](https://github.com/phillipcurl/ngx-elasticlunr/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-elasticlunr.svg)](https://github.com/phillipcurl/ngx-elasticlunr/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-elasticlunr/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-elasticlunr/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

A wrapper around Elasticlunr.js for easy use in Angular apps.

## Installation

Install through npm:
```
npm install --save ngx-elasticlunr
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxElasticlunrModule } from 'ngx-elasticlunr';

@NgModule({
  imports: [
    NgxElasticlunrModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-elasticlunr/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-elasticlunr/bundles/ngx-elasticlunr.umd.js"></script>
<script>
    // everything is exported ngxElasticlunr namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://phillipcurl.github.io/ngx-elasticlunr/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
