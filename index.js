import { registerRootComponent } from "expo";
import InitialSetup from "./components/Preferences";
import Estimate from "../Shipping/components/Estimate";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
