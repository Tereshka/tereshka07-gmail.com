import React, { useContext } from 'react';
import { Context } from '../Context';

import Image from '../components/Image';
import { getClass } from '../utils';

function Photos() {
  const { allPhotos } = useContext(Context);

  const imagesList = allPhotos.map((image, i) =>
    <Image key={image.id} img={image} className={getClass(i)} />
  );

  return (
    <main className="photos">
      {imagesList}
    </main>
  )
}

export default Photos;