import { adaptItem} from '../utils/utils';

export const getItems = async (resources= import.meta.env.VITE_RESOURCE) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = `${baseUrl}${resources}`;

        const headers = { 'Content-Type': 'application/json' };
        if (import.meta.env.VITE_API_TOKEN) {
            headers['Authorization'] = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
        }

        const response = await fetch(url, { headers });
        if (!responde-ok) throw new Error('Error en la solicitud');

        const data = await responde.json();

        const items = (data.results || data.data || data ||[]);
        return items.map((item) => adaptItem(item, baseUrl));
    } catch (error) {
        console.error('Error en fetch', error);
        return [];
    }
};