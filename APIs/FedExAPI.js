/// FedExAPI.js
const FedExTokenURL = 'https://apis-sandbox.fedex.com/oauth/token';
const FedExAPIURL = 'https://apis-sandbox.fedex.com/rate/v1/rates/quotes';
const clientID = 'l7e33208f16cfc4271832109587df4951c'; 
const clientSecret = 'ceb1d6226b854dd48ef40ea1d6d73a85'; 

export const fetchFedExToken = async () => {
  const body = new URLSearchParams();
  body.append('grant_type', 'client_credentials');
  body.append('client_id', clientID);
  body.append('client_secret', clientSecret);

  try {
    const response = await fetch(FedExTokenURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error fetching FedEx token:', error);
    throw error;
  }
};

export const callFedExRatesAPI = async (accessToken) => {
    console.log("Access Token: " + accessToken);

    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };


  const requestBody = {

    "accountNumber": {
        "value": "740561073"
    },
    "requestedShipment": {
        "shipper": {
            "address": {
                "postalCode": 78660,
                "countryCode": "US"
            }
        },
        "recipient": {
            "address": {
                "postalCode": 46256,
                "countryCode": "US"
            }
        },
        "pickupType": "DROPOFF_AT_FEDEX_LOCATION",
        "rateRequestType": [
            "ACCOUNT",
            "LIST"
        ],
        "requestedPackageLineItems": [
            {
                "weight": {
                    "units": "LB",
                    "value": 2
                }
            }
        ]
    }
  };
  try {
    const response = await fetch(FedExAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    console.log("FedEx Rates Response:", JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error('Error calling FedEx Rates API:', error);
    throw error;
  }
};