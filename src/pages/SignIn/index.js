import React from 'react';
import {TextInput, TouchableOpacity, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  LogoText,
  Text,
  Label,
  Input,
  Form,
  ForgotPasswordView,
  SubmitText,
  NewUserView,
  SignUpText,
  SubmitButton,
} from './styles';

import logo from '../../assets/logo.png';

const SignIn = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Logo>
        <Image source={logo} />
        <LogoText>Bem-Vindo!</LogoText>
      </Logo>

      <Form>
        <Label>Email</Label>
        <Input>
          <TextInput placeholder="Digite seu email" />
          <Icon name="email" size={18} color="#FF6277" />
        </Input>

        <Label>Senha</Label>
        <Input>
          <TextInput placeholder="Digite sua senha" />
          <Icon name="lock" size={18} color="#FF6277" />
        </Input>

        <ForgotPasswordView>
          <TouchableOpacity>
            <Text>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </ForgotPasswordView>

        <SubmitButton>
          <SubmitText>ENTRAR</SubmitText>
        </SubmitButton>

        <NewUserView>
          <Text>Usuário Novo? </Text>
          <TouchableOpacity>
            <SignUpText>Cadastre-se aqui</SignUpText>
          </TouchableOpacity>
        </NewUserView>
      </Form>
    </Container>
  );
};

export default SignIn;
