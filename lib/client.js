import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId:'qhyepn0w',
    dataset:'production',
    apiVersion:'2023-03-08',
    useCdn:true,
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);