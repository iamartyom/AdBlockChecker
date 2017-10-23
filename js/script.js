window.onload = function() {
    checkAdBlock()
};

function checkAdBlock() {
    try {
        if (ads === true) {}
        showInfoAdBlock(false);
    }
    catch (err) {
        showInfoAdBlock(true);
    }
};

function showInfoAdBlock(IsExist) {
    var infoAdBlock = document.getElementById("infoAdBlock");
    var body = document.getElementsByTagName("body")[0];

    if (IsExist) {
        infoAdBlock.innerText = 'Enabled AdBlock';
        body.style.background = '#E95B5B';
    }
    else {
        infoAdBlock.innerText = 'Disabled AdBlock';
        body.style.background = '#26C080';
    }
}