// $(document).ready(function(){
//     const avatar = $('#avatar');
//     const nome = $('#name');
//     const nomeDeUsuario = $('#username');
//     const repositorio = $('#repos');
//     const seguidores = $('#followers');
//     const seguindo = $('#following');
//     const link = $('#link');

//     const endpoint = 'https://api.github.com/users/mikghl';

//     $.ajax(endpoint).done(function(git) {
//         nome.text(git.name);
//         nomeDeUsuario.text(git.login);
//         repositorio.text(git.public_repos);
//         seguidores.text(git.followers);
//         seguindo.text(git.following);
//         link.attr('href', git.html_url);
//         avatar.attr('src', git.avatar_url);
//     });
// })

document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const nome = document.getElementById('name');
    const nomeDeUsuario = document.getElementById('username');
    const repositorio = document.getElementById('repos');
    const seguidores = document.getElementById('followers');
    const seguindo = document.getElementById('following');
    const link = document.getElementById('link');

    const endpoint = 'https://api.github.com/users/mikghl';

    try {
        fetch(endpoint).then(function(git) {
                return git.json();
            })
            .then(function(git) {
                nome.innerText = git.name;
                nomeDeUsuario.innerText = git.login;
                repositorio.innerText = git.public_repos;
                seguidores.innerText = git.followers;
                seguindo.innerText = git.following;
                link.href = git.html_url;
                avatar.src = git.avatar_url;
            })
            .catch(function(error) {
                console.error('Erro na requisição:', error);
                alert('Não foi possível carregar as informações do GitHub.');
            });
    } catch (error) {
        console.error('Erro ao tentar fazer a requisição:', error);
        alert('Ocorreu um erro ao tentar buscar os dados do GitHub.');
    }
});
