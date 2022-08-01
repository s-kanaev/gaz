jQuery(function($){
	$('#true_loadmore').click(function(){
		$('.b-pager').remove();
		$(this).html('<div class="preloader"></div>');
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page
		};
		$.ajax({
			url: ajaxurl,
			data: data,
			type: 'POST',
			success:function(data){
				if( data ) { 
					$('#true_loadmore').text('Показать еще').before(data);
					current_page++;
					if (current_page == max_pages) $("#true_loadmore").remove();
				} else {
					$('#true_loadmore').remove();
				}
			}
		});
	});
});