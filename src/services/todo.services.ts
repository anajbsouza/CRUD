import { todoRepository } from "../repositories/todo.repository";

async function create(item: string) {
    if (!item || item.length === 0 || item === '') throw new Error("O campo está vazio!");
    const validateItem = await todoRepository.create(item);
    return validateItem;
}

async function read() {
    const items = await todoRepository.read();
    return items;
}

async function update(id: number, item: string) {
    if (!id) throw new Error("Id não encontrado!");
    if (!item || item.length === 0 || item === '') throw new Error("O campo está vazio!");

    const existingItem = await todoRepository.findById(id);
    if (!existingItem) throw new Error("Item não encontrado!");

    const updatedItem = await todoRepository.update(id, item);
    return updatedItem;
}

async function deleting(id: number) {
    if (!id) throw new Error("Id não encontrado!");

    const existingItem = await todoRepository.findById(id);
    if (!existingItem) throw new Error("Item não encontrado!");

    await todoRepository.deleting(id);
    return { message: "Item deletado com sucesso!" };
}

export const todoService = {
    create,
    read,
    update,
    deleting
}
