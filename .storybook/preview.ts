import type { Preview } from "@storybook/html";
import { themes } from "@storybook/theming";
import "./global.css";

const preview: Preview = {
  parameters: {
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: "#222529" },
      darkClass: "stb-dark",
      // Override the default light theme
      light: { ...themes.normal, appBg: "#fafafa" },
      lightClass: "stb-light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
