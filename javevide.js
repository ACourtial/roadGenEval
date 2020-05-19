var myInit = { method: 'GET'};
var url = "https://acourtial.github.io/roadGenEval/data/first_test.csv";

const formData = new FormData();
formData.append('43','R,e,t,gh,h,e');

console.log('register a coder changment est il pris en compte ? ');
var myInit = { method: 'PUT',body:formData};



fetch(url,myInit).then(function(response) {console.log("response");console.log(response.json())});





////fetch(url,myInit).then(function(response) {console.log(response.text()); console.log(myInit);
//})//.then(fetch(url,{method:'GET'}).then(function(response) {console.log(response.text());
//}));


// IsConnectedToGithubEvent event is emitted by 'git-connect.js' plugin
document.addEventListener('IsConnectedToGithubEvent', function(e){
    // get connection info after user is connected to github
    ge.connection = e.detail;

    //initialize github api
    ge.github = new Github({
        token: ge.connection.getCookie('github_access_token'),
        auth: "oauth"
    });

    //get base github repo using connection config
    ge.baserepo = ge.github.getRepo(ge.connection.config['owner'], ge.connection.config['reponame']);

    //get username and userinfo
    ge.connection.withCredentials(function(err, username, access_token, userinfo){
        if (err === null){
            ge.username = username;
            ge.userinfo = userinfo;
        } else {
            console.log('Credentials are not valid... \nError: '+err);
        }
    })
});

function writeToRepo(content, msg, desc){
        // if user is owner
        ge.baserepo.write(ge.parentNode.dataset['branch'], ge.parentNode.dataset['file'], content, msg, function(err, sha) {
        if (err === null) {
        alert('The changes are commited successfully!');
        removeEditor();
        } else {
            alert('Content is not updated... \nError: '+err);
        }
});}
