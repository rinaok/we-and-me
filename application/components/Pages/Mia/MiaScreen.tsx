import * as React from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from './MiaScreen.styles';

// @ts-ignore
const MiaScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      text: '',
    }
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Age range</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Enter age range"}
          />
        )}
        name="text"
      />
      <Text style={styles.text}>What question do you always ask on a first date?</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Write your answer"}
          />
        )}
        name="text"
      />
      <Text style={styles.text}>What characteristic do you find most attractive?</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Write your answer"}
          />
        )}
        name="text"
      />
      <Text style={styles.text}>What's something you see as beeing a relationship dealbreaker?</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Write your answer"}
          />
        )}
        name="text"
      />
      <Text style={styles.text}>How would you describe yourself in three words?</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Write your answer"}
          />
        )}
        name="text"
      />
      <Text style={styles.text}>What's your ideal first date?</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Write your answer"}
          />
        )}
        name="text"
      />
       <Text style={styles.text}>If you could only eat one food for the rest of your life, what would it be?</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Write your answer"}
          />
        )}
        name="text"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
   </ScrollView>
  );
};

export default MiaScreen;
