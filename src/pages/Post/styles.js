import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Image = styled.Image`
  flex: 1;
  height: ${props => props.height}px;
`;

export const PostInfo = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const AuthorView = styled.View`
  flex-direction: row;
  margin: 20px 30px;
  align-items: center;
`;

export const AuthorTextView = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const AuthorName = styled.Text`
  font-size: 20px;
`;

export const PostData = styled.Text`
  color: #666;
`;

export const Description = styled.Text`
  margin-left: 30px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const CommentsView = styled.View`
  flex: 1;
  padding: 20px 15px;
`;

export const Comment = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
`;

export const CommentAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  margin-left: 8px;
  padding: 10px 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const CommentAuthor = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CommentText = styled.Text`
  font-size: 16px;
`;

export const Input = styled.TextInput`
  background-color: #e0e0e0;
  height: 50px;
  padding-left: 15px;
  border-radius: 25px;
  margin: 10px;
`;
