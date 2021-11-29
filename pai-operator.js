import PaiListValidator from "./pai-list-validator";
import PaiData from "./pai-data";

export default class PaiOperator {
	// 乱数で手牌のリストを作成する
	createTehaiList() {
		const paiList = Object.values(PaiData);
		let tehaiList = new Array(14);
		const validator = new PaiListValidator();

		for (let i = 0; i < tehaiList.length; i++) {
			const paiNumber = Math.floor(Math.random() * paiList.length);
			const paiValue = paiList[paiNumber];

			if (validator.validateNumberOfSamePai(tehaiList, paiValue)) {
				tehaiList[i] = paiValue;
			} else {
				i--;
			}
		}
		tehaiList.sort();
		return tehaiList;
	}
}
