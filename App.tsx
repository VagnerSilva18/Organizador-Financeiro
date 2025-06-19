import Routes from "./src/routes";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "./src/database/initializeDatabase";
import { GlobalProvider } from "./src/context/GlobalContext";

export default function App() {
  return (
    <SQLiteProvider databaseName="meubanco.db" onInit={initializeDatabase}>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </SQLiteProvider>
  );
}
