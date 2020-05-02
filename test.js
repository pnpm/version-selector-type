'use strict'
const test = require('tape')
const m = require('version-selector-type')

test('getVersionSelectorType()', t => {
  t.throws(() => m(), /should be a string/)
  t.throws(() => m(1), /should be a string/)
  t.deepEqual(m('1.0.0'), {type: 'version', normalized: '1.0.0'})
  t.deepEqual(m('= 1.0.0', true), {type: 'version', normalized: '1.0.0'})
  t.deepEqual(m('1.2.0beta', true), {type: 'version', normalized: '1.2.0-beta'})
  t.deepEqual(m('^1.0.0'), {type: 'range', normalized: '>=1.0.0 <2.0.0-0'})
  t.deepEqual(m('latest'), {type: 'tag', normalized: 'latest'})
  t.deepEqual(m('github:zkochan/foo'), null)
  t.end()
})

test('getVersionSelectorType.strict()', t => {
  t.throws(() => m.strict(), /should be a string/)
  t.throws(() => m.strict(1), /should be a string/)
  t.deepEqual(m.strict('1.0.0'), {type: 'version', normalized: '1.0.0'})
  t.deepEqual(m.strict('1.2.0beta', true), {type: 'tag', normalized: '1.2.0beta'})
  t.deepEqual(m.strict('^1.0.0'), {type: 'range', normalized: '>=1.0.0 <2.0.0-0'})
  t.deepEqual(m.strict('latest'), {type: 'tag', normalized: 'latest'})
  t.deepEqual(m.strict('github:zkochan/foo'), null)
  t.end()
})
