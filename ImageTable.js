import React from 'react';

const ImageTable = ({ images }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {images.map((image, index) => (
                    <tr key={index}>
                        <td>
                            <img src={image.url} alt={image.description}></img>
                        </td>
                        <td>{image.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

const SelectedImages = () => {

    const images = [

        { url: 'image1.jpg', description: 'Image 1' },

        { url: 'image2.jpg', description: 'Image 2' },

        { url: 'image3.jpg', description: 'Image 3' },

        // Add more images as needed

    ];

    return <ImageTable images={images} />;

};

export default SelectedImages;