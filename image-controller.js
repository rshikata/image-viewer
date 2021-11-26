import PaiOperator from "./pai-operator.js";
import OperatePai from "./pai-operator.js";

export default class ImageChanger {
	createTehaiImage() {
		const operator = new PaiOperator();
		const tehaiList = operator.createTehaiList();

		let imagePathList = new Array();
		const paiKind = ["man", "sou", "pin", "ji"];
		tehaiList.forEach((value) => {
			const paiValue = value.split("-");
			const kind = paiKind[parseInt(paiValue[0])];
			const number = parseInt(paiValue[1]);
			imagePathList.push(`pai-images/${kind}${number}-66-90-l.png`);
		});

		return imagePathList;
	}
}
