//  get the Promissions to access the Location

import { Constants, Location, Permissions } from "expo";
import { PermissionsAndroid, Alert } from "react-native";
// get the User Location using Expo

const _getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") {
    return;
  }
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION00,
    {
      title: " permission to send your location  "
    }
  );

  if (permission.status !== "granted") {
    // Permission was denied...

    Alert.alert(" Permission was denied...");
    return;
  }
  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    Alert.alert(" Permission was denied...");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});

  if (location) {
    return location;
  }
};

export default _getLocationAsync;
