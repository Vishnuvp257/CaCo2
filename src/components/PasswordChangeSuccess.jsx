import React ,{ useEffect } from 'react';

const PasswordChangedSuccess = () => {
    useEffect(() => {
        // Check if the current environment is a browser
        const isBrowser = typeof window !== 'undefined';
    
        if (isBrowser) {
          // Redirect to the home page if it's a browser
          window.location.href = "/";
        } else {
          // If not in a browser (e.g., in the app), perform the app-specific redirection
          const appUrl = "caco2://login";
          window.location.href = appUrl;
    
          // Redirect to fallback URL if the app is not installed
          setTimeout(() => {
            if (document.visibilityState === "visible") {
              window.location.href = "https://play.google.com/store/apps/details?id=com.caco2&pcampaignid=web_share";
            }
          }, 2500);
        }
      }, []);
    
      return (
        <div>
          <p>Password reset successful!</p>
          <p>Redirecting...</p>
        </div>
      );
}


export default PasswordChangedSuccess;
