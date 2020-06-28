$(document).ready(function() {
 
  // The Url from your Authorisations list  
  var instantTokenApiUrl = 'https://ig.instant-tokens.com/users/50fb3e0c-69a2-4a5b-af45-7d25bd356f5b/instagram/17841429458967670/token?userSecret=kummbwriqu9su05ds3tcp'
  
	$.ajax({
		  url: instantTokenApiUrl,
      dataType: 'json'
		})
		 .done(function( response ) {
          
          if (!response.Token) {
            console.log('Error :: ', response);
          } else {
              var feed = new Instafeed({
                         accessToken: response.Token,
		                  after: function () {

                var owl = $('.owl2row-plugin');
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    navText:['',''],
                    nav: true,
                    dots: false,
                    owl2row: 'true',
                    owl2rowTarget: 'item',
                    owl2rowContainer: 'owl2row-item',
                    owl2rowDirection: 'utd',
                    responsive: {
                        0: {
                            items: 3
                        },
                        600: {
                            items: 5
                        },
                        1000: {
                            items: 10
                        }
                    }
                });
            },
                        });
              feed.run();
            }
  });
 
});
