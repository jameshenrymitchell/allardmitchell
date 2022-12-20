/** @type {import('@sveltejs/kit').ParamMatcher} */

import content from '../content.json'

export function match(param) {
  if (content.map(s => s.id).includes(param)) {
    return true
  }
}