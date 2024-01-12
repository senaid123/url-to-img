const bulkImageUpload = async (imageArray, token, link, fileFieldName) => {
    if (imageArray[0] !== undefined) {
      const formData = new FormData();
      imageArray = imageArray.filter((url) => url.trim() !== '');
  
      await Promise.all(
        imageArray.map(async (url, index) => {
          try {
            const response = await fetch(url);
            const blob = await response.blob();
            formData.append(fileFieldName, blob, `image${index + 1}.png`);
          } catch (error) {
            throw new Error(`Error fetching or processing image ${index + 1}: ${error.message}`);
          }
        })
      );
  
      try {
        await fetch(link, {
          method: 'POST',
          headers: {
            Authorization: token,
          },
          body: formData,
        });
      } catch (error) {
        throw new Error('Something went wrong during the upload: ' + error.message);
      }
    }
  };
  
  const uploadImages = async (imageArray, token, link, fileFieldName) => {
    await Promise.all(
      imageArray.map(async (url, index) => {
        const formData = new FormData();
        const trimmedUrl = url.trim();
  
        try {
          const response = await fetch(trimmedUrl);
          const blob = await response.blob();
          formData.append(fileFieldName, blob, `image${index}.jpg`);
        } catch (error) {
          throw new Error(`Error fetching or processing image ${index}: ${error.message}`);
        }
  
        try {
          await fetch(link, {
            method: 'POST',
            headers: {
              Authorization: token,
            },
            body: formData,
          });
        } catch (error) {
          console.log('Error uploading image:', error.message);
        }
      })
    );
  };
  
  const uploadImage = async (imageUrl, token, link, fileFieldName) => {
    const formData = new FormData();
    const trimmedUrl = imageUrl.trim();
  
    try {
      const response = await fetch(trimmedUrl);
      const blob = await response.blob();
      formData.append(fileFieldName, blob, 'image.jpg');
    } catch (error) {
      throw new Error(`Error fetching or processing image: ${error.message}`);
    }
  
    try {
      await fetch(link, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: formData,
      });
    } catch (error) {
      throw new Error('Error uploading image: ' + error.message);
    }
  };
  
module.exports = {bulkImageUpload, uploadImages, uploadImage};