# version-selector-type

> Returns the type of a version selector

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/version-selector-type.svg)](https://www.npmjs.com/package/version-selector-type) [![Build Status](https://img.shields.io/travis/pnpm/version-selector-type/master.svg)](https://travis-ci.org/pnpm/version-selector-type)
<!--/@-->

## Installation

```sh
npm i -S version-selector-type
```

## Usage

<!--@example('./example.js')-->
```js
'use strict'
const getVersionSelectorType = require('version-selector-type')

console.log(getVersionSelectorType('1.0.0'))
//> version

console.log(getVersionSelectorType('^1.0.0'))
//> range

console.log(getVersionSelectorType('latest'))
//> tag

console.log(getVersionSelectorType('github:zkochan/foo'))
//> null
```
<!--/@-->

## API

### `getVersionSelectorType(selector, [loose])`

Returns the type of the version selector or `null` in case it is an unknow selector.

### Arguments

* `selector` - *string* - Required.
* `[loose]` - *boolean* - Optional. False by default. If true, Interprets versions and ranges loosely.

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
