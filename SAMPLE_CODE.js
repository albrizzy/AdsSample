/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

const adsSdk = require('facebook-nodejs-business-sdk');
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const AdSet = adsSdk.AdSet;
const AdCreative = adsSdk.AdCreative;
const Ad = adsSdk.Ad;
const AdPreview = adsSdk.AdPreview;

let access_token = 'EAAWrfva9KaQBABpBe5nEVYZCogZBJXzD9k8WyFw7U57W8pYpF5AtamAQCxgRA87VqRVbKlmRKBHo9YZBppZCaTKsDSvCEsWbTtRGYk9ugWqxOrm38lDUO9oZAfr3uxzphyK7zG5Pac31oYHlI1ASZBPTeTCRMCX2LA13RRXaQEFZB30rotyL1sQVhsfaXvVlmKMvTZCktyZBEj1AZBHbGcIWgiVSIZANJDx0h4ZD';
let ad_account_id = 'act_320127581868614';
let app_secret = '4f67d4d9eae33c47ca0e92708c33ce73';
let page_id = '973289659538366';
let app_id = '1595936677374372';
const api = adsSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(ad_account_id);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

let campaign;
let campaign_id;
let ad_set;
let ad_set_id;
let creative;
let creative_id;
let ad;
let ad_id;
let adpreview;
let adpreview_id;

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

const fields = [
];
const params = {
  'objective' : 'PAGE_LIKES',
  'status' : 'PAUSED',
  'buying_type' : 'AUCTION',
  'name' : 'My Campaign',
};
campaign =  (new AdAccount(ad_account_id)).createCampaign(
  fields,
  params

);
campaign
.then((result) => {
  logApiCallResult('campaign api call complete.', result);
  campaign_id = result.id;
  const fields = [
  ];
  const params = {
    'status' : 'PAUSED',
    'targeting' : {'geo_locations':{'countries':['US']}},
    'daily_budget' : '1000',
    'billing_event' : 'IMPRESSIONS',
    'bid_amount' : '20',
    'campaign_id' : campaign_id,
    'optimization_goal' : 'PAGE_LIKES',
    'promoted_object' : {'page_id': page_id},
    'name' : 'My AdSet',
  };
  return (new AdAccount(ad_account_id)).createAdSet(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('ad_set api call complete.', result);
  ad_set_id = result.id;
  const fields = [
  ];
  const params = {
    'body' : 'Like My Page',
    'image_url' : 'http://www.facebookmarketin gdevelopers.com/static/images/resource_1.jpg',
    'name' : 'My Creative',
    'object_id' : page_id,
    'title' : 'My Page Like Ad',
  };
  return (new AdAccount(ad_account_id)).createAdCreative(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('creative api call complete.', result);
  creative_id = result.id;
  const fields = [
  ];
  const params = {
    'status' : 'PAUSED',
    'adset_id' : ad_set_id,
    'name' : 'My Ad',
    'creative' : {'creative_id':creative_id},
  };
  return (new AdAccount(ad_account_id)).createAd(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('ad api call complete.', result);
  ad_id = result.id;
  const fields = [
  ];
  const params = {
    'ad_format' : 'DESKTOP_FEED_STANDARD',
  };
  return (new Ad(ad_id)).getPreviews(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('adpreview api call complete.', result);
  adpreview_id = result[0].id;
})
.catch((error) => {
  console.log(error);
});

/*The response object that's provided to your callback contains a number of fields */
/*{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

*/

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     let js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {{return;}}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

</script>  */    