// UspsAPI.js
import { parseString } from 'react-native-xml2js';

//USPS
const constructXML = (userId, password, service, zipOrigination, zipDestination, pounds, ounces, container, machinable) => {
  return `
    <RateV4Request USERID="${userId}" PASSWORD="${password}">
      <Revision>2</Revision>
      <Package ID="0">
        <Service>${service}</Service>
        <ZipOrigination>${zipOrigination}</ZipOrigination>
        <ZipDestination>${zipDestination}</ZipDestination>
        <Pounds>${pounds}</Pounds>
        <Ounces>${ounces}</Ounces>
        <Container>${container}</Container>
        <Machinable>${machinable}</Machinable>
      </Package>
    </RateV4Request>
  `;
}
export const fetchUSPSShippingData = async () => {


      
      try {
        const xmlString = constructXML("43JUNGSO12609", "", "PRIORITY", "78660", "46256", "8", "2", "", "FALSE");
        const encodedXML = encodeURIComponent(xmlString);
        const url = `https://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&XML=${encodedXML}`;

        const response = await fetch(url);
        const data = await response.text();
        
        parseString(data, function (err, result) {
          console.log(result);
          console.log(JSON.stringify(result, null, 2));
          const zipOrigination = result.RateV4Response.Package[0].ZipOrigination[0];
          console.log(zipOrigination);
          // const jsonData = JSON.stringify(result, null, 2);
          // const priorityMailRate = jsonData.RateV4Response.Package[0].Postage[0].Rate[0];
          const postages = result.RateV4Response.Package[0].Postage;

          let priorityMailRate;
          
          for (let postage of postages) {
              if (postage.MailService && postage.MailService[0].includes("Priority Mail")) {
                  priorityMailRate = postage.Rate[0];
                  break;
              }
          }
          
          if (priorityMailRate) {
              console.log(`The rate for Priority Mail is: $${priorityMailRate}`);
          } else {
              console.log("Priority Mail rate not found.");
          }
          
          if (priorityMailRate) {
              console.log(`The rate for Priority Mail is: $${priorityMailRate}`);
          } else {
              console.log("Priority Mail rate not found.");
          }
          setIsLoading(false);
          setReponse(result);
        });
      } catch (err) {
      }
    };

