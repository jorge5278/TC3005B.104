module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extiende Jest con más aserciones
    testEnvironment: 'jsdom', // Entorno de prueba adecuado para componentes de React
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transforma archivos de JSX usando Babel
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // Maneja importaciones de estilos
    }
  };
  