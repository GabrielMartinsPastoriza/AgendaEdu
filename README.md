# 📘 AgendaEdu - Projeto Vue + Quasar

Este é um projeto criado com **Vue.js** e **Quasar Framework**. Ele permite criar, listar e visualizar notas, com integração (em progresso) com um calendário.

---

## 🚀 Como rodar o projeto em outro computador

Siga os passos abaixo para configurar o ambiente e executar o projeto corretamente:

### 1. Clone o repositório

```bash
git clone https://seurepositorio.com/seu-projeto.git
cd seu-projeto
2. Instale o Node.js (se ainda não tiver)
Baixe e instale a versão LTS do Node.js em: https://nodejs.org

Verifique a instalação:

bash
Copy
Edit
node -v
npm -v
3. Instale o Quasar CLI (caso ainda não tenha)
bash
Copy
Edit
npm install -g @quasar/cli
Verifique se o Quasar CLI foi instalado corretamente:

bash
Copy
Edit
quasar -v
4. Instale as dependências do projeto
bash
Copy
Edit
npm install
5. Rode o projeto em modo de desenvolvimento
bash
Copy
Edit
quasar dev
6. (Opcional) Gere os arquivos para produção
bash
Copy
Edit
quasar build
📁 Estrutura do Projeto
bash
Copy
Edit
/src
│
├── /components
│   ├── NoteForm.vue        # Formulário para criar/editar nota
│   ├── NoteCard.vue        # Cartão que exibe nota individual
│   ├── TagFilter.vue       # Filtro de tags
│
├── /pages
│   ├── CreateNote.vue      # Página de criação de nota
│   ├── NotesList.vue       # Página com listagem de todas as notas
│   ├── Calendar.vue        # Página com calendário
│
├── /store
│   └── notes.js            # Store com Pinia
│
├── /router
│   └── index.js            # Configuração das rotas
│
├── App.vue
🔧 O que falta implementar?
 Função para editar notas

 Integração das notas com o calendário (atualmente não funcional)
➤ Dica: O Quasar possui um plugin de calendário.

 Criar uma página Home com mensagem de boas-vindas
➤ Exemplo: "Bem-vindo ao AgendaEdu, faça suas anotações de aula em qualquer lugar."
➤ E botões como:

Criar nova nota

Minhas notas

Abrir calendário

🧠 Observações importantes
O Vue.js é um framework orientado a componentes, assim como a Unity é para criação de jogos.
Mantenha uma estrutura organizada e reutilizável para evitar problemas ao expandir o projeto.


```
