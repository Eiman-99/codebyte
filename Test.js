export default class Test {

  static assertEquals(actual, expected) {
    if (actual !== expected) {
      if (actual === '') {
        actual = '""';
      } else if (actual !== undefined) {
        actual = '"' + actual + '"';
      }
      console.log('❌ Test Failed: Expected "' + expected + '", but got ' + actual);
    } else {
      console.log(`✅ Test Passed`);
    }
  }

  static assert(condition) {
    if (!condition) {
      return console.log(`❌ Test Failed`);
    }
    return console.log(`✅ Test Passed`);
  }
}
