import { createContext, useContext, useState } from "react";

interface Ingodo {
  id?: string;
  userid: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinancialContextType {
  records: Ingodo[];
  addRecord: (record: Ingodo) => void;
  updateRecord: (id: string, newRecord: Ingodo) => void;
  deleteRecord: (id: string) => void;
}

export const FinancialContext = createContext<FinancialContextType | undefined>(
  undefined
);

export const FinancialProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<Ingodo[]>([]);

  const addRecord = (record: Ingodo) => {
    setRecords([...records, record]);
  };

  return (
    <FinancialContext.Provider value={{ records, addRecord }}>
      {children}
    </FinancialContext.Provider>
  );
};

export const useFinancialRecords = () => {
  const context = useContext<FinancialContextType | undefined>(
    FinancialContext
  );
  if (!context) {
    throw new Error(
      "useFinancialRecords must be used within a FinancialProvider"
    );
  }
  return context;
};
