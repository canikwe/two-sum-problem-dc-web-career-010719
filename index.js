// let sum = 6
// let a = [5, -2, 4, 9, 1]

const bruteForceTwoSum = (a, sum) => {
  const track = []
  const arr = []

  for (let i = 0; i < a.length; i ++) {
    for (let k = 0; k < a.length; k ++) {
      if (i !== k && a[i] + a[k] === sum) {
        if (!track.includes(a[i] || !track.includes(a[k]))) {
          arr.push([a[i], a[k]])
          track.push(a[i], a[k])
        }

        console.log(arr.includes([a[i], a[k]]))
        console.log(arr.includes([a[k], a[i]]))

      }
    }
  }
  return arr
}