$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "1": null,
      "2": null,
      "3": 'https://placehold.it/250x250',
      "4": null,
      "5": null,
      "6": null,
      "7": null
    },
    limit: 5,
    minLength: 0
  });
});