import * as React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import {View} from 'react-native';

// const LeftContent = leftContentProps => <Avatar.Icon {...leftContentProps} icon="folder" />;

interface WeCardProps {
  title?: string;
  paragraph?: string;
  subtitle?: string;
  LeftContent?: any;
  ButtonTextLeft?: string;
  ButtonLeftAction?: any;
  ButtonRightAction?: any;
  leftContentProps?: any;
}

export const ExploreCard = (props: WeCardProps) => {
  const {title, subtitle, paragraph} = props;
  return (
    <Card>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: '40%',
            padding: 1,
          }}>
          <Card.Cover source={require('../../../assets/alexa.png')} />
        </View>
        <View
          style={{
            width: '60%',
            padding: 1,
          }}>
          <Card.Content>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
          </Card.Content>
          <Card.Title
            title={subtitle}
            subtitle="Card Subtitle"
            // left={LeftContent}
          />
        </View>
      </View>
    </Card>
  );
};
