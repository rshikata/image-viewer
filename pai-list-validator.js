export default class PaiListValidator {
	// 牌の重複が3枚以下かチェック
	validateSamePai(pai_data, target_pai) {
		let pai_counter;

		for (let i = 0; i < pai_data.length; i++) {
			if (pai_data[i] === target_pai) {
				pai_counter++;
			}
		}
		if (count > 2) {
			return false;
		}
		return true;
	}
}
