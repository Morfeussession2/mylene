# Configuração MongoDB + Backend - VERCEL

## ✅ Já Configurado

O projeto foi configurado para usar:
- **MongoDB Atlas** via Vercel
- **MongoDB Driver Nativo** em vez de Mongoose
- **Pool de Conexão do Vercel** para funções serverless

## 🚀 Para Começar

### 1. Instale as dependências do servidor:
```bash
cd server
npm install
```

### 2. Inicie o servidor (em um terminal):
```bash
cd server
npm run dev
```

### 3. Inicie o frontend (em outro terminal):
```bash
npm run dev
```

## 📋 Arquivos Criados

| Arquivo | Descrição |
|---------|-----------|
| `server/server.js` | Express + Rotas da API |
| `server/mongodb.js` | Conexão com MongoDB com pool Vercel |
| `server/.env` | Variáveis de ambiente (já preenchido) |
| `server/package.json` | Dependências (MongoDB driver + @vercel/functions) |

## 🔌 Endpoints Disponíveis

```
POST   /api/rsvps    - Salvar confirmação de presença
GET    /api/rsvps    - Listar todas as confirmações
GET    /api/rsvps/:id - Buscar confirmação por ID
PUT    /api/rsvps/:id - Atualizar confirmação
DELETE /api/rsvps/:id - Deletar confirmação
```

## 📊 Estrutura dos Dados

Cada RSVP salvo contém:
```json
{
  "_id": "ObjectId",
  "data": "13/04/2026 10:30:45",
  "nome": "João Silva",
  "genero": "Homem",
  "tamanho_chinelo": "-",
  "acompanhantes": "2",
  "restricoes": "Sem açúcar",
  "mensagem": "Muito feliz em estar lá!",
  "createdAt": "2026-04-13T10:30:45Z",
  "updatedAt": "2026-04-13T10:30:45Z"
}
```

## 🔄 Para Usar `vercel env pull` (Sincronizar em Dev)

Se precisar atualizar as variáveis:
```bash
vercel env pull
```

Isso atualiza o `.env.local` na raiz. A `MONGODB_URI` no `server/.env` permanece igual (já está configurada).

## 🌍 Para Produção (Vercel)

Ao fazer deploy na Vercel:
1. A variável `STORAGE_MONGODB_URI` estará disponível automaticamente
2. No seu `vercel.json` ou variáveis da Vercel, mapeie:
   ```
   MONGODB_URI = STORAGE_MONGODB_URI
   ```

## ⚠️ Troubleshooting

Se receber erro de conexão:
1. Verifique se o `.env` tem a `MONGODB_URI` correta
2. Certifique-se que o IP está whitelisted no MongoDB Atlas
3. Confirm que `npm install` foi executado no `server/`

---

✅ Tudo está pronto! Rode `npm install` e `npm run dev` no servidor!
