'use strict'
const semver = require('semver')

module.exports = (selector, loose) => {
  if (typeof selector !== 'string') {
    throw new TypeError('`selector` should be a string')
  }
  if (semver.valid(selector, loose)) {
    return 'version'
  }
  if (semver.validRange(selector, loose)) {
    return 'range'
  }
  if (encodeURIComponent(selector) === selector) {
    return 'tag'
  }
  return null
}
