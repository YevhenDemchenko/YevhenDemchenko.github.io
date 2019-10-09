//GOST
$(function() {
    $('input[name=encryptG]').submit(function(event) {
        event.preventDefault();
    });

    $('input[name=encryptG]').click(function(event) {
        console.time('GOST');
        try {
            let key = document.getElementById('key').value;
            let data = document.getElementById('data').value;
            let bf = new ClassGost();
            document.getElementById('result').value = bf.Encode(data, key);
        } catch(ex) {
            if (window.console && console.log) {
                console.log(ex)
            }
        }
        console.timeEnd('GOST');
        return false;
    });

    $('input[name=decryptG]').click(function() {
        console.time('GOST decrypt');
        try {
            let key = document.getElementById('key').value;
            let data = document.getElementById('data').value;
            let bf = new ClassGost();
            document.getElementById('result').value = bf.Decode(data, key);
        } catch(ex) {
            if (window.console && console.log) {
                console.log(ex)
            }
        }
        console.timeEnd('GOST decrypt');
        return false;
    });
});
