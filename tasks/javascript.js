const shell = require("shelljs");

module.exports = function() {
  console.log("## Javascript clean ##".javascript);

  console.log("\n* watchman watch-del-all".javascript);
  shell.exec("watchman watch-del-all", { async: false });

  console.log("\n* rm -rf haste-map-react-native-packager-*".javascript);
  shell.rm("-rf", "/tmp/haste-map-react-native-packager-*");

  console.log("\n* rm -rf /tmp/metro-bundler-cache-*".javascript);
  shell.rm("-rf", "/tmp/metro-bundler-cache-*");

  console.log("\n* yarn clean cache".javascript);
  shell.exec("yarn cache clean", { async: false });

  console.log("\n* rm -rf ~/.rncache".javascript);
  shell.rm("-rf", "~/.rncache");
};
