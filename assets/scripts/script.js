function setActiveTab(number) {
    var tabs = document.getElementById('tabs').children;
    var views = document.getElementById('views').children;
    for(i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        views[i].classList.remove('active');
    }
    tabs[number - 1].classList.add('active');
    views[number - 1].classList.add('active');
}