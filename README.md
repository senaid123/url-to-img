This npm package provides functions for uploading images to a specified server. It supports bulk image uploads as well as uploading a single image.

## Installation


### npm install url-to-img

## Usage

```js
bulkImageUpload(imageArray, token, link, fileFieldName)
```

This function uploads multiple images in a bulk fashion. It takes an array of image URLs (imageArray), an authentication token (token), the server URL (link), and a field name for the file (fileFieldName).
The images are uploaded as FormData in a single POST request.

### Example: 

```js
const { bulkImageUpload } = require('url-to-img');

const imageArray = ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'];
const token = 'yourAuthToken';
const link = 'http://example.com/upload';
const fileFieldName = 'images';

bulkImageUpload(imageArray, token, link, fileFieldName)
  .then(() => {
    console.log('Images uploaded successfully');
  })
  .catch((error) => {
    console.error('Error uploading images:', error.message);
  });
```

###
```js
uploadImages(imageArray, token, link, fileFieldName)
```

This function uploads multiple images individually. It takes an array of image URLs (imageArray), an authentication token (token), the server URL (link),
and a field name for the file (fileFieldName). Each image is uploaded separately using a POST request.

### Example

```js
const { uploadImages } = require('url-to-img');

const imageArray = ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'];
const token = 'yourAuthToken';
const link = 'http://example.com/upload';
const fileFieldName = 'image';

uploadImages(imageArray, token, link, fileFieldName)
  .then(() => {
    console.log('Images uploaded successfully');
  })
  .catch((error) => {
    console.error('Error uploading images:', error.message);
  });
```

###

```js
uploadImage(imageUrl, token, link, fileFieldName)
```

This function uploads a single image. It takes an image URL (imageUrl), an authentication token (token), the server URL (link), and a field name for the file (fileFieldName). The image is uploaded using a POST request.

### Example:

```js
const { uploadImage } = require('url-to-img');

const imageUrl = 'http://example.com/image.jpg';
const token = 'yourAuthToken';
const link = 'http://example.com/upload';
const fileFieldName = 'image';

uploadImage(imageUrl, token, link, fileFieldName)
  .then(() => {
    console.log('Image uploaded successfully');
  })
  .catch((error) => {
    console.error('Error uploading image:', error.message);
  });
```

Feel free to customize the content, including the badges, descriptions, and examples, to best suit your package and its functionality.



