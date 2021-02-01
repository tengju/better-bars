
import * as a1lib from "@alt1/base";
import Ability from "@alt1/ability";

require("!file-loader?name=[name].[ext]!./appconfig.json");
require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./Prayer.png");

var img = a1lib.captureHoldFullRs();
const ability = new Ability([]);
export function capture() {
	ability.actionbarReader.find(img);
	return ability.actionbarReader.read();
}

if (window.alt1) {
	alt1.identifyAppUrl("https://tengju.github.io/better-bars/release/appconfig.json");
}