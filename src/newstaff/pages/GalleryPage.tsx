import {RouteComponentProps} from '@reach/router';
import HTMLFlipBook from 'react-pageflip';
import Nav from '../../components/Nav';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import FLBookTest from '../components/DemoBook/FLBookTest';
import GallerySlider from '../components/GallerySlick';

function GalleryPage(props: RouteComponentProps) {
  return (
    <GallerySlider/>
  );
}

export default GalleryPage;
