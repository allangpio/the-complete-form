import React from 'react';
import { FormProvider } from './form';

const AppProvider: React.FC = ({ children }) => {
  return <FormProvider>{children}</FormProvider>;
};

export default AppProvider;
