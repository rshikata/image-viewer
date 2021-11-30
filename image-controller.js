import PaiOperator from "./pai-operator";

export default class ImageController {
	constructor(rootPath) {
		this.rootPath = rootPath;
	}

	// 手牌の画像ファイルパスを返す
	createTehaiImage() {
		const operator = new PaiOperator();
		const tehaiList = operator.createTehaiList();

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
			imagePathList.push(`${this.rootPath}/${kind}${number}-66-90-l.png`);
		});
		return imagePathList;
	}
}
