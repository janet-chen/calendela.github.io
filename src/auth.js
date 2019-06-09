<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


<script>
var GoogleAuth; // Google Auth object

let SCOPE = ['https://www.googleapis.com/auth/drive.metadata.readonly']; // TODO: update
let discoveryUrl = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
function initClient() {
    google.client.init({
        'apiKey':'',
        'clientID':'',
        'scope': SCOPE,
        'discoveryDOCS': discoveryUrl,
    }).then(() => {
        GoogleAuth = google.auth2.getAuthInstance();

        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);

        // Handle initial sign-in state. (Determine if user is already signed in.)
        var user = GoogleAuth.currentUser.get();
        setSigninStatus();

        // Call handleAuthClick function when user clicks on
        //      "Sign In/Authorize" button.
        $('#sign-in-or-out-button').click(function() {
            handleAuthClick();
        });
        $('#revoke-access-button').click(function() {
            revokeAccess();
        });
    })
};
</script>


