function parsePeopleCSVfile() {
		// Open a new connection, using the GET request on the URL endpoint
		var url = "/roadGenEval/data/first_test.csv";

    console.log(url);
		var myInit = { method: 'GET'};
		fetch(url,myInit).then(function(response) {response.text().then(function(text) {
      console.log(text);});
    });

    // .then(function(text) {
    //   console.log(text);
		// 	var data = Papa.parse(text, {
		// 		download: false,
		// 		header: true,
		// 		step: function(row) {
		// 			if(row.data[0].firstname.localeCompare("") != 0){
		// 				var parent = document.getElementById("people-container");
		// 				divForAllPeople(parent, row.data);}
		// 			},
		// 		complete: function() {
		// 			var classes = [".lang-fr", ".lang-en"];
    //     			var lang = document.getElementById('select-lang').selectedIndex;
		// 			$( classes[lang] ).hide();
		// 			console.log("All done!");
		// 		},
		// 			worker: true
		// 		});
		// 	return data;
		// })
	  //       .then(function() { $("select-lang").selectpicker(); });
  };

parsePeopleCSVfile();
console.log('abrutis');
