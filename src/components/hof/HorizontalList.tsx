import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';
import styled from 'styled-components';

const HorizontalList: React.FC<Props> = props => {
  const {children, onPressAll} = props;

  return (
    <Container>
      <Header>
        <Pressable onPress={onPressAll}>
          <Text style={styles.textButton}>{'더보기'}</Text>
        </Pressable>
      </Header>
      <List>{React.cloneElement(children, {isHorizontal: true})}</List>
    </Container>
  );
};
export default HorizontalList;

type Props = {
  children: React.ReactElement;
  onPressAddBtn: () => void;
  onPressAll: () => void;
};

const Container = styled(View)`
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0 20px;
`;
const Header = styled(View)`
  width: 100%;
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const List = styled(View)`
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 15,
    color: 'blue',
  },
});
