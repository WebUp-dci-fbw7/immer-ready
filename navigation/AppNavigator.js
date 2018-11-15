import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import SwitchApp from './Switch';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Secound: SwitchApp,
});
