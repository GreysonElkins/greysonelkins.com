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
  
  export function elementSideOverlaps(e1: any, e2: any, leftSide: boolean) {
    // leftSide false will use right side
  if (!e1?.current || !e2?.current) return
  debugger
  const e1Bottom = e1.current.offsetTop + e1.current.offsetHeight
  const e1Right = e1.current.offsetLeft + e1.current.offsetWidth
  const elementBottom = e2.current.offsetTop + e2.current.offsetHeight
  const elementRight = e2.current.offsetLeft + e2.current.offsetWidth

  if (leftSide) {
    return (
      (e1.current.offsetLeft <= elementRight && e1.current.offsetLeft > e2.current.offsetLeft) 
      && (e1.current.offsetTop > elementBottom || e1Bottom < e2.current.offsetTop)
    )
  }
  if (!leftSide) {
    return (
      e1Right >= e2.current.offsetLeft &&
      e1Right < elementRight &&
      (e1.current.offsetTop > elementBottom || e1Bottom < e2.current.offsetTop)
    )
  }

}

export default elementsOverlap
