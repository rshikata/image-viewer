export default class HtmlElementController {
	// img要素を作成し、追加する
	addImageElement(imagePathList, elementId) {
		const contentArea = document.getElementById(elementId);
		contentArea.innerHTML = "";

		imagePathList.forEach((imagePath) => {
			const imageElement = document.createElement("img");
			imageElement.src = imagePath;
			contentArea.appendChild(imageElement);
		});
	}
}
