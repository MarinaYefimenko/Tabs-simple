function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabparrent = document.querySelector(tabsParentSelector),
        tabitems = document.querySelectorAll(tabsSelector),
        contents = document.querySelectorAll(tabsContentSelector);

    function hideHeaderContent() {
        contents.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabitems.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showHeaderContent(i = 0) {
        contents[i].classList.add('show', 'fade');
        contents[i].classList.remove('hide');
        tabitems[i].classList.add(activeClass);
    }

    hideHeaderContent();
    showHeaderContent();

    tabparrent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains(tabsSelector.slice(1))) {
            tabitems.forEach((item, i) => {
                if (event.target == item) {
                    hideHeaderContent();
                    showHeaderContent(i);
                }
            });
        }
    });
}

export default tabs;