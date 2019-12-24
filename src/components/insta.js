import React from 'react';
import Image from 'gatsby-image';
import useInstagram from '../hooks/useInstagram';

const Insta = () => {
  const photos = useInstagram();
  const { username } = photos[0] || 'unknown';

  return (
    <>
      <h2>{`Instagram posts from @${username}`}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "1rem" }}>
        {photos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}`}
            style={{ height: '120px', width: '120px', display: 'block' }}
          >
            <Image fluid={photo.fluid} alt={photo.caption}  />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
