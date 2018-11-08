import Auth0 from 'react-native-auth0';
import { AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_AUDIENCE } from 'react-native-dotenv'
const auth0 = new Auth0({ domain: AUTH_DOMAIN, clientId: AUTH_CLIENT_ID });

module.exports = {

    onLogin: ()=> {
    auth0
    .webAuth
    .authorize({scope: 'openid profile email', audience: AUTH_AUDIENCE})
    .then(credentials =>
      console.log(credentials)
      // Successfully authenticated
      // Store the accessToken
    )
        .catch(error => console.log(error));
}

}
