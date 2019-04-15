import React from "react";
import moment from "moment";
import formatAndDisplay from "../../utils/formatAndDisplay";

const borderBottom = {
  borderBottom: "1px solid #e0e0e0",
  marginBottom: 10
};

const CartaDetails = ({
  administradora,
  credito,
  entrada,
  parcelas,
  valorDasParcelas,
  vencimento,
  observacoes,
  id
}) => (
  <div>
  {id && (
      <div style={borderBottom}>
        <span>ID:</span>
        <p>
          <strong>{id.toUpperCase()}</strong>
        </p>
      </div>
    )}
    {administradora && (
      <div style={borderBottom}>
        <span>Administradora:</span>
        <p>
          <strong>{administradora}</strong>
        </p>
      </div>
    )}
    {credito && (
      <div style={borderBottom}>
        <span>Crédito:</span>
        <p>
          <strong>{formatAndDisplay(credito)}</strong>
        </p>
      </div>
    )}
    {entrada && (
      <div style={borderBottom}>
        <span>Entrada:</span>
        <p>
          <strong>{formatAndDisplay(entrada)}</strong>
        </p>
      </div>
    )}
    {parcelas && (
      <div style={borderBottom}>
        <span>Parcelas</span>
        <p>
          <strong>{parcelas}</strong>
        </p>
      </div>
    )}
    {valorDasParcelas && (
      <div style={borderBottom}>
        <span>Valor das Parcelas</span>
        <p>
          <strong>{formatAndDisplay(valorDasParcelas)}</strong>
        </p>
      </div>
    )}
    {observacoes && (
      <div style={borderBottom}>
        <span>Observações</span>
        <p>
          <strong>{observacoes}</strong>
        </p>
      </div>
    )}
    {vencimento && (
      <div>
        <span>Validade</span>
        <p>
          <strong>{moment(vencimento).format("DD/MM/YYYY")}</strong>
        </p>
      </div>
    )}
  </div>
);

export default CartaDetails;
