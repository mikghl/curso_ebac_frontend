function Eletronico(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

Eletronico.prototype.displayInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
};

////////////////////Parte do celular
function Celular(marca, modelo, ano, numCameras) {
    Eletronico.call(this, marca, modelo, ano);
    this.numCameras = numCameras;
}

Celular.prototype = Object.create(Eletronico.prototype);
Celular.prototype.constructor = Celular;

Celular.prototype.displayInfo = function() {
    Eletronico.prototype.displayInfo.call(this);
    console.log(`Número de Câmeras: ${this.numCameras}`);
};

/////////////////// Parte do notebook
function Notebook(marca, modelo, ano, tamanhoTela) {
    Eletronico.call(this, marca, modelo, ano);
    this.tamanhoTela = tamanhoTela;
}

Notebook.prototype = Object.create(Eletronico.prototype);
Notebook.prototype.constructor = Notebook;

Notebook.prototype.displayInfo = function() {
    Eletronico.prototype.displayInfo.call(this);
    console.log(`Tamanho da Tela: ${this.tamanhoTela}"`);
};

/////////////////// Por fim instancias
const celular1 = new Celular('Apple', 'iPhone 13', 2021, 3);
const notebook1 = new Notebook('Dell', 'XPS 13', 2020, 13.3);
const celular2 = new Celular('Samsung', 'Galaxy S21', 2021, 4);

celular1.displayInfo();
notebook1.displayInfo();
celular2.displayInfo();
