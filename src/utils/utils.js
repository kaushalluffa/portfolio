import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";


     const client = sanityClient({
       projectId: import.meta.env.VITE_PROJECT_ID,
       dataset: import.meta.env.VITE_DATASET,
       useCdn: true,
     });
      const builder = imageUrlBuilder(client);
      
      
      export default function urlFor(source) {
        return builder.image(source);
      }
