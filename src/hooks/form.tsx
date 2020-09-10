import React, { createContext, useCallback, useState, useContext } from 'react';

interface FormState {
  // name?: string;
  // email?: string;
  // birthdate?: string;
  // gender?: string[];
  // profession?: string;
  // income?: string;
  // phone?: string;
  // zipCode?: string;
  // state?: string;
  // city?: string;
  // address?: string;
  // complement?: string;
  // avatar?: string;
  // bio?: string;
  client: object;
}

interface FormContextData {
  client: object;
  submitClient(data: FormState): void;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

export const FormProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<FormState>({} as FormState);

  const submitClient = useCallback(
    (data: FormState) => {
      setClient(Object.assign(data, client));
    },
    [client],
  );

  return (
    <FormContext.Provider value={{ client, submitClient }}>
      {children}
    </FormContext.Provider>
  );
};

export function useForm(): FormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within an FormProvider');
  }

  return context;
}
