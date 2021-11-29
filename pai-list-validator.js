export default class PaiListValidator {
	// 牌の重複が3枚以下かチェック
	validateNumberOfSamePai(paiList, targetPai) {
		let paiCounter;

		paiList.forEach((pai) => {
			if (pai === targetPai) {
				paiCounter++;
			}
		});

		if (paiCounter > 2) {
			return false;
		}
		return true;
	}
}
