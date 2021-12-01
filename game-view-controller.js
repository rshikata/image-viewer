import ImageController from "./image-controller";
import HtmlElementController from "./html-element-creator";

window.onload = () => {
	const updateButton = document.getElementById("update-button");

	const imageController = new ImageController("../pai-images");
	const elementController = new HtmlElementController();

	const imageView = () => {
		const imagePathList = imageController.createTehaiImage();
		elementController.addImageElement(imagePathList, "pai-images");
	};

	// 更新ボタンのイベントリスナー登録
	updateButton.addEventListener("click", imageView, false);

	try {
		imageView();
	} catch (error) {
		console.error();
	}
};
