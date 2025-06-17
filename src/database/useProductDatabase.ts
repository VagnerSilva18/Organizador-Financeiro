import { useSQLiteContext } from "expo-sqlite"

export type ProductDatabase = {

    codigo: number
    usuario: string
    email: string
    senha: string

}

export function useProductDatabase() {

    const database = useSQLiteContext();


    async function create(data: Omit<ProductDatabase, "codigo">) {

        const statement = await database.prepareAsync(
          "INSERT INTO usuarios (usuario, email, senha) VALUES ($usuario, $email, $senha)"
        );

        try {
            const result = await statement.executeAsync({
                $usuario: data.usuario,
                $email: data.email,
                $senha: data.senha
            })   

            return { insertedRowId: result.lastInsertRowId };
        } catch (error) {
            console.error("Erro ao inserir no banco:", error);
            throw error
        } finally{
            await statement.finalizeAsync();
        }

    }

    async function searchByName(usuario: string){
        try {
            const query = "SELECT * FROM usuarios WHERE usuario LIKE ?"

            const response = await database.getAllAsync<ProductDatabase>(query, `%${usuario}%`)

            return response
        } catch (error) {
          throw error
        }

    }

    return { create, searchByName };

}

// o metodo create não precisa do codigo, pois ele é gerado automaticamente pelo sqlite por isso use o Omit
