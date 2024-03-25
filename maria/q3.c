#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

#define numero_senhas 10

// Estrutura para armazenar as senhas geradas
typedef struct {
    int senha;
    char rotulacao[10]; // "Prioridade" ou "Normal"
} Senha;

// Variáveis globais para armazenar as senhas geradas
Senha senhas[numero_senhas];
int senhasConsumidas = 0;

// Função para gerar um número de senha aleatório
int gerarSenha() {
    return rand() % 1000 + 1; // Números de 1 a 1000
}

// Função para determinar se a senha é de prioridade ou normal com base em uma probabilidade
char* determinarRotulacao() {
    int probabilidade = rand() % 100;
    if (probabilidade < 33)
        return "Prioridade";
    else
        return "Normal";
}

// Função para gerar 10 senhas
void gerarSenhas() {
    for (int i = 0; i < numero_senhas; i++) {
        senhas[i].senha = gerarSenha();
        sprintf(senhas[i].rotulacao, "%s", determinarRotulacao());
    }
    senhasConsumidas = 0;
    printf("Senhas geradas com sucesso!\n");
}

// Função para consumir uma senha
char ultimaRot[10] = "Normal";
int iUltimaSenhaConsumida;

void consumirSenha() {
    if (senhasConsumidas >= numero_senhas) {
        printf("Todas as senhas foram consumidas!\n");
        return;
    }

    int pular = senhasConsumidas;
    for(int i = 0; i <= (numero_senhas-senhasConsumidas); i++){
    
        if(!(strcmp((senhas[pular].rotulacao), ultimaRot))){
            pular++;
            continue;

        }else{
            printf("Senha consumida: %03d   Rotulação: %s\n", senhas[pular].senha, senhas[pular].rotulacao);
            senhasConsumidas++;
            strcpy(ultimaRot, senhas[pular].rotulacao);
            iUltimaSenhaConsumida = pular;

            for(int n = 0 ; n < ((int)(sizeof(senhas))-senhasConsumidas) ; n++){
                int i =0;
                if(n == iUltimaSenhaConsumida){
                    continue;
                }else{
                    senhas[i] = senhas[n];
                    i++;
                }

            }
            break;
        }
    }
    

    
}

// Função para mostrar as senhas restantes
void mostrarSenhasRestantes() {
    printf("Senhas restantes:\n");
    for (int i = 0; i < numero_senhas; i++) {

        printf("Senha: %03d   Rotulação: %s\n", senhas[i].senha, senhas[i].rotulacao);
    }
}

int main() {
    srand(time(NULL)); // Inicializa o gerador de números aleatórios com uma semente diferente

    int opcao;
    do {
        printf("\nMenu:\n");
        printf("1. Gerar 10 senhas\n");
        printf("2. Consumir senha\n");
        printf("3. Mostrar senhas restantes\n");
        printf("4. Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                gerarSenhas();
                break;
            case 2:
                consumirSenha();
                break;
            case 3:
                mostrarSenhasRestantes();
                break;
            case 4:
                printf("Encerrando o programa...\n");
                break;
            default:
                printf("Opção inválida! Tente novamente.\n");
        }
    } while (opcao != 4);

    return 0;
}