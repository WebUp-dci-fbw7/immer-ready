//  get the Promissions to access the Location

import { Permissions } from "expo";

// get the User Location using Expo

_getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") {
    this.setState({
      errorMessage: "Permission to access location was denied"
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  this.setState({ location });
};
/// those line of code schuld be inside the render method
let text = "Waiting..";
if (this.state.errorMessage) {
  text = this.state.errorMessage;
} else if (this.state.location) {
  text = JSON.stringify(this.state.location);
  console.log(text);
}

module.exports = _getLocationAsync;
