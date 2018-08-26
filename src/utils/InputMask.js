import React from "react";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

class InputWithMask extends React.Component {
  render() {
    return (
      <InputMask {...this.props}>
        {inputProps => <TextField {...inputProps} />}
      </InputMask>
    );
  }
}

InputWithMask.propTypes = {
  value: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  formatChars: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

export default InputWithMask;
