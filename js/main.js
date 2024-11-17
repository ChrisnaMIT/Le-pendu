//mots a trouver
let mots =["car", "jeux", "horloge", "piscine", "boulangerie"];
let lettres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//permet de choisir un mot aléatoire parmis les mots du tableau
let motAleatoire = mots[Math.floor(Math.random() * mots.length)];
console.log("voici le mot", motAleatoire)


//Array creer un tableau de la meme valeur que le mot choisis mais qui est remplacer par des tiret
let motCacher = Array(motAleatoire.length).fill("_");

//.join permet de mettre des espaces
console.log("devine le mot",motCacher.join(" "));

