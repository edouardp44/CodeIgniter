<html>
<body>
<div class="row d-flex justify content-center">
	<h1>hello world</h1>
</div>
<table class="table" id="myTable">
	<thead>
	<tr>
		<th scope="col">Titre</th>
		<th scope="col">Description</th>
		<th scope="col">Budget</th>
		<th scope="col">Date de publication</th>
	</tr>
	</thead>
	<?php foreach ($test as $news_item): ?>
		<tbody>
		<tr>
			<th scope="row"><?php echo $news_item['title']; ?></th>
			<td><?php echo $news_item['description']; ?></td>
			<td><?php echo $news_item['budget']; ?></td>
			<td><?php echo $news_item['publication']; ?></td>
		</tr>
		</tbody>
	<?php endforeach; ?>
</table>
</body>
</html>
