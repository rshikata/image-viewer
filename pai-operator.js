import PaiListValidator from "./pai-list-validator";
import PaiData from "./pai-data";

export default class PaiOperator {
	// 乱数で手牌のリストを作成する
	createTehaiList() {
		const paiList = Object.values(PaiData);
		const tehaiList = [];
		const validator = this._createPaiListValidator();

		while (tehaiList.length < 14) {
			const paiNumber = Math.floor(Math.random() * paiList.length);
			const paiValue = paiList[paiNumber];

			if (validator.validateNumberOfSamePai(tehaiList, paiValue)) {
				tehaiList.push(paiValue);
			}
		}

		tehaiList.sort();
		return tehaiList;
	}
	// インスタンスの作成
	_createPaiListValidator() {
		return new PaiListValidator();
	}
}
