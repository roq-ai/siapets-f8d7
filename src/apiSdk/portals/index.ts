import axios from 'axios';
import queryString from 'query-string';
import { PortalInterface, PortalGetQueryInterface } from 'interfaces/portal';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPortals = async (query?: PortalGetQueryInterface): Promise<PaginatedInterface<PortalInterface>> => {
  const response = await axios.get('/api/portals', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPortal = async (portal: PortalInterface) => {
  const response = await axios.post('/api/portals', portal);
  return response.data;
};

export const updatePortalById = async (id: string, portal: PortalInterface) => {
  const response = await axios.put(`/api/portals/${id}`, portal);
  return response.data;
};

export const getPortalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/portals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePortalById = async (id: string) => {
  const response = await axios.delete(`/api/portals/${id}`);
  return response.data;
};
