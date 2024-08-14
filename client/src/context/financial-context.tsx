import { createContext, useContext, useState } from "react";

export interface Ingodo {
  _id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinancialContextType {
  records: Ingodo[];
  addRecord: (record: Ingodo) => void;
  // updateRecord: (id: string, newRecord: Ingodo) => void;
  // deleteRecord: (id: string) => void;
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

  const addRecord = async (record: Ingodo) => {
    const response = await fetch("http://localhost:3001/financial-records", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (error) {
      console.log(error);
    }
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

// not finished yet
// tomorrow i will check
// tomorrOW AGAIN
