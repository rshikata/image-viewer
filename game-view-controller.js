import ImageController from "./image-controller";

window.onload = () => {
	const updateButton = document.getElementById("update");

	// 更新ボタンのイベントリスナー登録
	updateButton.addEventListener(
		"click",
		() => {
			const controller = new ImageController();
			const imagePathList = controller.createTehaiImage();

			const contentArea = document.getElementById("pai-images");
			contentArea.innerHTML = "";

			imagePathList.forEach((imagePath) => {
				const imgElement = document.createElement("img");
				imgElement.src = imagePath;
				contentArea.appendChild(imgElement);
			});
		},
		false
	);

	// 初期画面の画像表示
	const initialEvent = new Event("click");
	updateButton.dispatchEvent(initialEvent);
};
