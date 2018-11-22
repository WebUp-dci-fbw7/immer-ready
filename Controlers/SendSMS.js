import { Constants, Permissions, Contact } from "expo";
import { SMS } from "expo";
import SendSMS from "react-native-sms";

alowSMS = async () => {
  const permission = await Permissions.askAsync(
    Permissions.CONTACTS,
    Permissions.SMS
  );

  if (permission.status !== "granted") {
    // Permission was denied...
    return;
  }
  const { result } = await Expo.SMS.sendSMSAsync(
    "+4915163180836",
    "My sample HelloWorld message"
  );
};
