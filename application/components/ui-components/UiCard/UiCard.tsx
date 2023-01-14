import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';

// const LeftContent = leftContentProps => <Avatar.Icon {...leftContentProps} icon="folder" />;

interface WeCardProps {
  title: string;
  source: any;
  paragraph?: string;
  subtitle?: string;
  LeftContent?: any;
  ButtonTextLeft?: string;
  ButtonLeftAction?: any;
  ButtonRightAction?: any;
  leftContentProps?: any;
}

export const UiCard = (props: WeCardProps) => {
  const { title, subtitle, paragraph, source } = props;
  return (
    <Card style={{ backgroundColor: 'transparent' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: '45%',
            padding: 1,
          }}>
          <Card.Cover source={source} />
        </View>
        <View
          style={{
            width: '55%',
            padding: 1,
          }}>
          <Card.Content>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
          </Card.Content>
          <Card.Title title={subtitle} />
        </View>
      </View>
    </Card>
  );
};
