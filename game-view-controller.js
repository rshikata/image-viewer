import ImageController from "./image-controller";
import HtmlElementCreator from "./html-element-creator";

window.onload = () => {
	const updateButton = document.getElementById("update-button");

	const controller = new ImageController("../pai-images");
	const creator = new HtmlElementCreator();

	// 初期画面の画像表示
	const initialImagePathList = controller.createTehaiImage();
	creator.imgElementCreator(initialImagePathList, "pai-images");

	// 更新ボタンのイベントリスナー登録
	updateButton.addEventListener(
		"click",
		() => {
			const imagePathList = controller.createTehaiImage();
			creator.imgElementCreator(imagePathList, "pai-images");
		},
		false
	);
};
