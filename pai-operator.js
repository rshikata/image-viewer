import PaiListValidator from "./pai-list-validator.js";
import PaiData from "./pai-data";

export default class PaiOperator {
	createTehaiList() {
		const paiList = object.values(PaiData);
		let tehaiList = new Array(14);
		const validator = PaiListValidator();

		for (let i = 0; i < tehaiList.length; i++) {
			const paiNumber = Math.floor(Math.random() * paiList.length);
			const paiValue = paiList[paiNumber];

			if (validator.validateSamePai(tehaiList, paiValue)) {
				tehaiList[i] = paiValue;
			} else {
				i--;
			}
		}
		return tehaiList;
	}
}
