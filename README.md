# version-selector-type

> Returns the type and normalized version of a version selector

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/version-selector-type.svg)](https://www.npmjs.com/package/version-selector-type) [![Build Status](https://img.shields.io/travis/pnpm/version-selector-type/master.svg)](https://travis-ci.org/pnpm/version-selector-type)
<!--/@-->

## Installation

```sh
<pnpm|npm|yarn> add version-selector-type
```

## Usage

<!--@example('./example.js')-->
```js
'use strict'
const getVersionSelectorType = require('version-selector-type')

console.log(getVersionSelectorType('1.0.0'))
//> { normalized: '1.0.0', type: 'version' }

console.log(getVersionSelectorType('^1.0.0'))
//> { normalized: '>=1.0.0 <2.0.0', type: 'range' }

console.log(getVersionSelectorType('latest'))
//> { normalized: 'latest', type: 'tag' }

console.log(getVersionSelectorType('github:zkochan/foo'))
//> null

console.log(getVersionSelectorType('1.2.0beta'))
//> { normalized: '1.2.0-beta', type: 'version' }

console.log(getVersionSelectorType.strict('1.2.0beta'))
//> { normalized: '1.2.0beta', type: 'tag' }
```
<!--/@-->

## API

### `getVersionSelectorType(selector)`

Returns the type of the version selector and the normalized form of that selector.
Returns `null` in case it is an unknown selector.
Interprets versions and ranges loosely.

### `getVersionSelectorType.strict(selector)`

Same as `getVersionSelectorType()` but interprets versions and ranges not loosely.

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
