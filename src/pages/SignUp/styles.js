import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: space-around;
`;

export const Header = styled.View`
  margin: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 36px;
`;

export const Form = styled.View`
  margin: 0 30px;
`;

export const Label = styled.Text`
  font-weight: bold;
  margin-top: 20px;
`;

export const Input = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-radius: 25px;

  margin: 25px 0;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #ff6277;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
