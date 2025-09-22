document.addEventListener('DOMContentLoaded', ()=>{
    //Mode Toggle logic
    const toggleButton = document.getElementById('theme-toggle');
    const rootDocument = document.documentElement;

    //Icons for dark & light modes respectively
    const moonIcon = document.getElementById('dark-mode');
    const sunIcon = document.getElementById('light-mode');

    //Save Theme to localStorage and 'remember' on refresh or re-visits
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        rootDocument.classList.add(savedTheme);
        updateIcons();
    }

    toggleButton.addEventListener('click',()=>{
        if(rootDocument.classList.contains('dark')){
            rootDocument.classList.remove('dark');
            localStorage.setItem('theme','light');
        }else{
            rootDocument.classList.add('dark');
            localStorage.setItem('theme','dark');
        };
        updateIcons();
    });
    function updateIcons() {
        if (rootDocument.classList.contains('dark')) {
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }else{
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }
    };

})