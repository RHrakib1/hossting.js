// globala scop
var x = 0;
function first() {
    var x = 1;
    console.log("first console is", x);

    function childOfFirst() {
        var x = 3;
        console.log("second console", x)
    }
    childOfFirst()
}
first();

function second() {
    console.log("third console ", x)
}
second()

if (true) {
    let bap = 'ma';
    console.log(bap);
}

// lexical scop
function dada() {
    var name = 'mosiur rahman'
    function papa() {
        console.log('his father name is ', name)
        function beta() {
            var hobbis = 'codding'
            console.log("his like is a", hobbis)
        }
        beta()
    }
    papa()
}
dada()