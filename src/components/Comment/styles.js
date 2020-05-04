import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
`;

export const Avatar = styled.Image`
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

export const Author = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;
