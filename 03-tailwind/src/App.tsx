import "./App.css";
import { LoginPage } from "./features/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Counter } from "./features/Counter";

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="flex flex-col gap-10 justify-center items-center h-svh w-svw">
          <Counter />

          <LoginPage />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
