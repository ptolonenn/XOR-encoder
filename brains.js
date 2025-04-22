function xorEncode(text, password) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let textChar = text.charCodeAt(i);
        let passChar = password.charCodeAt(i % password.length);

        let xorChar = textChar ^ passChar;

        result += String.fromCharCode(xorChar);
    }

    return result;
}

let isEncoded = false;

const textInput = document.getElementById('textInput');
const passwordInput = document.getElementById('passwordInput');
const textOutput = document.getElementById('textOutput');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const password = passwordInput.value;

    if (!password) {
        textOutput.value = 'Please enter a password!';
        return;
    }

    const text = isEncoded ? textOutput.value : textInput.value;

    const result = xorEncode(text, password);
    textOutput.value = result;

    button.textContent = isEncoded ? 'Encode' : 'Decode';
    isEncoded = !isEncoded;
});
