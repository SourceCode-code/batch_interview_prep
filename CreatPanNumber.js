  function createPAN() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const firstPart = Array.from({length:5},
        () => letters[Math.floor(Math.random()*26)]).join('');

    const middlePart = Array.from({length:4},
        () => Math.floor(Math.random()*10)).join('');
    
    const lastPart =
        letters[Math.floor(Math.random()*26)];

    return firstPart + middlePart + lastPart;
}
console.log(createPAN());