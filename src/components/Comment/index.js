import React from 'react';
import {Container, Avatar, Content, Author, Text} from './styles';

const Comment = ({avatar, author, children}) => {
  return (
    <Container>
      <Avatar source={avatar} />
      <Content>
        <Author>{author}</Author>
        <Text>{children}</Text>
      </Content>
    </Container>
  );
};

export default Comment;
