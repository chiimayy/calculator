function appendChar(char) {
    document.getElementById('result').value += char;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteLastChar() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  function calculateResult(operation) {
    let result = document.getElementById('result').value;
    let answer = eval(result);
    document.getElementById('result').value = answer;
  }