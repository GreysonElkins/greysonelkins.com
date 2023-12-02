// import { RefObject } from "react"

// function elementsOverlap<T extends HTMLElement, U extends HTMLElement>(e1: RefObject<T>, e2: RefObject<U>) {
function elementsOverlap(e1: any, e2: any) {
  if (!e1?.current || !e2?.current) return
  const e1Bottom = e1.current.offsetTop + e1.current.offsetHeight
  const e1Right = e1.current.offsetLeft + e1.current.offsetWidth
  const elementBottom = e2.current.offsetTop + e2.current.offsetHeight
  const elementRight = e2.current.offsetLeft + e2.current.offsetWidth
  
  return !(
    e1Bottom <= e2.current.offsetTop ||
    e1.current.offsetTop >= elementBottom ||
    e1Right <= e2.current.offsetLeft ||
    e1.current.offsetLeft >= elementRight
    )
  }
  
  function elementsAreHorizontallyAligned (e1: any, e2: any) {
    if (!e1?.current || !e2.current) return
    const e1Bottom = e1.current.offsetTop + e1.current.offsetHeight
    const e1Top = e1.current.offsetTop
    // const e2Bottom = e2.current.offsetTop + e2.current.offsetWidth
    const e2Top = e2.current.offsetTop
    return !(e1Bottom < e2Top || e1Top > e2Top) 
  }

  export function elementSideOverlaps(e1: any, e2: any, leftSide: boolean, offset = 0) {
    // leftSide false will use right side
  if (!e1?.current || !e2?.current) return
  const e1Right = e1.current.offsetLeft + e1.current.offsetWidth
  const e1Left = e1.current.offsetLeft
  // const elementBottom = e2.current.offsetTop + e2.current.offsetHeight
  const e2Right = e2.current.offsetLeft + e2.current.offsetWidth
  const e2Left = e2.current.offsetLeft

  if (leftSide) {
    return (
      (e1Left - offset <= e2Right && e1Left - offset >= e2Left) && elementsAreHorizontallyAligned(e1, e2) 
    )
  }
  if (!leftSide) {
    return (
      e1Right -offset >= e2Left && e1Right - offset <= e2Right && elementsAreHorizontallyAligned(e1, e2)
    )
  }

}

export default elementsOverlap
