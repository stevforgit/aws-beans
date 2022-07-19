import mongoose, { Schema, Document } from 'mongoose';

export interface ICar extends Partial<Document> {
    name: string
}

const CarSchema: Schema = new Schema({
    name: { type: String, required: true },
});

// Export the model and return your IUser interface
export default mongoose.model<ICar>('Car', CarSchema);