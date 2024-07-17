import { todoRepository } from "../repositories/todo.repository";

async function create(item: string) {
    if (!item) return { error: "O campo está vazio!" };
    const validateItem = await todoRepository.create(item);
    return { data: validateItem };
}

async function read() {
    const items = await todoRepository.read();
    if (items.length === 0) return { error: "Ainda não há itens na lista!" };
    return { data: items };
}

async function update(id: number, item: string) {
    if (!id) return { error: "Id não encontrado!" };
    if (!item) return { error: "O campo está vazio!" };

    const existingItem = await todoRepository.findById(id);
    if (!existingItem) return { error: "Item não encontrado!" };

    const updatedItem = await todoRepository.update(id, item);
    if (!updatedItem) return { error: "Falha ao atualizar o item!" };
    return { data: updatedItem };
}

async function deleting(id: number) {
    if (!id) return { error: "Id não encontrado!" };

    const existingItem = await todoRepository.findById(id);
    if (!existingItem) return { error: "Item não encontrado!" };

    const deleted = await todoRepository.deleteById(id);
    if (!deleted) return { error: "Falha ao deletar o item!" };
    return { message: "Item deletado com sucesso!" };
}

export const todoService = {
    create,
    read,
    update,
    deleting
};
