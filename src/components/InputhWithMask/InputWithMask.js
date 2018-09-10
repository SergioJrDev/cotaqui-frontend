import React from 'react';
import InputMask from 'react-input-mask';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Propriedades
// mask - Máscara (Formato 99/99/9999, 999.999.999-99)
// maskChar - Caractere padrão que preenche o valor
// formatChars - Valores permitidos(Formato formatChars: { '9': '[0-9]', 'a': '[A-Za-z]' })
// Doc https://github.com/sanniassin/react-input-mask

class InputWithMask extends React.Component {
  render() {
    return (
      <InputMask {...this.props}>
        {inputProps => <FormControl type="text" {...inputProps} />}
      </InputMask>
    );
  }
}

InputWithMask.propTypes = {
  value: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  formatChars: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default InputWithMask;
