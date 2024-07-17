import { todoService } from '../services/todo.services';
import { Request, Response } from 'express';

async function create(req: Request, res: Response) {
    const { item } = req.body;
    const result = await todoService.create(item);
    if (result.error) {
        return res.status(400).send({ message: result.error });
    }
    return res.status(201).send(result.data);
}

async function read(req: Request, res: Response) {
    const result = await todoService.read();
    if (result.error) {
        return res.status(404).send({ message: result.error });
    }
    return res.status(200).send(result.data);
}

async function update(req: Request, res: Response) {
    const { item } = req.body;
    const { id } = req.params;
    const parseId = parseInt(id);
    const result = await todoService.update(parseId, item);
    if (result.error) {
        if (result.error === "Item não encontrado!" || result.error === "Falha ao atualizar o item!") {
            return res.status(404).send({ message: result.error });
        }
        return res.status(400).send({ message: result.error });
    }
    return res.status(200).send(result.data);
}

async function deleting(req: Request, res: Response) {
    const { id } = req.params;
    const parseId = parseInt(id);
    const result = await todoService.deleting(parseId);
    if (result.error) {
        if (result.error === "Item não encontrado!" || result.error === "Falha ao deletar o item!") {
            return res.status(404).send({ message: result.error });
        }
        return res.status(400).send({ message: result.error });
    }
    return res.status(204).send(result.message);
}

export const todoController = {
    create,
    read,
    update,
    deleting
};
