import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import ThemeSelect from "./themeSelect";
import { lightTheme, darkTheme } from "./theme";
import {
  Header,
  Title,
  MarkdownContainer,
  Main,
  Editor,
  Previewer
} from "./style";

let marked = require("marked");

let initialMarkdown = `
# Header 1
I just love **bold text**.
> Dorothy followed her through many of the beautiful rooms in her castle.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.

My favourite search engine is https://stackoverflow.com/
***

`;

export class MarkdownEditor extends Component {
  state = {
    markdown: initialMarkdown,
    theme: lightTheme
  };

  OnThemeChangeHandler = event => {
    let theme = event.target.value;
    theme === "lightTheme" ? (theme = lightTheme) : (theme = darkTheme);
    this.setState({ theme });
  };

  updateMarkdown = event => {
    this.setState({ markdown: event.target.value });
  };

  render() {
    let { markdown, theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Header>
          <Title>Markdown Editor</Title>
          <ThemeSelect OnThemeChangeHandler={this.OnThemeChangeHandler} />
        </Header>
        <Main>
          <MarkdownContainer>
            <Editor>
              <textarea
                id="editor"
                value={markdown}
                onChange={this.updateMarkdown}
              ></textarea>
            </Editor>
            <Previewer>
              <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              ></div>
            </Previewer>
          </MarkdownContainer>
        </Main>
      </ThemeProvider>
    );
  }
}

export default MarkdownEditor;
