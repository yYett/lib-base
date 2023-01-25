// CustomButton.stories.js

import CustomButton from "./CustomButton.vue";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "StyleGuide/Botão",
  component: CustomButton,
};

export const Default = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: '<CustomButton v-bind="args" />',
});

Default.args = {
  data: {
    label: "Custom Button",
    url: "",
    target: "",
  },
  btnClass: "btn--primary",
};

Default.argTypes = {
  data : {
    control: 'object',
  },
  btnClass: {
    control: "radio",
    options: ["btn--primary", "btn--secondary", "btn--tertiary"],
  },
};
