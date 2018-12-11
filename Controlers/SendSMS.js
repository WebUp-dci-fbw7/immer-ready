import { Constants, Permissions, Contact } from "expo";
import { SMS } from "expo";
import SendSMS from "react-native-sms";

const allowSMS = async (number, { latitude, longitude }) => {
  const permission = await Permissions.askAsync(
    Permissions.CONTACTS,
    Permissions.SMS
  );

  if (permission.status !== "granted") {
    // Permission was denied...
    return;
  }

  const { result } = await Expo.SMS.sendSMSAsync(
    number,
    `https://www.google.com/maps?z=17&q=${latitude},${longitude}/`
  );
  return result;
};
export default allowSMS;
