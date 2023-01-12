import * as React from 'react';
import {Card, Text} from 'react-native-paper';

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

export const ExploreEventCard = (props: WeCardProps) => {
  const {source, title} = props;
  return (
    <Card
      style={{
        height: '80%',
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      }}>
      <Card.Cover
        source={source}
        resizeMode={`cover`}
        style={{
          flexDirection: 'column',
          height: 150,
          width: '100%',
        }}
      />
      <Card.Content style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="titleLarge">{title}</Text>
      </Card.Content>
    </Card>
  );
};
