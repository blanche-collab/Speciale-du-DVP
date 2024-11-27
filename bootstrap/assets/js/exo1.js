// let message='bonjour tou le monde';
// console.log(message);
// let firstPart ='bonjour, ';
// let lastPart ='comment ça va'?;

// console.log(firstPart+ lastPart);

// let firstname ='blan';
// let age =20;
// let city ='amiens';
// console.log('bonjour, je m\'appelle' + firstname + 'j\'ai'+ 'ans', 'j\'habite ' +city +' amiens');
// console.log(`bonjour, je m'appelle ${firstname}, j'ai ${age} ans, j'habite à ${city}`);


// let num = 43;
// let txt ='7';

// let sum = num + parseInt(txt);

// console.log(sum)

// quand on declare avec let il faut le porter dans le bloc ou il est declare si c'est deja declarer on ne le declare plus deux fois.

// declarer une variable

// let num = 23;

// utilisation de la condition classique 
// if (num % 2 === 0 ) {
//     console.log("le nombre pair");
// }else{
//     console.log("le nombre impair");
// }
// // ou

// let message;
// if (num % 2 === 0 ) {
//     message= 'le nombre pair';
// }else{
//     message='le nombre impair';

// }
// utlisation de la condition ternaire
// let = 23;
// let = message;
// message=(num % 2 == 0)? 'pair':'impair';
// console.log(message)

// function helloWorld(){
//     console.log('bonjour');
// }
// helloWorld();

// fonction de bonjour à blanche et à jean utiliser les parametre avant d'executé.
// function helloWorld(firstname){
//     console.log('bonjour' + firstname);
// }
// helloWorld('steeve');
//     // ce que la fonction est sensé repondre 
//     function sayHello(firstname){
//     let message = 'bonjour' + firstname;
// }return message;
// let result = sayHello ('steeve'); 
// console.log(result);


// lorsque je recois je dois le stock dans une chaine de caractère . le role du fonction c'est d'executer et de donner des resultats.

// créer une variable "day" et lui attribuer une valeur entre 1 et 7

// let mark = 8; 
// let message;
// // condition pour afficher le message approprié

// if  ( mark >= 0 && mark <=3) {
//     message='mauvais';
// }else if(mark >= 4 && mark <=5){
//     message='Moyen';
// }else if(mark >=6 && mark <=7){
//     message='assez bien'
// }else if (mark >=8 && mark <=9){
//     message='bien'
// }else if (mark===10){
//     message='excellent';
// }else{
//     message='valeur invalide';
// }
// console.log(message);

// 

// créer une variable "value" et lui affecter une valeur.
let value = 10;
let message;

// ecrire une phrase dans la console et préciser le type de valeur
// if (typeof value === "string") {
//     message = "la valeur est une chaine";
// } else if (typeof value === "number") {
//     message = "la valeur est un nombre";
// } else if (typeof value === "boolean") {
//     message = "la valeur est un booléen";
// } else {
//     message = "la valeur n'est pas pris en charge";
// }
// console.log(message);

// let element = document.getElementById('firstname');
// let element1= document.querySelector('p>span');
// element,innerhtml= 'john';
// console.log(element);

// Créer une fonction nommée "helloWorld" qui retourne "Bonjour tout le 
// monde".
// Appeler cette fonction et afficher sa réponse dans la console.

// function helloWorld(){
//     console.log('bonjour tout le monde');
//     helloWorld('Rolvie');
// }
//  console.log(helloWorld());


//  function helloyou(firstname){
//     console.log("bonjour"+ firstname);
   
// }
//  console.log(helloyou (" eric"));

// function average(nombre1, nombre2){
    
//     return (nombre1 + nombre2)/2; 
// }
// const num1= 10;
// const num2 = 2;
// const result = average(num1, num2);
// console.log(`la moyenne  de ${num1} et ${num2} est: ${result}.`);

// exo4:xercice 4
// Créer une fonction fléchée permettant de retourner une chaine passée 
// en argument, suivie de sa longueur entre parenthèses
// Afficher le résultat dans la console.


// const longueureChaine = (str) => `${str} (${str.length})`;

// const result= longueureChaine('Bonjour')

// console.log(result);



// Exercice 5
// Traduire cette fonction fléchée en fonction nommée:
// howAreYou = (name) => `Bonjour, ${name} ! Comment vas-tu ?`;
// Afficher le résultat dans la console.


// function howAreYou (name) {
//         return `bonjour, ${name}  comment vas-tu? `;
       
//     }

// console.log(howAreYou("blanche"));
    

// Exercice 6
// Traduire la fonction nommée de l'exercice 3, en fonction fléchée.
// Afficher une phrase dans la console rappelant le calcul, ainsi que 
// le résultat.

// Exercice 1
// Créer un tableau indexé, contenant les prénoms des 5 élèves : Tim, 
// Bill, Jeff, Marc, Sundar
// Afficher ce tableau dans la console.

// let tableau = ['Tim', 'Bill','Marc','Jeff', 'Sundar'] ;
// console.log(tableau);

// Exercice 2
// En utilisant le tableau créé à l'exercice 1, afficher dans la 
// console le prénom du 4ème élément

// let tableau = ['Tim', 'Bill','Marc','Jeff', 'Sundar'] ;
// console.log(tableau[3]);

// Exercice 3
// Modifier le prénom de "Marc", par "Mark" dans le tableau de 
// l'exercice 1.
// Afficher le contenu du tableau dans la console.

// let tableau = ['Tim', 'Bill','Marc','Jeff', 'Sundar'] ;
// tableau[2]= 'Mark'
// console.log(tableau);

// Exercice 4
// Ajouter "Elon" au tableau existant, puis afficher tout le tableau 
// dans la console
// push c'est pour ajouter le nom
// let tableau = ['Tim', 'Bill','Marc','Jeff', 'Sundar'] ;
// tableau.push('elon');
// console.log(tableau);

// Exercice 5
// Dans le tableau mis à jour dans l'exercice précédent, trier le 
// tableau selon l'ordre alphabétique, et l'afficher dans la console
// sort pour mettre le tableau en ordre alphabétique
// let tableau = ['Tim', 'Bill','Marc','Jeff', 'Sundar'] ;
// tableau.push('elon'); push c'est pour ajouter un nom au debut
// tableau.sort();
// console.log(tableau);
// pop c'est pour supprimer un nom au debut
// let tableau = ['Tim', 'Bill','Marc','Jeff', 'Sundar'] ;
// tableau.push('elon');
// tableau.pop();
// tableau.unshift('rase');
// tableau.shift(); 
// // shift c'est pour supprimer un nom au debut 
// // unshift c'est ajouter un nom ou un fiche au debut
// console.log(tableau);

// Exercice 1
// A l'aide d'une boucle, afficher dans la console toutes les années 
// entre 2020 et 2030.
// Exercice 2
// A l'aide d'une boucle afficher dans la console tous les nombres de 0 
// à 100.
// Pour chaque multiple de 7, les remplacer par "x est un multiple de 
// 7"
// Exercice 3
// Soit le tableau suivant :
// const languages = ['Javascript', 'Python', 'PHP', 'Java', 'SQL' ];
// Dans la console, afficher individuellement, tous les éléments du 
// tableau "languages".