import React from 'react';
import {View, Text} from 'react-native';
import HeaderScrollView from '../../components/HeaderScrollView';
import HeaderImage from '../../components/HeaderImage';
import {HEADER_IMAGE_HEIGHT} from '../../components/HeaderImage';

const ProfileScreen = () => {
  const renderList = () => {
    const views = [];
    for (let i = 0; i < 100; i++) {
      views.push(
        <View style={{backgroundColor: 'white'}}>
          <Text>{'테스트'}</Text>
        </View>,
      );
    }
    return views;
  };
  return (
    <HeaderScrollView
      header={<HeaderImage title={'테스트'} />}
      headerHeight={HEADER_IMAGE_HEIGHT}
      headerMinHeight={0}
      onScroll={() => {}}>
      {renderList()}
    </HeaderScrollView>
  );
};
export default ProfileScreen;
