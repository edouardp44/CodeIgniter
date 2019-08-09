'use strict';
fetch('/index.php/Api/get')
	.then((res) => {
		return res.json()
	})
	.then((data) => {
		let result = `<h2> Show all items </h2>`;
		data.forEach((user) => {
			const {id, title, budget,description, publication } = user
			result +=
				`
					<ul class="list-group">
						<li class="list-group-item"> ID: ${id} </li>
						<li class="list-group-item">  Title : ${title}</li>
						<li class="list-group-item"> Budget : ${budget} </li>
						<li class="list-group-item"> Description : ${description} </li>
						<li class="list-group-item "> Publication : ${publication} </li>
					</ul>
				`;
			document.getElementById('result').innerHTML = result;
		});

		var numbOfItem = $("#loop .list-group").length;
		var limitPerPage = 5;

		$(" #loop .list-group:gt(" + (limitPerPage - 1) + ")").hide();

		var totalPages = Math.round(numbOfItem / limitPerPage);

		$('.pagination').append("<li class='current-page page-item active'><a class='page-link' href='javascript:void(0)'>"+ 1 +"</a></li>");

		for (var i =2; i <= totalPages; i++) {
			$('.pagination').append("<li class='current-page page-item'><a class='page-link' href='javascript:void(0)'>"+ i +"</a></li>")
		}

		$('.pagination').append("<li id='next-page' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>");

		$('.pagination li.current-page').on('click', function () {
			if ($(this).hasClass('active')) {
				return false;
			} else {
				var currentPages = $(this).index();
				$('.pagination li').removeClass('active');
				$(this).addClass('active');
				$('#loop .list-group').hide()

				var grandTotal = limitPerPage * currentPages;

				for (var j = grandTotal - limitPerPage; j < grandTotal; j++) {
					$("#loop .list-group:eq(" + j + ")").show();

				}
			}
		});

		$("#next-page").on('click', function() {
			var currentPage = $(".pagination li.active").index();
			if (currentPage === totalPages) {
				return false;
			} else {
				currentPage++;
				$('.pagination li').removeClass('active');
				$('#loop .list-group').hide();

				var grandTotal = limitPerPage * currentPage;

				for (var j = grandTotal - limitPerPage; j < grandTotal; j++) {
					$("#loop .list-group:eq(" + j + ")").show();
				}
				$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
			}
		});

		$("#previous-page").on("click", function() {
			var currentPage = $(".pagination li.active").index();
			if (currentPage === 1) {
				return false;
			} else {
				currentPage--;
				$(".pagination li").removeClass('active');
				$("#loop .list-group").hide();

				var grandTotal = limitPerPage * currentPage;

				for (var j = grandTotal - limitPerPage; j < grandTotal; j++) {
					$("#loop .list-group:eq(" + j + ")").show();
				}

				$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
			}
		});
	});
