import mongoose from 'mongoose';

const rsvpSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
      enum: ['Homem', 'Mulher', 'Outro'],
    },
    tamanho_chinelo: {
      type: String,
      default: '-',
    },
    acompanhantes: {
      type: String,
      required: true,
    },
    restricoes: {
      type: String,
      default: '',
    },
    mensagem: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'confirmado',
      enum: ['confirmado', 'cancelado'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Rsvp', rsvpSchema);
