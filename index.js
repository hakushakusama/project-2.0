let questions = ["Quelle est la superficie d'algerie ?@1,082km²@10,082km²@5,722km²@12,802km²@0,382km²@4,382km²@2,082km²@2,382km²", "b@1@2@3@4@5@7@8@6"]
let question = questions[0];
let arr = question.split('@');

console.log(arr);
document.getElementById("question").innerHTML = arr[0];



let prop = [];

prop[0] =  Math.floor(Math.random() * 7) + 1;

let rnd =  Math.floor(Math.random() * 7) + 1;
while (rnd === prop[0]) {
    rnd =  Math.floor(Math.random() * 7) + 1;
}

prop[1] = rnd;

rnd =  Math.floor(Math.random() * 7) + 1;
while (rnd === prop[0] || rnd === prop[1]) {
    rnd =  Math.floor(Math.random() * 7) + 1;
}

prop[2] = rnd;


document.getElementById("rep1").innerHTML = arr[prop[0]];
document.getElementById("rep2").innerHTML = arr[prop[1]];
document.getElementById("rep3").innerHTML = arr[arr.length-1];
document.getElementById("rep4").innerHTML = arr[prop[2]];