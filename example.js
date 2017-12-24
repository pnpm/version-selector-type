'use strict'
const getVersionSelectorType = require('version-selector-type')

console.log(getVersionSelectorType('1.0.0'))

console.log(getVersionSelectorType('^1.0.0'))

console.log(getVersionSelectorType('latest'))

console.log(getVersionSelectorType('github:zkochan/foo'))
