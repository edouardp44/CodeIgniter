var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8000/index.php/Api/get', true)
request.onload = function () {
	var data = JSON.parse(this.response)

	data.forEach(data => {

		var titre = document.getElementById('titre')
		titre.textContent = data.title

		const description = document.getElementById('description');
		description.textContent = data.description;

		const budget = document.getElementById('budget');
		budget.textContent = data.budget;

		const  publication = document.getElementById('publication');
		publication.textContent = data.publication;
	})
}
request.send()










var $table = document.getElementById("myTable"),
	$n = 7,
	$rowCount = $table.rows.length,
	$firstRow = $table.rows[0].firstElementChild.tagName,
	$hasHead = ($firstRow === "TH"),
	$tr = [],
	$i, $ii, $j = ($hasHead) ? 1 : 0,
	$th = ($hasHead ? $table.rows[(0)].outerHTML : "");
var $pageCount = Math.ceil($rowCount / $n);
if ($pageCount > 1) {
	for ($i = $j, $ii = 0; $i < $rowCount; $i++, $ii++)
		$tr[$ii] = $table.rows[$i].outerHTML;
	$table.insertAdjacentHTML("afterend", "<div id='buttons'></div");
	sort(1);
}

function sort($p) {
	var $rows = $th, $s = (($n * $p) - $n);
	for ($i = $s; $i < ($s + $n) && $i < $tr.length; $i++)
		$rows += $tr[$i];

	$table.innerHTML = $rows;
	document.getElementById("buttons").innerHTML = pageButtons($pageCount, $p);
	document.getElementById("id" + $p).setAttribute("class", "active");
}

function pageButtons($pCount, $cur) {
	var $prevDis = ($cur == 1) ? "disabled" : "",
		$nextDis = ($cur == $pCount) ? "disabled" : "",
		$buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort(" + ($cur - 1) + ")' " + $prevDis + ">";
	for ($i = 1; $i <= $pCount; $i++)
		$buttons += "<input type='button' id='id" + $i + "'value='" + $i + "' onclick='sort(" + $i + ")'>";
	$buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort(" + ($cur + 1) + ")' " + $nextDis + ">";
	return $buttons;
}
