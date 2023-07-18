import fsPromises from 'fs/promises';
import path from 'path'

const LoadProducts = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = response.json();
    // return data;

    // Get the path of the json file
    const response = path.join(process.cwd(), 'public/homeProducts.json');
    // Read the json file
    const jsonData = await fsPromises.readFile(response);
    // Parse data as json
    const data = JSON.parse(jsonData);

    return data
};

export default LoadProducts;