# Pitang Class 2026

## Sobre o Projeto

O projeto **Pitang Class 2026** é uma aplicação web desenvolvida para fins educacionais e demonstração de boas práticas no desenvolvimento de software moderno. Ele utiliza tecnologias de ponta para criar uma interface de usuário interativa e responsiva, com foco em desempenho, escalabilidade e experiência do usuário.

A aplicação está disponível online e pode ser acessada através do seguinte link:

[**Pitang Class 2026 - Deploy**](https://pitang-class-2026-beta.vercel.app/)

---

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **[React](https://reactjs.org/):** Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida e moderna para projetos web.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática ao código.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utilitário para estilização rápida e eficiente.
- **[TanStack Router](https://tanstack.com/router):** Biblioteca para gerenciamento de rotas no React.
- **[Vercel](https://vercel.com/):** Plataforma de deployment para aplicações web modernas.

---

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
packages/
  pitang-frontend/
    public/         # Arquivos estáticos
    src/            # Código-fonte principal
      components/   # Componentes reutilizáveis
      hooks/        # Hooks customizados
      lib/          # Funções utilitárias e APIs
      routes/       # Configuração de rotas e páginas
    package.json    # Configurações do projeto e dependências
    vite.config.ts  # Configuração do Vite
    vercel.json     # Configuração do deployment no Vercel
```

---

## Funcionalidades

- **Autenticação:**
  - Login e registro de usuários.
  - Gerenciamento de autenticação com hooks customizados.

- **Dashboard:**
  - Visualização de dados e funcionalidades principais.
  - Navegação entre diferentes seções, como produtos e usuários.

- **Design Responsivo:**
  - Interface otimizada para dispositivos móveis e desktops.

- **Roteamento Avançado:**
  - Gerenciamento de rotas utilizando o TanStack Router.

---

## Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fcc2187/pitang-class-2026.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd pitang-class-2026/packages/pitang-frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse a aplicação no navegador em:
   ```
   http://localhost:3000
   ```

6. Para gerar o build de produção:
   ```bash
   npm run build
   ```

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias ou correções.

---

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
