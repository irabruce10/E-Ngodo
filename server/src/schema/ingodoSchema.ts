import mongoose from "mongoose";

interface Ingodo {
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

const ingodoSchema = new mongoose.Schema<Ingodo>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

const ingodoModel = mongoose.model<Ingodo>("Ingodo", ingodoSchema);

export default ingodoModel;
