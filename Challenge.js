export default class Challenge {
  // functionSignature { name:'', params: [] }
  // name: String, description: String, difficulty: String, tags: [String], instructions: String, starterCode: String, 
  // testCases: [String], solution: String
  static testExample = "";

  constructor(name, description, difficulty, tags, instructions, starterCode, testCases, solution) {
    this.id = 1;
    this.name = name;
    this.description = description;
    this.difficulty = difficulty;
    this.tags = tags;
    this.instructions = instructions;
    this.starterCode = starterCode;
    this.testCases = testCases;
    this.solution = solution;
  }

}