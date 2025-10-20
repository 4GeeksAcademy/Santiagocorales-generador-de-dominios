let pronombres = ["the", "our"];
let adjetivos = ["great", "big"];
let sustantivos = ["jogger", "racoon"];
let extensionesDeDominios = [".com", ".net", ".us", ".io"];

for (let p of pronombres) {
    for (let a of adjetivos) {
        for (let s of sustantivos) {
            for (let e of extensionesDeDominios) {
                console.log(`${p}${a}${s}${e}`);
            }            
        }
    }
}