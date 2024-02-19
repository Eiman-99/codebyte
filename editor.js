import Test from "./Test.js";
import Challenge from "./Challenge.js";
const challengeInstance = new Challenge(
  "Example Challenge",
  "This is an example challenge description.",
  "Medium",
  ["JavaScript", "Algorithms"],
  "Write a function that reverses a string.",
  "function reverseString(str) {\n  // Write your code here\n}",
  ["Test.assertEquals(reverseString('hello'), 'olleh')", "Test.assertEquals(reverseString('world') ,'dlrow')", "Test.assertEquals(reverseString('abc'), 'bca')"],
  "function reverseString(str) {\n  return str.split('').reverse().join('');\n}"
);
let editor;
require.config({ paths: { vs: '../node_modules/monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], () => {
  monaco.editor.defineTheme("alpha-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#3B3C4A",
      "editorCursor.foreground": "#0078d9",
      "editor.lineHighlightBackground": "#57596C50",
      "editorLineNumber.activeForeground": "#f1f8ff",
      "editorLineNumber.foreground": "#687183",
    }
  });
  monaco.editor.setTheme("alpha-dark");
  editor = monaco.editor.create(document.getElementById('container'), {
    value: starterCode,
    language: 'javascript',
    fontFamily: "Fira Code",
    fontSize: 16,
    roundedSelection: true,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    scrollbar: {
      verticalScrollbarSize: 17,
      horizontalScrollbarSize: 17,
      arrowSize: 30,
    },
  });
});

const starterCode = challengeInstance.starterCode;
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', click);

function click(e) {
  const functionNameRegex = /function\s+(\w+)\s*\(/;
  const match = starterCode.match(functionNameRegex);
  const functionName = match ? match[1] : null;

  let codeSnippet = editor.getValue();
  if (codeSnippet.includes(functionName)) {
    codeSnippet += '\n\n' + Test;
    challengeInstance.testCases.forEach(testCase => {
      codeSnippet += `\n\n${testCase};`
    });
    try {
      // console.log(codeSnippet);
      eval(codeSnippet);
    } catch (error) {
      console.log(new String(error).split('\n')[0]);
    }
  } else {
    console.log(`Function ${functionName} was not found.`);
  }

}
