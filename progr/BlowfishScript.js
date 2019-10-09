$(function() {
    $('input[name=encrypt]').submit(function(event) {
        event.preventDefault();
    });

    $('input[name=encrypt]').click(function(event) {
        console.time('Blowfis');
        try {
            let key = document.getElementById('key').value;
            let text = document.getElementById('data').value;
            let bf = new Blowfish(key);
            let res = bf.encrypt(text);
            res = bf.base64Encode(res);
            document.getElementById('result').value = res;
        } catch(ex) {
            if (window.console && console.log) {
                console.log(ex)
            }
        }
        console.timeEnd('Blowfis');
        return false;
    });

    $('input[name=decrypt]').click(function() {
        console.time('Blowfis decrypt');
        try {
            let key = document.getElementById('key').value;
            let text = document.getElementById('data').value;
            let bf = new Blowfish(key);
            text = bf.base64Decode(text);
            let res = bf.decrypt(text);
            res = bf.trimZeros(res);
            document.getElementById('result').value = res;
        } catch(ex) {
            if (window.console && console.log) {
                console.log(ex)
            }
        }
        console.timeEnd('Blowfis decrypt');
        return false;
    });
});

