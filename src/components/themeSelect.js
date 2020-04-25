import React from "react";
import styled from "styled-components";
import media from "./theme";

const Select = styled.select`
  margin: 2em 1em;
  padding: 0em 1em;
  font-size: 1.125em;
  border: 1px solid ${props => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: ${props => props.theme.fontFamily};

  ${media.mobile`
  padding: 0;
    font-size: 0.6875em;
  `}
`;

export const SelectOpt = styled.option`
  font-size: 0.937em;
`;

class ThemeSelect extends React.Component {
  render() {
    return (
      <div>
        <Select onChange={e => this.props.OnThemeChangeHandler(e)}>
          <SelectOpt value="lightTheme">light-theme</SelectOpt>
          <SelectOpt value="darkTheme">dark-theme</SelectOpt>
        </Select>
      </div>
    );
  }
}
export default ThemeSelect;
