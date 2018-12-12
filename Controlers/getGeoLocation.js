//  get the Promissions to access the Location

import { Constants, Location, Permissions } from "expo";

// get the User Location using Expo

const _getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status) {
    if (status !== "granted") {
      return;
    }
  }
  let location = await Location.getCurrentPositionAsync({});

  if (location) {
    return location;
  }
};

export default _getLocationAsync;
