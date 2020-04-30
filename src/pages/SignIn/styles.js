import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: space-around;
`;

export const Text = styled.Text`
  color: #ccc;
  font-weight: bold;
  font-size: 14px;
`;

export const Logo = styled.View`
  align-items: center;
`;

export const LogoText = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  font-size: 42px;
`;

export const Form = styled.View`
  margin: 0 30px;
`;

export const Label = styled(Text)`
  color: #000;
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

export const NewUserView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const SignUpText = styled(Text)`
  color: #2d9cdb;
`;

export const ForgotPasswordView = styled(NewUserView)`
  justify-content: flex-end;
  margin-top: 25px;
`;
