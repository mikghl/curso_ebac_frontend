"use strict";

var alunos = [{
  nome: 'Micael',
  nota: 5
}, {
  nome: 'Leto',
  nota: 10
}, {
  nome: 'Thorfinn',
  nota: 8
}];
function aprovados(alunos) {
  return alunos.filter(function (notaAluno) {
    return notaAluno.nota >= 6;
  });
}
var alunosAprovados = aprovados(alunos);
console.log('Os alunos aprovados são:', alunosAprovados);