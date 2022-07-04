const {shuffleArray} = require('./utils')
const testArr1 =[1,2,3]
const testArr2 =["Bonjour", "Bonsoir","Information"]

describe('shuffleArray should', () => {

test('expect array to return an array', () => {
      expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
      expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        }) 
        
  test('check if the return array is the same length', () => {
      expect(shuffleArray(testArr2)).toHaveLength(testArr1.length)
      expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
  })
})