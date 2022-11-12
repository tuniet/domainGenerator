let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".es", ".net"];

for (i in pronoun) {
  for (n in adj) {
    for (a in noun) {
      for (b in extensions) {
        console.log(pronoun[i] + adj[n] + noun[a] + extensions[b]);
      }
    }
  }
}
