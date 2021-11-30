export default class HtmlElementCreator {
	// img要素を作成し、追加する
	imgElementCreator(imagePathList, elementId) {
		const contentArea = document.getElementById(elementId);
		contentArea.innerHTML = "";

		imagePathList.forEach((imagePath) => {
			const imgElement = document.createElement("img");
			imgElement.src = imagePath;
			contentArea.appendChild(imgElement);
		});
	}
}
