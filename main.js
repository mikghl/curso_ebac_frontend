$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        if (cep.length < 8) {
            alert('Digite um CEP válido');
            return;
        }

        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        fetch(endpoint).then(function(resposta) {
            if (!resposta.ok) {
                throw new Error('Erro na requisição: ' + resposta.statusText);
            }
            return resposta.json();
        }).then(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        }).catch(function(error) {
            alert('Ocorreu um erro: ' + error.message);
        }).finally(function() {
            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 500);
        });
    });

    $('#formulario-pedido').submit(function(evento) {
        evento.preventDefault();
        try {
            if ($('#nome').val().length == 0) {
                throw new Error('Digite seu nome');
            }
        } catch (error) {
            alert('Erro no formulário: ' + error.message);
        }
    });
});
