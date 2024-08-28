function encrypt() {
    let text = document.getElementById("inputText").value;
    let encryptedText = btoa(text); 
    document.getElementById("outputText").innerText = encryptedText;
}

function decrypt() {
    let encryptedText = document.getElementById("inputText").value;
    let decryptedText = atob(encryptedText);
    document.getElementById("outputText").innerText = decryptedText;
}
