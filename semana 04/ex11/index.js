function questao01() {
    const produto = {
        preco: 90,
        descricao: 'mouse'
    };
    console.log(produto);
}

function questao02() {
    const produto = {
        processador: 'i7',
        memoria: '16GB',
        preco: 5000,
        hd: '1TB',
        ssd: '256GB'
    }
    console.log(
        `Processador = ${produto.processador}`,
        `Memória = ${produto.memoria}`,
        `Preço = R$${produto.preco}`,
        `HD = ${produto.hd}`,
        `SSD = ${produto.ssd}`
    );
}

function questao03() {
    const aluno1 = {
        nome: 'Caio',
        nota1: 7.5,
        nota2: 6.5
    }

    const aluno2 = {
        nome: 'Larissa',
        nota1: 8.5,
        nota2: 9.7
    }

    console.log(aluno1, aluno2);

    let mediaAluno1 = (aluno1.nota1 + aluno1.nota2)/2
    let mediaAluno2 = (aluno2.nota1 + aluno2.nota2)/2

    console.log(`Média de ${aluno1.nome}: `,mediaAluno1); console.log(`Média de ${aluno2.nome}: `,mediaAluno2);

    console.log(`Média da turma: `, (mediaAluno1 + mediaAluno2)/2);

}

function questao04() {
    
    const alunos = [
        {
            nome: 'Caio',
            idade: 29,
            skills: ['Javascript', 'HTML', 'CSS']
        },

        {
            nome: 'Pedro',
            idade: 24,
            skills: ['Javascript', 'Typescript', 'React']
        },
        
        {
            nome: 'Cristina',
            idade: 19,
            skills: ['Python', 'MySQL']
        },

        {
            nome: 'Ariel',
            idade: 32,
            skills: ['Photoshop']
        },

        {
            nome: 'Mario',
            idade: 25,
            skills: ['Java', 'Figma']
        }
    ]

    function selecaoAlunos(aluno, skill) {
        let alunosFiltro = alunos.filter(function(index){
            return index.skills.includes(`${skill}`)

        })
        console.log(`Além do aluno ${aluno}, possuem a skill ${skill} os seguintes alunos: `, alunosFiltro);
    }

    selecaoAlunos('Caio','Javascript')
}