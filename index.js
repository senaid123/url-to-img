export const uploadImages = async (imageArray, id) => {
    const token = process.env.NEXT_PUBLIC_TOKEN;
  
    if (imageArray[0] !== undefined) {
      const formData = new FormData();
      imageArray = imageArray.filter((url) => url.trim() !== '');
  
      for (let index = 0; index < imageArray.length; index++) {
        const url = imageArray[index].trim();
        try {
          const response = await fetch(
            `${url}`,
          );
          const blob = await response.blob();
          formData.append('images[]', blob, `image${index + 1}.png`);
        } catch (error) {
          throw new Error(
            `Error fetching or processing image ${index + 1}:`,
            error,
          );
        }
      }
      try {
        await fetch(
          `https://cors-anywhere-service.onrender.com/https://api.olx.ba/listings/${id}/image-upload`,
          {
            method: 'POST',
            headers: {
                
              Authorization: token,
            },
            body: formData,
          },
        );
      } catch (error) {
        throw new Error('Something went wrong: ' + error);
      }
    }
  };
  