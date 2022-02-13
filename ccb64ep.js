function to_ccb64ep(t) {
    var n = [];
    assembler.go(`; Simple example\n\n\n\tJMP start\nhello: DB "${t}" \n       DB 0\t\n\nstart:\n\tMOV C, hello    \n\tMOV D, 232\t\n\tCALL print\n        HLT             \n\nprint:\t\t\t\n\tPUSH A\n\tPUSH B\n\tMOV B, 0\n.loop:\n\tMOV A, [C]\t\n\tMOV [D], A\t\n\tINC C\n\tINC D  \n\tCMP B, [C]\t\n\tJNZ .loop\t\n\n\tPOP B\n\tPOP A\n\tRET`).code.forEach(function(t) {
        var o = parseInt("0x" + t);
        n.push(String.fromCharCode(o))
    });
    var o, r = n.join("");
    return new Blob([r]).arrayBuffer().then(async t => {
        o = t
    }), btoa(new Uint8Array(o).toString()) + "\b" + n.join("")
}
