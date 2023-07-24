import axios from 'axios';
import queryString from 'query-string';
import { AnimalInterface, AnimalGetQueryInterface } from 'interfaces/animal';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAnimals = async (query?: AnimalGetQueryInterface): Promise<PaginatedInterface<AnimalInterface>> => {
  const response = await axios.get('/api/animals', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAnimal = async (animal: AnimalInterface) => {
  const response = await axios.post('/api/animals', animal);
  return response.data;
};

export const updateAnimalById = async (id: string, animal: AnimalInterface) => {
  const response = await axios.put(`/api/animals/${id}`, animal);
  return response.data;
};

export const getAnimalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/animals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAnimalById = async (id: string) => {
  const response = await axios.delete(`/api/animals/${id}`);
  return response.data;
};
