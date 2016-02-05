var track_template = Handlebars.compile($('#template-chart-track').html());

$('#winners_nominees_player').append(track_template(all_data['14743783']));
