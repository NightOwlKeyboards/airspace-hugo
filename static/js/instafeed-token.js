$(document).ready(function() {
 
  // The Url from your Authorisations list  
  var instantTokenApiUrl = 'https://ig.instant-tokens.com/users/50fb3e0c-69a2-4a5b-af45-7d25bd356f5b/instagram/17841429458967670/token?userSecret=kummbwriqu9su05ds3tcp';
  
	$.ajax({
		  url: instantTokenApiUrl,
      dataType: 'json'
		})
		 .done(function( response ) {
          
          if (!response.Token) {
            console.log('Error :: ', response);
          } else {
              var accessToken: response.Token,
                        });
            }
