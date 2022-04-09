import { FormControl, FormLabel, Input as InputChakra, InputProps as InputPropsChakra } from "@chakra-ui/react";

interface InputProps extends InputPropsChakra{
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputChakra
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
  </FormControl>
  );
}
