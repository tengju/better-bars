
import * as a1lib from "@alt1/base";
import Ability from "@alt1/ability";

const appConfig = require("!file-loader?name=[name].[ext]!./appconfig.json");
require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./Prayer.png");



//You can reach exports on window.TEST because of
//config.makeUmd("testpackage", "TEST"); in webpack.config.ts
var img = a1lib.captureHoldFullRs();
const ability = new Ability([]);
export function capture() {
	ability.actionbarReader.find(img);
	return ability.actionbarReader.read();
}

if (window.alt1) {
	//tell alt1 about the app
	//this makes alt1 show the add app button when running insane the embedded browser
	//also updates app settings if they are changed
	alt1.identifyAppUrl(appConfig.configUrl);
}