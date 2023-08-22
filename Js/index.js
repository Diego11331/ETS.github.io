const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.nav__list')
const links = document.querySelectorAll('.nav__link');
            
toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

        links.forEach(function(link){
            link.addEventListener('click', function(){
                //if (dropDownMenu.classList.contains("open")){
                    dropDownMenu.classList.remove('open');
                    toggleBtnIcon.classList = 'fa-solid fa-bars';
            })
        })
    }

