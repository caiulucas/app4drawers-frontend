import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  TitleText,
  Form,
  Input,
  Label,
  SubmitButton,
  SubmitText,
} from './styles';

const SignUp = ({navigation}) => {
  const color = '#ff6277';

  return (
    <Container>
      <Header>
        <TitleText>Seu cadastro</TitleText>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={32} />
        </TouchableOpacity>
      </Header>

      <Form>
        <Label>Nome</Label>
        <Input>
          <TextInput placeholder="Digite seu nome" autoCapitalize="words" />
          <Icon name="person" size={18} color={color} />
        </Input>

        <Label>Email</Label>
        <Input>
          <TextInput
            placeholder="Digite seu melhor email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Icon name="mail" size={18} color={color} />
        </Input>

        <Label>Senha</Label>
        <Input>
          <TextInput placeholder="Crie uma boa senha" secureTextEntry={true} />
          <Icon name="lock" size={18} color={color} />
        </Input>

        <Label>Confirmar Senha</Label>
        <Input>
          <TextInput placeholder="Confirme sua senha" secureTextEntry={true} />
          <Icon name="vpn-key" size={18} color={color} />
        </Input>
      </Form>

      <SubmitButton>
        <SubmitText>CADASTRAR-SE</SubmitText>
      </SubmitButton>
    </Container>
  );
};

export default SignUp;
