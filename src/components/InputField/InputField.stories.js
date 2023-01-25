// InputField.stories.js

import InputField from "./InputField.vue";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "StyleGuide/Input",
  component: InputField,
};

export const Default = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<InputField v-bind="args" />',
});

export const Filled = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<InputField v-bind="args" />',
});

const argTypes = {
  value: {
    control: "text",
  },
  name: {
    control: "text",
  },
  label: {
    control: "text",
  },
  options: {
    control: "object",
  },
};

Default.args = {
  name: "name",
  label: "Label",
  options: {
    maxLength: 250,
  },
  value: "",
};
Default.argTypes = argTypes;

Filled.args = {
  name: "name",
  label: "Label",
  options: {
    maxLength: 250,
  },
  value: "Input text",
};
Filled.argTypes = argTypes;
