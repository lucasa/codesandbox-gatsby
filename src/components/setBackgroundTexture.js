import { select } from 'd3-selection'
import 'd3-transition'
import textures from 'textures'

export default t => {
  // if (!window && !window.document) return
  // https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-302043875
  if (typeof window === 'undefined') return

  const box = select('body')
  const svg = box
    .append('svg')
    .attr('width', '3000')
    .attr('height', '3000')

  svg.call(t)
  svg
    .append('path')
    .attr('d', 'M 0 0 L 0 3000 L 3000 3000 L 3000 0 Z')
    .style('fill', t.url())
}
