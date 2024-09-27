function isValid(s) {
    let stack = [];
    let matchingBrackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) {
        if (matchingBrackets[char]) {
            stack.push(char);
        } else {
            let lastOpenBracket = stack.pop();
            if (matchingBrackets[lastOpenBracket] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
