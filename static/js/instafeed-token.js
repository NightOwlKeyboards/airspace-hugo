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
    			 after: function() {
        			$('#instafeed').slick({
				rows: 1,
            			slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				arrows: true,
				variableWidth: true,
				responsive: [
			{
			      	breakpoint: 1024,
				rows: 1,
			      	settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
			    },
			    {
			      	breakpoint: 600,
			      	settings: {
				rows: 1,
				slidesToShow: 2,
				slidesToScroll: 2
			      }
			    },
			    {
			      	breakpoint: 480,
			      	settings: {
				rows: 2,
				slidesToShow: 2,
				slidesToScroll: 2
			      }
			    }
			  ]
        		});
    			},
		      	template: '<div class="instagram-feed"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}"/></a></div>',
		      
                        });
              feed.run();
            }
  });
 
});
