import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import pageoneimg from "../../image/pageoneimg.jpeg";
import slideime1 from "../../image/slideime1.jpg";
import slideimg2 from "../../image/slideimg2.jpg";
import Carousel from "react-material-ui-carousel";

const CenteredImage = styled('img')({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',

  width:'100%',
});

export const Pageone = () => {
  return (
    <>
      <Carousel >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CenteredImage src={pageoneimg} alt="Image" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CenteredImage src={slideime1} alt="Image" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CenteredImage src={slideimg2} alt="Image" />
        </Box>
      </Carousel>
    </>
  );
};
