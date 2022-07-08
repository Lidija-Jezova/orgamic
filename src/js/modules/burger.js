const burger = () => {
	const toggleBtn = document.querySelector(".menu__toggle");
	const menuList = document.querySelector(".menu__list");

	toggleBtn.addEventListener("click", (e) => {
		if (e.target.closest(".menu__toggle")) {
			menuList.classList.toggle("active");
		}
	});
}


module.exports = burger;