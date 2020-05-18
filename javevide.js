console.log('register a coder changment est il pris en compte ? ');
var myInit = { method: 'POST',
body:"0,3,4,5,5,6,3,5",

mode:'no-cors'
};
fetch(url,myInit).then(function(response) {console.log(response.text()); console.log(myInit);
}).then(fetch(url,{method:'GET'}).then(function(response) {console.log(response.text());
}));
var url = "https://acourtial.github.io/roadGenEval/data/first_test.csv";
