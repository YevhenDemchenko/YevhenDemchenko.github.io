$(function() {
    $('input[name=encryptA]').submit(function (event) {
        event.preventDefault();
    });

    $('input[name=encryptA]').click(function (event) {
        console.time('AES');
        try {
            let key = document.getElementById('key').value;
            let text = document.getElementById('data').value;
            let res = CryptoJS.AES.encrypt(text, key);
            document.getElementById('result').value = res.toString();
        } catch (ex) {
            if (window.console && console.log) {
                console.log(ex)
            }
        }
        console.timeEnd('AES');
        return false;
    });

    $('input[name=decryptA]').click(function () {
        console.time('AES decrypt');
        try {
            let key = document.getElementById('key').value;
            let text = document.getElementById('data').value;
            let code = CryptoJS.AES.decrypt(text, key);
            document.getElementById('result').value = code.toString(CryptoJS.enc.Utf8);
        } catch (ex) {
            if (window.console && console.log) {
                console.log(ex)
            }
        }
        console.timeEnd('AES decrypt');
        return false;
    });
});
