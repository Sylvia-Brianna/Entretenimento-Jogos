const botaoDark = document.getElementById('toggle-dark');

// Verifica se tem no localStorage seleção do dark theme
if (localStorage.getItem('data-theme') == 'dark') {
  botaoDark.checked = true;
}

botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if (!botaoDark.checked){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});