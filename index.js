const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;

let access_token = '<EAAWrfva9KaQBAC5hdOFSK6wcZCboOHer8W4IICfGPlw6WZCTnN0chVAZB3wHbC3gNOLGpyKM58Em3NK1WOkJ4tCWvm99Y1ZAejyI04yCZCZCOGFwZBhEZCZBqtJNSeWAPFlY7PDJgK4eycS9hn2UX0mEaA6L7MsyR0tbPA1cEoSYRfwbcyXK0VuGa>';
let app_secret = '<APP_SECRET>';
let app_id = '<APP_ID>';
let id = '<ID>';
const api = adsSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'name' : 'My video campaign',
  'objective' : 'LINK_CLICKS',
  'status' : 'PAUSED',
};
let campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

