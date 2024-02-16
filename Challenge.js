export default class Challenge {
  // functionSignature { name:'', params: [] }
  // name: String, description: String, difficulty: String, tags: [String], instructions: String, starterCode: String, 
  // testCases: [String], solution: String

  static testExample = "";
  static latestId;

  constructor(name, description, difficulty, tags, instructions, starterCode, testCases, solution) {
    Challenge.updateLatestId();
    this.id = Challenge.latestId + 1;
    this.name = name;
    this.description = description;
    this.difficulty = difficulty;
    this.tags = tags;
    this.instructions = instructions;
    this.starterCode = starterCode;
    this.testCases = testCases;
    this.solution = solution;
  }

  static updateLatestId() {
    Challenge.fetchAll((challenges) => {
      if (challenges.length > 0) {
        Challenge.latestId = challenges.reduce((acc, curr) => {
          return curr.id > acc.id ? curr : acc;
        });
        return;
      }
      Challenge.latestId = 1;
    });
  }

  save() {
    Challenge.fetchAll((challenges) => {
      challenges.push(this);
      localStorage.setItem('challenges', JSON.stringify(challenges));
      console.info(`[Challenge] Saved challenge with id [${this.id}].`);
    })
  }

  static fetchAll(cb) {
    const str = localStorage.getItem('challenges');
    if (str) {
      const challenges = JSON.parse(str);
      console.info(`[Challenge] ${challenges.length} Challenges are fetched.`);
      return cb(challenges);
    }
    console.info(`[Challenge] 0 Challenges are fetched.`);
    return cb([]);
  }

  static fetchById(id, cb) {
    Challenge.fetchAll((challenges) => {
      const challenge = challenges.find((challenge) => challenge.id === id);
      if (challenge !== undefined) {
        return cb(challenge);
      }
      console.error(`[Challenge] Could not find challenge with id [${id}].`);
    });
  }

  static updateById(modifiedChallenge) {
    Challenge.fetchAll((challenges) => {
      const index = challenges.findIndex((challenge) => challenge.id === modifiedChallenge.id);
      if (index !== -1) {
        // Challenge.deleteById(old.id);
        // modifiedChallenge.save();
        challenges[index] = modifiedChallenge;
        localStorage.setItem('challenges', JSON.stringify(challenges));
        console.info(`[Challenge] Updated challenge with id [${modifiedChallenge.id}].`);
      } else {
        console.error(`[Challenge] Failed to update challenge with id [${modifiedChallenge.id}].`);
      }
    });
  }

  static deleteById(id) {
    Challenge.fetchAll((challenges) => {
      const filteredChallenges = challenges.filter((challenge) => challenge.id !== id);
      localStorage.setItem('challenges', JSON.stringify(filteredChallenges));
      console.info(`[Challenge] Deleted challenge with id [${id}].`);
    })
  }

  static deleteAll() {
    localStorage.setItem('challenges', JSON.stringify([]));
    console.info(`[Challenge] Deleted all challenges from local storage.`);
  }
}