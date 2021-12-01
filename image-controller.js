import PaiOperator from "./pai-operator";

export default class ImageController {
	constructor(rootPath) {
		this._rootPath = rootPath;
	}

	// 手牌の画像ファイルパスを返す
	createTehaiImage() {
		const paiOperator = this._createPaiOperator();
		const tehaiList = paiOperator.createTehaiList();

		return this._convertToImageFilePath(tehaiList);
	}

	// 手牌リストを画像ファイルパスリストに変換
	_convertToImageFilePath(tehaiList) {
		const imagePathList = [];
		const paiKind = ["man", "sou", "pin", "ji"];
		tehaiList.forEach((value) => {
			const paiValue = value.split("-");
			const kind = paiKind[parseInt(paiValue[0])];
			const number = parseInt(paiValue[1]);
			imagePathList.push(`${this._rootPath}/${kind}${number}-66-90-l.png`);
		});
		return imagePathList;
	}

	// インスタンスの作成
	_createPaiOperator() {
		return new PaiOperator();
	}
}
