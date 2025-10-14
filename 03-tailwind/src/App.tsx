import "./App.css";
import { Counter } from "./components/Counter";
import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";


function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <div className='flex flex-col gap-10 justify-center items-center h-svh w-svw'>
          <h1 className='text-4xl mb-5'>Contador</h1>
          <Counter />

          <LoginPage />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
