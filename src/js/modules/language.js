const language = () => {
	const langMenu = document.querySelector(".lang-menu");
	const langMenuList = document.querySelector(".lang-menu__list");
	const selectedLang = document.querySelector(".lang-menu__selected-lang");

	langMenuList.addEventListener("click", (e) => {
		if (e.target.closest(".lang-menu__link")) {
			const lang = e.target.dataset.lang;
			const langName = e.target.textContent;
			e.target.dataset.lang = selectedLang.dataset.lang;
			e.target.textContent = selectedLang.textContent;
			selectedLang.dataset.lang = lang;
			selectedLang.textContent = langName;
		}
	});
}

module.exports = language;