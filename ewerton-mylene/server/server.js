import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import client from './mongodb.js';

dotenv.config();

const app = express();

// Configurar CORS para aceitar múltiplas origens
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
  'https://www.ewertonemylene.com.br',
  'https://ewertonemylene.com.br',
  'https://ewertonemylene.vercel.app',
];

const corsOptions = {
  origin: function (origin, callback) {
    // Em produção, aceita qualquer origem (será mais específico se necessário)
    if (process.env.NODE_ENV === 'production') {
      // Aceita qualquer origem em produção
      callback(null, true);
    } else {
      // Em dev, valida a lista
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

const db = client.db('ewerton-mylene');
const rsvpsCollection = db.collection('rsvps');

// Conectar ao MongoDB
client
  .connect()
  .then(() => console.log('MongoDB conectado'))
  .catch((error) => console.error('Erro ao conectar MongoDB:', error));

// Rota para salvar RSVP
app.post('/api/rsvps', async (req, res) => {
  try {
    const rsvp = {
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await rsvpsCollection.insertOne(rsvp);
    res.status(201).json({
      success: true,
      message: 'RSVP salvo com sucesso',
      data: {
        _id: result.insertedId,
        ...rsvp,
      },
    });
  } catch (error) {
    console.error('Erro ao salvar RSVP:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao salvar RSVP',
      error: error.message,
    });
  }
});

// Rota para buscar todos os RSVPs
app.get('/api/rsvps', async (req, res) => {
  try {
    const rsvps = await rsvpsCollection.find({}).toArray();
    res.json({
      success: true,
      count: rsvps.length,
      data: rsvps,
    });
  } catch (error) {
    console.error('Erro ao buscar RSVPs:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar RSVPs',
      error: error.message,
    });
  }
});

// Rota para buscar RSVP por ID
app.get('/api/rsvps/:id', async (req, res) => {
  try {
    const { ObjectId } = await import('mongodb');
    const rsvp = await rsvpsCollection.findOne({ _id: new ObjectId(req.params.id) });
    
    if (!rsvp) {
      return res.status(404).json({
        success: false,
        message: 'RSVP não encontrado',
      });
    }
    res.json({
      success: true,
      data: rsvp,
    });
  } catch (error) {
    console.error('Erro ao buscar RSVP:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar RSVP',
      error: error.message,
    });
  }
});

// Rota para atualizar RSVP
app.put('/api/rsvps/:id', async (req, res) => {
  try {
    const { ObjectId } = await import('mongodb');
    const result = await rsvpsCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          ...req.body,
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' }
    );

    if (!result.value) {
      return res.status(404).json({
        success: false,
        message: 'RSVP não encontrado',
      });
    }

    res.json({
      success: true,
      message: 'RSVP atualizado com sucesso',
      data: result.value,
    });
  } catch (error) {
    console.error('Erro ao atualizar RSVP:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar RSVP',
      error: error.message,
    });
  }
});

// Rota para deletar RSVP
app.delete('/api/rsvps/:id', async (req, res) => {
  try {
    const { ObjectId } = await import('mongodb');
    const result = await rsvpsCollection.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'RSVP não encontrado',
      });
    }

    res.json({
      success: true,
      message: 'RSVP deletado com sucesso',
    });
  } catch (error) {
    console.error('Erro ao deletar RSVP:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao deletar RSVP',
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
