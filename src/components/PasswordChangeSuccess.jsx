import React ,{ useEffect } from 'react';

const PasswordChangedSuccess = () => {
    useEffect(() => {
          const appUrl = "caco2://login";
          window.location.href = appUrl;
    
          // Redirect to fallback URL if the app is not installed
          setTimeout(() => {
            if (document.visibilityState === "visible") {
              window.location.href = "https://play.google.com/store/apps/details?id=com.caco2&pcampaignid=web_share";
            }
          }, 2500);
      }, []);
    
      return (
        <div>
          <p>Password reset successful!</p>
          <p>Redirecting...</p>
        </div>
      );
}


export default PasswordChangedSuccess;
