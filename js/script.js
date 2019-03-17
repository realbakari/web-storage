var setColor = function(){
    var col = document.getElementById('colorpref').value;
    document.body.style.backgroundColor = col;
    localStorage.setItem('usercol', col);
};

function ClearColor(){
    var col = document.getElementById('colorpref').value;
    document.body.style.backgroundColor = "";
    loadStorage.setItem('clear', col);
};

var loadColor = function(){

    var col = localStorage.getItem('usercol');

    if (col != null){

    //a color preference was found
        document.body.style.backgroundColor = col;
 }

};

var loadColor = function(){

    var col = localStorage.getItem('clear');

    if (color != null){
        document.body.style.backgroundColor = "";
    }
};
function getColor(){
    // alert('Your Color preference is: ', col);
    alert("Your Preferred Color is: ", document.body.style.backgroundColor);

}