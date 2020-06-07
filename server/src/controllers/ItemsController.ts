import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
        //SELECT * FROM ITEMS
    
        //O processo de serializar significa modificar um conjunto de dados que foi requisitado e adicionar, remover ou editar algo, nesse caso adicionar a rota da imagem.
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;