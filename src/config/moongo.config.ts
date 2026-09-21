import mongoose from 'mongoose';

export async function connectDB(): Promise<void> {
    try {
        const uri = process.env.DB_URI;
        if (!uri) {
            throw new Error('DB_URI no está definida en el archivo .env');
        }
        await mongoose.connect(uri);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}