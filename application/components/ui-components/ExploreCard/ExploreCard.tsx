import * as React from 'react';
import {Card, Text} from 'react-native-paper';
import {Image} from 'react-native';

interface WeCardProps {
  title?: string;
  paragraph?: string;
  subtitle?: string;
  LeftContent?: any;
  ButtonTextLeft?: string;
  ButtonLeftAction?: any;
  ButtonRightAction?: any;
  leftContentProps?: any;
  source?: any;
}

export const ExploreCard = (props: WeCardProps) => {
  const {source, title} = props;
  return (
    <Card style={{height: '100%', width: '100%'}}>
      <Card.Cover
        source={source}
        resizeMode={`cover`}
        style={{
          flexDirection: 'column',
          height: '80%',
        }}
      />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
      </Card.Content>
    </Card>
  );
};
