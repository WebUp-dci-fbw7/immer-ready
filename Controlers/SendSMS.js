import { Constants, Permissions, Contact } from "expo";
import { SMS } from "expo";
import SendSMS from "react-native-sms";

async function alowSMS(number) {
  const permission = await Permissions.askAsync(
    Permissions.CONTACTS,
    Permissions.SMS
  );

  if (this.state.errorMessage) {
    text = this.state.errorMessage;
  } else if (this.state.latitude && this.state.longitude) {
    this.state.latitude = JSON.stringify(this.state.latitude);
    this.state.longitude = JSON.stringify(this.state.longitude);
  }

  if (permission.status !== "granted") {
    // Permission was denied...
    return;
  }

  const { result } = await Expo.SMS.sendSMSAsync(
    number,
    `https://www.google.com/maps/@${latitude},${longitude},17z`
  );
}
export default alowSMS;
