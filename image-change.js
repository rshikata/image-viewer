let update_button = document.getElementById("update");
update_button.addEventListener("click", image_change, false);

// 乱数で表示牌を変更
function image_change() {
	for (let i = 0; i < 14; i++) {
		let number = Math.floor(Math.random() * 7) + 1;
		document.getElementById(
			`pai_${i}`
		).src = `pai-images/ji${number}-66-90-l.png`;
	}
}
