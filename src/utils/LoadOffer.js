import fsPromises from 'fs/promises';
import path from 'path'

const LoadOffer = async() => {
    // Get the path of the json file
    const response = path.join(process.cwd(), 'public/BundleOffer.json');
    // Read the json file
    const jsonData = await fsPromises.readFile(response);
    // Parse data as json
    const data = JSON.parse(jsonData);

    return data
};

export default LoadOffer;