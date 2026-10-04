jQuery(document).ready(function($) {
		$('.search-input').keyup(function(e) {
			if (e.target.value == '') {
				$('tbody > .lotto').css('display', 'flex');
				return;
			}
			$('tbody > .lotto:not([data-game*="'+e.target.value.toLowerCase()+'"])').css('display', 'none');
			$('tbody > .lotto[data-game*="'+e.target.value.toLowerCase()+'"]').css('display', 'flex');
		})
	});
