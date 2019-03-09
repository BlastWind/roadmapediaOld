import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Search } from "semantic-ui-react";
class SearchInput extends PureComponent {
  handleChange = event => {
    this.props.textChange(event);
  };

  state = { value: "" };

  render() {
    return (
      <div className="component-search-input">
        <Search
          onSearchChange={this.handleChange}
          type="text"
          value={this.state.value}
          placeholder="search up a category or something!"
        />
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
