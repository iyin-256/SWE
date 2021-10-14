const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {
    test ("3x3", () => {
      let n3 = [[ 'U', 'I', 'L' ],
                [ 'K', 'C', 'X' ], 
                [ 'L', 'D', 'O' ]]
      let expected = ["cxl", "uilx", "ukcdo"]
      let solutions = boggle_solver.findAllSolutions(n3, expected)
      lowercaseStringArray(solutions)
      lowercaseStringArray(expected)
      expect(solutions.sort()).toEqual(expected.sort()) })
    test ("4x4", () => {
      let n4 = [[ 'H', 'R', 'R', 'B' ],
                [ 'P', 'Y', 'O', 'E' ],
                [ 'O', 'V', 'B', 'A' ],
                [ 'M', 'O', 'X', 'Z' ]]
      let expected = ["rpyov", "hroeb", "hrrovoxz", "bovba", "rbeaz"]
      let solutions = boggle_solver.findAllSolutions(n4, expected)
      lowercaseStringArray(solutions)
      lowercaseStringArray(expected)
      expect(solutions.sort()).toEqual(expected.sort()) })
    test ("5x5", () => {
      let n5 = [[ 'St', 'E', 'A', 'B', 'G' ],
                [ 'C', 'A', 'M', 'W', 'O' ],
                [ 'I', 'M', 'U', 'U', 'G' ],
                [ 'I', 'M', 'A', 'X', 'N' ],
                [ 'K', 'Qu', 'F', 'M', 'V' ]]
        let expected = ["stauuxfa", "uuxgwmmmqu", "imqufmv"]
        let solutions = boggle_solver.findAllSolutions(n5, expected)
        lowercaseStringArray(solutions)
        lowercaseStringArray(expected)
        expect(solutions.sort()).toEqual(expected.sort())})
    test ("8x8", () => {
      let n8 = [['W' , 'E' , 'H' , 'G' , 'A' , 'V' , 'C' , 'Y'],
                  ['E ', 'M' , 'O' , 'St', 'L' , 'L' , 'W' , 'D'],
                  ['N' , 'E' , 'H' , 'St', 'T' , 'X' , 'J' , 'C'],
                  ['J' , 'Y' , 'L' , 'H' , 'B' , 'W' , 'E' , 'N'],
                  ['C' , 'N' , 'C' , 'Qu', 'X' , 'L' , 'U' , 'U'],
                  ['L' , 'F' , 'A' , 'W' , 'O' , 'V' , 'X' , 'X'],
                  ['E' , 'K' , 'E' , 'U' , 'I' , 'G' , 'F' , 'I'],
                  ['Qu', 'I' , 'E' , 'R' , 'X' , 'A' , 'Z' , 'J']]
      let expected = ["gavlltxjcnuuvx", "lhquxluu", "wuivxxifzj", "clfawquxluu"]
      let solutions = boggle_solver.findAllSolutions(n8, expected)
      lowercaseStringArray(solutions)
      lowercaseStringArray(expected)
      expect(solutions.sort()).toEqual(expected.sort()) })});
  describe('Problem contraints', () => {
    let grid = [
            ['A', 'B', 'T', 'Z'],
            ['E', 'Qu', 'G', 'R'],
            ['I', 'R', 'A', 'M'],
            ['St', 'N', 'I', 'P']]
    describe("Tests Qu", () => {
      test('Qu - beginning', () => {
        let expected = ["quagmire", "quartz"];
        let solutions = boggle_solver.findAllSolutions(grid, expected)
        lowercaseStringArray(solutions)
        lowercaseStringArray(expected)
        expect(solutions.sort()).toEqual(expected.sort())})
      test('Qu - middle', () => {
        let expected = ["abqua", "abtqugz"];
        let solutions = boggle_solver.findAllSolutions(grid, expected)
        lowercaseStringArray(solutions)
        lowercaseStringArray(expected)
        expect(solutions.sort()).toEqual(expected.sort())})
      test('Qu - end of word', () => {
        let expected = ["abqu", "gtbaequ"];
        let solutions = boggle_solver.findAllSolutions(grid, expected)
        lowercaseStringArray(solutions)
        lowercaseStringArray(expected)
        expect(solutions.sort()).toEqual(expected.sort())})})
    describe("Tests St", () => {
      test('St - beginning', () => {
        let expected = ["aeist", "pinst"]
        let solutions = boggle_solver.findAllSolutions(grid, expected)
        lowercaseStringArray(solutions)
        lowercaseStringArray(expected)
        expect(solutions.sort()).toEqual(expected.sort())})
      test('St - middle', () => {
        let expected = ["aeistnip", "pinstrgz"]
        let solutions = boggle_solver.findAllSolutions(grid, expected)
        lowercaseStringArray(solutions)
        lowercaseStringArray(expected)
        expect(solutions.sort()).toEqual(expected.sort())})
      test('St - end', () => {
        let expected = ["aeist", "pinst"]
        let solutions = boggle_solver.findAllSolutions(grid, expected)
        lowercaseStringArray(solutions)
        lowercaseStringArray(expected)
        expect(solutions.sort()).toEqual(expected.sort())})});})
  
  describe('Input edge cases', () => {
    let grid = [['A', 'B', 'C', 'D'],
                ['E', 'F', 'G', 'H'],
                ['I', 'J', 'K', 'L'],
                ['M', 'N', 'O', 'P']];
    test('Dictionary is empty', () => {
      let dictionary = [];
      let expected = ["ponk", "mie", "abf", "ijkl", "mnop"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual([]);});
    test('Grid is empty', () => {
      grid = []
      let dictionary = [];
      let expected = [];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual([])});
   test('Jagged grid', () => {
      grid = [['A', 'B', 'C', 'D'],
              ['E', 'F', 'G', 'H'],
              ['I', 'J', 'K', 'L'],
              ['M', 'N', 'O']];
      let dictionary = []
      let expected = []
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual([])
   })
    
   test('Short words', () => 
   {
      let grid = [['A', 'B', 'C', 'D'],
          ['E', 'F', 'G', 'H'],
          ['I', 'J', 'K', 'L'],
          ['M', 'N', 'O', 'P']];
      let dictionary = ['no', 'jk', 'l', 'ijkl']
      let expected = ['ijkl']
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected)
   })
   ;});
});
