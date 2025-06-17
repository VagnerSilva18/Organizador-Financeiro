import Routes from "./src/routes";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "./src/database/initializeDatabase";

export default function App() {
  return (
    <SQLiteProvider databaseName="meubanco.db" onInit={initializeDatabase}>
      <Routes />
    </SQLiteProvider>
  );
}
