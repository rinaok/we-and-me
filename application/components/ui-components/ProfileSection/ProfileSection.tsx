import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ProfileSectionProps {
  title?: string;
  items?: Array<string>;
  item?: string;
}

export const ProfileSection = (props: ProfileSectionProps) => {
  const {title, item, items} = props;
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>
        {items?.map(it => (
          <Text style={styles.sectionItem}>{it}</Text>
        ))}
        {item && <Text style={styles.sectionItem}>{item}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  sectionContent: {
    opacity: 0.7,
    marginTop: 6,
  },
  sectionItem: {
    marginVertical: 4,
  },
});
