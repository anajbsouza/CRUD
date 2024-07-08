import { todoService } from '../services/todo.services';
import { Request, Response } from 'express';

async function create(req: Request, res: Response) {
    const { item } = req.body;
    const validateItem = await todoService.create(item);
    return res.status(201).send(validateItem);
}

async function read(req: Request, res: Response) {
    const item = await todoService.read();
    return res.status(200).send(item);
}

async function update(req: Request, res: Response) {
    const { item } = req.body;
    const { id } = req.params;
    const ParseId = parseInt(id);
    const validateItem = await todoService.update(ParseId, item);
    return res.status(200).send(validateItem);
}

async function deleting(req: Request, res: Response) {
    const { id } = req.params;
    const ParseId = parseInt(id);
    const validateItem = await todoService.deleting(ParseId);
    return res.status(204).send(validateItem);
}

export const todoController = {
    create,
    read,
    update,
    deleting
}