import { PermissionsAndroid } from "react-native";

export default async function requestPhonePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      {
        title: "Phone call permission ",
        message:
          "Immer Ready  needs access to your phone " +
          "please give us your permission so you can make direct calls ."
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
      return true;
    } else {
      console.log("Camera permission denied");
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
}
