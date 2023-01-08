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

export const ExploreCard = (props: WeCardProps) => {
  const {source, title} = props;
  return (
    <Card>
      <Card.Cover source={source} />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
      </Card.Content>
    </Card>
  );
};
