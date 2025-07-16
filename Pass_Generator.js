function generatePassword() {
    const length = Number(document.getElementById("passwordLength").value);
    const includeLowercase = document.getElementById("includeLowercaseC").checked;
    const includeUppercase = document.getElementById("includeUppercaseC").checked;
    const includeNumbers = document.getElementById("includeNumberC").checked;
    const includeSympols = document.getElementById("includeSymbolC").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()))_+=-{}|:?>";

    let allowChars = "";
    let password = "";

    allowChars += includeLowercase ? lowercaseChars : "";
    allowChars += includeUppercase ? uppercaseChars : "";
    allowChars += includeNumbers ? numberChars : "";
    allowChars += includeSympols ? symbolChars : "";

    const errorEl = document.getElementById("errormessage");
    errorEl.textContent = ""; // Clear previous error

    if (length <= 0) {
        errorEl.textContent = "(Password length must be at least 1)";
        return;
    }

    if (allowChars.length === 0) {
        errorEl.textContent = "(Select at least one set of characters)";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomIndex];
    }

    document.getElementById("password").textContent = password;
}
