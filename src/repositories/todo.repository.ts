import { db } from '../database/database';

async function create(item: string) {
    const result = await db.query(
        `INSERT INTO todos (item) VALUES ($1) RETURNING *`,
        [item]
    );
    return result.rows[0];
}

async function read() {
    const result = await db.query(`SELECT * FROM todos`);
    return result.rows;
}

async function findById(id: number) {
    const result = await db.query(`SELECT * FROM todos WHERE id = $1`, [id]);
    return result.rows[0];
}

async function update(id: number, item: string) {
    const result = await db.query(
        `UPDATE todos SET item = $1 WHERE id = $2 RETURNING *`,
        [item, id]
    );
    return result.rows[0];
}

async function deleting(id: number) {
    const result = await db.query(
        `DELETE FROM todos WHERE id = $1 RETURNING *`,
        [id]
    );
    return result.rowCount > 0;
}

export const todoRepository = {
    create,
    read,
    findById,
    update,
    deleting
};
