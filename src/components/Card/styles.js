import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 5px;
  height: 350px;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  border-width: 1px;
  border-color: #d3d3d3;
`;

export const ImageView = styled.View`
  align-self: flex-start;
  border-width: 1px;
  height: auto;
  width: 100%;
`;

export const Image = styled.Image`
  flex: 1;
  height: auto;
  width: auto;
  border-radius: 10px;
`;

export const Description = styled.Text`
  margin: 15px 10px 8px 10px;
`;

export const AuthorView = styled.View`
  flex-direction: row-reverse;
`;

export const Author = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10px;
`;
