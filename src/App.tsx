
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from './routes';
import { AppThemeProvider } from './shared/contexts';
import { DarkTheme, LightTheme } from './shared/themes';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
