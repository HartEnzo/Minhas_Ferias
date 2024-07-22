const prompt = require('prompt-sync')();
let atividadesPorDia = {};

function gerenciarAtividadesFerias() {
    while (true) {
        let opcao = prompt(`
Escolha uma opção:
1 - Adicionar atividade para um dia
2 - Ver atividades de um dia
3 - Atualizar atividades de um dia
4 - Remover atividades de um dia
5 - Sair `);

        switch (opcao) {
            case '1':
                adicionarAtividade();
                break;
            case '2':
                verAtividades();
                break;
            case '3':
                atualizarAtividades();
                break;
            case '4':
                removerAtividades();
                break;
            case '5':
                console.log("Encerrando o programa...");
                return;
            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    }
}
function adicionarAtividade() {
    let dia = prompt("Digite o dia que deseja adicionar a atividade:");
    let atividade = prompt("Digite a atividade que realizou neste dia:");

    if (!atividadesPorDia[dia]) {
        atividadesPorDia[dia] = [];
    }
    atividadesPorDia[dia].push(atividade);

    console.log(`Atividade adicionada com sucesso para o dia ${dia}`);
}
function verAtividades() {
    let dia = prompt("Digite o dia que deseja ver as atividades:");
    if (atividadesPorDia[dia]) {
        console.log(`Atividades do dia ${dia}:`);
        atividadesPorDia[dia].forEach(atividade => {
            console.log(`- ${atividade}`);
        });
    } else {
        console.log(`Nenhuma atividade encontrada para o dia ${dia}`);
    }
}
function atualizarAtividades() {
    let dia = prompt("Digite o dia que deseja atualizar as atividades:");
    if (atividadesPorDia[dia]) {
        console.log(`Atividades atuais do dia ${dia}:`);
        atividadesPorDia[dia].forEach(atividade => {
            console.log(`- ${atividade}`);
        });

        let novaAtividade = prompt("Digite a nova atividade para substituir as existentes:");
        atividadesPorDia[dia] = [novaAtividade];

        console.log(`Atividades atualizadas com sucesso para o dia ${dia}`);
    } else {
        console.log(`Nenhuma atividade encontrada para o dia ${dia}`);
    }
}
function removerAtividades() {
    let dia = prompt("Digite o dia que deseja remover as atividades:");
    if (atividadesPorDia[dia]) {
        delete atividadesPorDia[dia];
        console.log(`Atividades do dia ${dia} removidas com sucesso.`);
    } else {
        console.log(`Nenhuma atividade encontrada para o dia ${dia}`);
    }
}
gerenciarAtividadesFerias();

