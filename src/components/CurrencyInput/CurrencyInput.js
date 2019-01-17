import React from "react";
import CurrencyInput from "react-currency-input";
import PropTypes from "prop-types";

/**
 * Componente de input de moeda, as propriedades obrigatórias são value e onChange.
 * A propriedade returnAsString é opcional, faz retornar o valor como string formatada ('999.999,99')
 * Retorna dois parâmetros. O primeiro é o valor como number, se returnAsString for falso, (999999.99) e o valor mascarado no segundo (R$999.999,99)
 * Doc: https://github.com/jsillitoe/react-currency-input
 *
 * @class CurrencyInput_
 * @extends {React.Component}
 */

class CurrencyInput_ extends React.Component {
  handleChange = (event, maskedValue, value) => {
    const { returnAsString } = this.props;
    const valueAsString = maskedValue.replace("R$", "");
    this.props.onChange(
      returnAsString ? valueAsString : value,
      maskedValue,
      event
    );
  };

  render() {
    const { onChange, returnAsString, label, ...otherProps } = this.props;

    return (
      <div className="custom-input input-space">
        {label && (
          <label
            className="MuiFormLabel-root-368 MuiFormLabel-filled-372 MuiInputLabel-root-363 MuiInputLabel-formControl-364 MuiInputLabel-animated-367 MuiInputLabel-shrink-366"
            data-shrink="true"
            htmlFor="status"
          >
            {label}
          </label>
        )}
        <div className="MuiInput-root-263 MuiInput-fullWidth-270 MuiInput-formControl-264_ MuiInput-underline-267 border-wrapper">
          <CurrencyInput
            prefix="R$"
            decimalSeparator=","
            thousandSeparator="."
            className="MuiInput-input-271 MuiInput-inputType-274 MuiInput-input-427 input_style__"
            onChangeEvent={this.handleChange}
            {...otherProps}
          />
        </div>
      </div>
    );
  }
}

CurrencyInput_.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  returnAsString: PropTypes.bool
};

export default CurrencyInput_;
