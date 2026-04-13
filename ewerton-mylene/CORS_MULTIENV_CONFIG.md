# Configuração CORS e Multi-Ambiente

## ✅ O que foi configurado

O servidor agora aceita requisições de:
- ✅ `http://localhost:8080` (desenvolvimento local)
- ✅ `http://localhost:3000` (se rodar em outra porta)
- ✅ `https://www.ewertonemylene.com.br` (produção)
- ✅ `https://ewertonemylene.com.br` (sem www)
- ✅ `https://ewertonemylene.vercel.app` (Vercel)

## 🔧 Como Funciona

### Em Desenvolvimento (localhost):
```
Frontend: http://localhost:8080
Backend: http://localhost:5000
API chama: http://localhost:5000/api/rsvps
```

### Em Produção (ewertonemylene.com.br):
```
Frontend: https://www.ewertonemylene.com.br
Backend: https://api-ewerton-mylene.vercel.app
API chama: https://api-ewerton-mylene.vercel.app/api/rsvps
```

## 📋 Variáveis de Ambiente

### Frontend (.env.local):
```
VITE_API_URL=http://localhost:5000          # Dev
VITE_API_URL_PROD=https://api-ewerton-mylene.vercel.app  # Prod
```

### Backend (server/.env):
```
MONGODB_URI=<conexão do MongoDB>
PORT=5000
NODE_ENV=development
API_URL_DEV=http://localhost:5000
API_URL_PROD=https://api-ewerton-mylene.vercel.app
```

## 🚀 Para Colocar em Produção

### 1. Deploy do Backend na Vercel

Na pasta `server/`:
```bash
npm install -g vercel
vercel deploy --prod
```

Anote a URL que será criada (ex: api-ewerton-mylene.vercel.app)

### 2. Configurar Variáveis no Painel da Vercel (Backend)

Vá para Projeto > Settings > Environment Variables e adicione:
```
MONGODB_URI = seu_valor_atual
NODE_ENV = production
```

### 3. Atualizar .env.local no Frontend

```
VITE_API_URL=https://api-ewerton-mylene.vercel.app
VITE_API_URL_PROD=https://api-ewerton-mylene.vercel.app
```

### 4. Deploy do Frontend

Se for Vercel:
```bash
vercel deploy --prod
```

Se for deployar em www.ewertonemylene.com.br, configure o custom domain na Vercel.

## ✨ Detecção Automática

O frontend agora detecta automaticamente se está em:
- **Localhost** → usa `VITE_API_URL` (localhost:5000)
- **Domínio Real** → usa `VITE_API_URL_PROD` (api em produção)

Isso quer dizer que basta fazer o build uma vez e funciona em ambos os locais!

## 🧪 Teste Localmente

```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
npm run dev
```

Acesse: `http://localhost:8080`
Preencha o formulário e confirme que os dados são salvos!

## ⚠️ Troubleshooting

### Erro de CORS ainda ocorre?
1. Verifique se a URL está na whitelist do `corsOptions` em `server/server.js`
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Verifique o console do navegador (F12) para ver a URL exata

### Erro de conexão MongoDB?
1. Verifique se `MONGODB_URI` está correta
2. Confirme que o IP está whitelisted no MongoDB Atlas
3. Teste com `npm run dev` novamente

### API retorna 500?
1. Veja os logs do servidor (`npm run dev`)
2. Confirme que o MongoDB está acessível
