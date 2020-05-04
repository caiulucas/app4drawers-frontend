import React from 'react';
import {Container, Image, Description, AuthorView, Author} from './styles';

const Card = ({data}) => {
  return (
    <Container>
      <Image source={{uri: data.item.img}} />
      <Description>
        Never trust in Noldor wind. Never turn back to your friends
      </Description>
      <AuthorView>
        <Author>Bilbo Baggins</Author>
      </AuthorView>
    </Container>
  );
};

export default Card;

// Make the height of an image be prorpotional to the width to define a Image height dynamicly

// onLayout={({nativeEvent}) => {
//   Image.getSize(data.item.img, (width, height) => {
//     setImageHeight(height / (width / nativeEvent.layout.width));
//     console.log(`item ${data.item.id}, height ${imageHeight}`);
//   });
// }}
