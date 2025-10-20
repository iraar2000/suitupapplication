# SuitUpApplication
# if you want to preview this application you will need to do a couple of things 
  1. download the expo application on your phone because its better to preview the app through the phone than on web in this phase
  2. run the backend api so that you can initialize database to get access to some data using:
     a. npm run devDBAccess # for database data access
     b. npm run devIMGAccess # for making image directory available through api call
  3. initialize the expo app by running
     a. npx expo start 
  4. in ECommerceApp directory under constant directory add the url provided when initialized expo and the url for api host
     format:
     export const API_HOST_DEVICE_<region_name> = {
      IPV4DB:"http://IPADDRESS:1000", 
      IPV4IMG:"http://IPADDRESS:2000",
    };
    # this is for database ip address might be similar but ports are different
  5. on device you can use camera and scan the qrcode or open expo app and hard enter the url for the initialized expo app 
