jQuery(document).ready(function($) {
		setInterval(function() {
			$('.loto-widget-5-table .widget').each(function() {
				let next_date = new Date($(this).attr('data-timestamp'));
				let date = new Date();
				let hours = Math.floor((next_date.getTime() - date.getTime()) / 1000 / 3600);
				if (hours < 0) hours = 0;
				let minutes = Math.floor((next_date.getTime() - date.getTime()) / 1000 / 60 - hours * 60);
				if (minutes < 0) minutes = 0;
				let seconds = Math.floor((next_date.getTime() - date.getTime()) / 1000 - hours * 3600 - minutes * 60);
				if (seconds < 0) seconds = 0;
				$(this).find('.timer-hours .timer-hours-quantity').text(hours);
				$(this).find('.timer-minutes .timer-minutes-quantity').text(minutes);
				$(this).find('.timer-seconds .timer-seconds-quantity').text(seconds);
			});
		}, 1000);
	});