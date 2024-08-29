function checkPolindrom(string) {
    let revStr = string.split('').reverse().join('');
    return string === revStr;
}

console.log(checkPolindrom("nitin"));