var words = {
    pronoun: ["the", "our"],
    adjective: ["great", "big", "small"],
    noun: ["jogger", "racoon"]
}
var domain_generated = [];

function domainGenerator() {
    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < 3; j++) {
            for(let k = 0; k < 2; k++) {
                domain_generated.push(" " + words.pronoun[i] + words.adjective[i] + words.noun[i] + ".com ");
            }
        }
    }
}

domainGenerator();
document.write(domain_generated);
