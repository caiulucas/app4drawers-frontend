import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Image,
  PostInfo,
  Avatar,
  AuthorView,
  AuthorTextView,
  AuthorName,
  PostData,
  Description,
  CommentsView,
  Comment,
  CommentAvatar,
  Content,
  CommentAuthor,
  CommentText,
  Input,
} from './styles';

import author from '../../assets/author.png';
import commentAuthor from '../../assets/commentAuthor.png';

const color = '#ff6277';
const uri =
  'https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754';

const Post = () => {
  const [imageHeight, setImageHeight] = useState(0);

  return (
    <Container
      onLayout={({nativeEvent}) => {
        Image.getSize(uri, (width, height) => {
          const screenWidth = nativeEvent.layout.width;
          const newHeight =
            width > screenWidth
              ? height / (width / screenWidth)
              : height * (screenWidth / width);

          setImageHeight(Math.ceil(newHeight));
        });
      }}>
      <Image source={{uri}} resizeMode="contain" height={imageHeight} />
      <PostInfo>
        <AuthorView>
          <Avatar source={author} />
          <AuthorTextView>
            <AuthorName>Rafael Campos</AuthorName>
            <PostData>11 de abril de 2020</PostData>
          </AuthorTextView>
          <Icon name="share" size={32} color={color} />
        </AuthorView>
        <Description>
          F I N I S H Melhor vilão de todos os tempos!!!
        </Description>
      </PostInfo>
      <CommentsView>
        <Comment>
          <CommentAvatar source={commentAuthor} />
          <Content>
            <CommentAuthor>Caio Lucas</CommentAuthor>
            <CommentText>
              Muito massa! Delicinha esse seu desenho Rafael! Preciso aprender
              essas técnicas de colorido. Você é o cara. Parabéns!!!!!
            </CommentText>
          </Content>
        </Comment>

        <Comment>
          <CommentAvatar source={commentAuthor} />
          <Content>
            <CommentAuthor>Caio Lucas</CommentAuthor>
            <CommentText>
              Muito massa! Delicinha esse seu desenho Rafael! Preciso aprender
              essas técnicas de colorido. Você é o cara. Parabéns!!!!!
            </CommentText>
          </Content>
        </Comment>

        <Input placeholder="Escreva um comentário..." />
      </CommentsView>
    </Container>
  );
};

export default Post;
