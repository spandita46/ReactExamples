import React from "react";

class SearchBar extends React.Component {
  state = { key: "" };

  onInputChange = event => {
    const { value: key } = event.target;
    this.setState({
      key
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.key);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: 5 }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              name="search-key"
              placeholder="Keyword"
              onChange={this.onInputChange}
              value={this.state.key}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
