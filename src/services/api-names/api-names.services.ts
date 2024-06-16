import axios from 'axios';

export const getItaianSurnameMaps = async (name: string): Promise<any> => {
    const url = `https://www.cognomix.it/mappe-dei-cognomi-italiani/${name}`;
    try {
        let result = {
            value: "Desculpe, mas não foi possível localizar registro sobrenome informado!",
            status_code: 404
        }
        const response = await axios.get(url);

        response.data.split("\n").forEach((item: string) => {
            if (item.indexOf('Ci sono') > -1) {
                const list = item.replace('class="map-container"></div><p>', '').replace('</p><div', '').replace('<strong>', '').replace('</strong>', '').split(' ');
                const text = `Existem aproximadamente ${list[3]} famílias ${list[5]} na Itália.`;
                result = {
                    value: text,
                    status_code: 200
                }
            }
        });

        return result;
    } catch (error) {
        console.error('Error fetching external data', error);
        throw error;
    }

}
