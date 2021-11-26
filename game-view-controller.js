import ImageController from "./image-controller";

window.onload = () => {
	document.getElementById("update").addEventListener(
		"click",
		() => {
			const controller = new ImageController();

			const imagePathList = controller.createTehaiImage();

			imagePathList.forEach();
		},
		false
	);
};
