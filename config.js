
import firebaseConfig from './firebase_config'; //Since version 10, firebase config comes from firebase_config.js only

//FireBase  --- CHANGE THEM WITH YOUR OWN FIREBASE DB
exports.firebaseConfig  = firebaseConfig.config;


exports.paypal={
  acceptPayments:true, // Set this to false if you don't want to accept paypal payments
  sandBoxMode:true,
  clientID:"Af_H2HSMUFkVQsDfIggWgobv-QK59pLOR6iX77TpEWLUN8ob0eBGCg48CBX1gcifFKUdu0YHRfyS6Tnl",
  secretKey:"EHrmFLREuoQ7FMIEITEKckqydqhtQan07pIy0Uhc1TnNmmE33_xWfqlFoBXHg7gjuismQQaNoSzMLWIS",
  return_url:"https://envato.com/#products", //Replace it with your own webpage thank-you site
  cancel_url:"https://market.envato.com/", //Replace it with your own webpage cancel url
  includeShippingInfo:true,
  currency:"USD",
  state:"CA",//Checkc PayPalPayment.js in components to see how it is used, If it is not static, allow user to enter it in submit screen
  country_code:"US", //Country code must be 2-character ISO 3166-1 value (upper case)
  postal_code: "95131", //Required postal code - If it is not static, allow user to enter it in submit screen
  city: "San Jose", //Required city - If it is not static, allow user to enter it in submit screen
}

exports.loginSetup={
  loginWithEmailAndPass:true,
  anonymousLogin:false,
  welcomeText:"Welcome to React  App",
  facebookLogin:true, //Do we have Facebook login
  facebookID:"--- REPLACE WITH YOUR FACEBOOK ID ---",
  googleLogin:true, //Do we have Google login
  googleIOSid:"--- REPLACE WITH YOUR CLIENT ID ---",
  googleAndroidId:"--- REPLACE WITH YOUR CLIENT ID ---",
  androidStandaloneAppClientId:"--- REPLACE WITH YOUR CLIENT ID ---",
  iosStandaloneAppClientId:"--- REPLACE WITH YOUR CLIENT ID ---"
}


exports.sendEmailWhenOrderPlacer=true;

//Are our profiles screen under some menu
exports.profileScreensInSubMenu=false; 


//ADS IDs
// -------- Do you want ads to be shown - Controller from firebase ------ //
exports.showBannerAds = true;
exports.showinterstitialAds = true;

// -------- Enter your adMob ids here - Controller from firebase  ------- //
exports.bannerID = "ca-app-pub-3074088633024340/5582578179";
exports.interstitialID = "ca-app-pub-3074088633024340/8759835813";
exports.isTesting=false; //On ios device ads show only if you cpecifically set that this is test mode


//The Sendgrid KEY   --- CHANGE THEM WITH YOUR OWN SENDGRID
exports.SENDGRID_API_KEY="YOUR_OWN_SENDGRID_KEY";

//Orders are sent to --- CHANGE IT WITH YOUR OWN EMAIL
exports.sendToEmail="contact@mobidonia.com" //YOU CAN USE SMOOCH.IO email here

//Do you want BarCode Scanner to be shown
exports.showBCScanner = true;

//Used for the Firebase RunTime setup
exports.config = null

//Set this to true if you want to preview the demo apps
exports.isPreview=true;

//
exports.isTesterApp=true;