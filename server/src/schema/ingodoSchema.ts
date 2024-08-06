import mongoose from "mongoose";

interface Ingodo {
  userid: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

const ingodoSchema = new mongoose.Schema<Ingodo>({
  userid: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

const ingodoModal = mongoose.model<Ingodo>("Ingodo", ingodoSchema);

export default ingodoModal;
