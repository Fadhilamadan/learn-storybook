import { ComponentStory, ComponentMeta } from "@storybook/react";
import { theme } from "@chakra-ui/theme";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import Button from "components/Button";
import { HStack } from "@chakra-ui/react";

export default {
  title: "Components / Button",
  component: Button,
  argTypes: {
    ...getThemingArgTypes(theme, "Button"),
    children: { type: "string" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  colorScheme: "blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  colorScheme: "gray",
};

export const WithVariants = () => (
  <HStack spacing="24px">
    <Button colorScheme="teal" variant="solid">
      Button
    </Button>
    <Button colorScheme="teal" variant="outline">
      Button
    </Button>
    <Button colorScheme="teal" variant="ghost">
      Button
    </Button>
    <Button colorScheme="teal" variant="link">
      Button
    </Button>
    <Button colorScheme="teal" variant="unstyled">
      Button
    </Button>
  </HStack>
);
