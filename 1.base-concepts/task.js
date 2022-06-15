function solveEquation(a, b, c) {
  let res = []
  let D = b * b - 4 * a * c
  if (D < 0) return []
  if (D == 0) {
    res.push((-b + Math.sqrt(D)) / (2 * a))
  } else if (D > 0) {
    res[0] = (-b + Math.sqrt(D)) / (2 * a)
    res.push((-b - Math.sqrt(D)) / (2 * a))
  }
  return res
}
