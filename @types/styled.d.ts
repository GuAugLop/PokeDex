import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;

      text_primary: string;
      text_secondary: string;

      cards: string;

      text_button: string;

      inputs: string;
      input_text: string;
    };
    fonts: {
      title: string;
      text: string;
    };
  }
}
