'use strict'
const test = require('tape')
const getVersionSelectorType = require('version-selector-type')

test('getVersionSelectorType()', t => {
  t.throws(() => getVersionSelectorType(), /should be a string/)
  t.throws(() => getVersionSelectorType(1), /should be a string/)
  t.equal(getVersionSelectorType('1.0.0'), 'version')
  t.equal(getVersionSelectorType('^1.0.0'), 'range')
  t.equal(getVersionSelectorType('latest'), 'tag')
  t.equal(getVersionSelectorType('github:zkochan/foo'), null)
  t.end()
})
