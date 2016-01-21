const AuthenticateHelper = {
  // find a suitable name based on the meta info given by each provider
  getUserDetails(authData) {
    switch(authData.provider) {
       case 'google':
        return {
          provider: authData.provider,
          displayName: authData.google.displayName,
          email: authData.google.email,
          profileImageURL: authData.google.profileImageURL
        }
       case 'twitter':
         return {
           provider: authData.provider,
           displayName: authData.twitter.displayName,
           email: authData.twitter.email,
           profileImageURL: authData.twitter.profileImageURL
         }
       case 'github':
         return {
           provider: authData.provider,
           displayName: authData.github.displayName,
           email: authData.github.email,
           profileImageURL: authData.github.profileImageURL
         }
    }
  }
}

export default AuthenticateHelper;
