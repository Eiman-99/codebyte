require.config({ paths: { vs: '../node_modules/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], () => {
  editor = monaco.editor.create(document.getElementById('container'), {
    value: `function add(x,y) {
  return x+y;
}`,
    language: 'javascript'
  });
});

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', click);

function click(e) {
  try {
    var code = editor.getValue();

    var functionName = 'add';

    var testParameters = [1, 2];
    // TODO ---> Test cases array <---
    var functionCallStatement = functionName + '(' + testParameters.join(', ') + ')';

    console.log(functionCallStatement);

    try {
      code += '\n' + `
function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || 'Assertion failed: Expected ' + expected + ', but got ' + actual);
    return false;
  }
  return true;
}`
      // For every test case 
      code += '\n' + `
try {
      const res = assertEquals(${functionCallStatement}, 3, 'Addition of 7 and 2 should be equal to 9.'); // Example usage
      console.log('Test passed', res);
} catch (error) {
      console.error('Test failed:', error.message);
}

try {
  const res = assertEquals(${functionCallStatement}, 3, 'Addition of 3 and 5 should be equal to 8.'); // Example usage
  console.log('Test passed', res);
} catch (error) {
  console.error('Test failed:', error.message);
}

try {
  const res = assertEquals(${functionCallStatement}, 3, 'Addition of 3 and 6 should be equal to 9.'); // Example usage
  console.log('Test passed', res);
} catch (error) {
  console.error('Test failed:', error.message);
}`
      console.log(code);
      eval(code);
    } catch (error) {
      console.error('Error appending function call statement:', error);
    }
  } catch (error) {
    console.log("An error has occured", error);
  }
}



