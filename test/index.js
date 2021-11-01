'use strict'

import * as pageFlip from '../src/page-flip.js'

/*    understand/
 * main entry point into our program
 */
function main() {
  const opts = {
    backgroundColor: "#666",
    toolbarSeparator: "#9e9e9e",
    toolbarColor: "#333",
    boxColor: "#333",
    width: 800,
    height: 600,
  }
  pageFlip.init(pageFn(), 'app', viewer => window.viewer = viewer)
}

function pageFn() {
  const pages = [
    '/000.png',
    '/1.png',
    '/2.png',
    '/6.png',
    '/3.png',
    '/8.png',
    '/9.png',
    '/4.png',
    '/5.png',
    '/7.png',
  ]

  const imgs = []

  return {
    numPages: () => pages.length,
    get,
  }


  function get(n, cb) {
    if(!n || n > pages.length) return cb()
    if(imgs[n]) return cb(null, imgs[n])

    const img = new Image()
    img.src = pages[n-1]
    img.addEventListener("load", () => {
      imgs[n] = {
        img,
        num: n,
        width: img.width,
        height: img.height,
      }
      cb(null, imgs[n])
    }, false)
  }
}

main()