export default class PaiListValidator {
	// 牌の重複が3枚以下かチェック
	validateNumberOfSamePai(paiList, targetPai) {
		let paiCounter = 0;

		paiList.forEach((pai) => {
			if (pai === targetPai) {
				paiCounter++;
			}
		});

		return paiCounter <= 2;
	}
}
