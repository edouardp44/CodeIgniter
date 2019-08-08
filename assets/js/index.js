fetch('/index.php/Api/get')
	.then((res) => {
		return res.json()
	})
	.then((data) => {
		let result = `<h2> Show all items </h2>`;
		data.forEach((user) => {
			const {id, title, budget,description, publication } = user
			result +=
				`<div id="myTable">
                     <h5> ID: ${id} </h5>
                         <ul class="w3-ul">
                             <li>  Title : ${title}</li>
                             <li> Budget : ${budget} </li>
                             <li> Description : ${description} </li>
                             <li> Publication : ${publication} </li>
                         </ul>
                      </div>`;
			document.getElementById('result').innerHTML = result;
		});
	});
