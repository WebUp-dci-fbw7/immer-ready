//  get the Promissions to access the Location

import { Constants, Location, Permissions } from "expo";

// get the User Location using Expo

_getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") {
    this.setState({
      errorMessage: "Permission to access location was denied"
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  console.log(location);
  return location;
};

export default _getLocationAsync;
