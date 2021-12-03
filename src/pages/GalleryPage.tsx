import {RouteComponentProps} from '@reach/router';
import React from 'react';
import GallerySlider from '../components/GallerySlick';

function GalleryPage(props: RouteComponentProps) {
  return (
    <GallerySlider/>
  );
}

export default GalleryPage;
