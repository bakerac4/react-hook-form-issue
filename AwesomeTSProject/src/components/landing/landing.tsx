import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';

const NavigationLanding = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);
  const styles = {
    container: {
      marginTop: 60,
    },
    input: {
      backgroundColor: '#CECECE',
    },
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default NavigationLanding;
