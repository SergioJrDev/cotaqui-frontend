import React from "react";
import moment from "moment";

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
  observacoes
}) => (
  <div>
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
          <strong>{credito}</strong>
        </p>
      </div>
    )}
    {entrada && (
      <div style={borderBottom}>
        <span>Entrada:</span>
        <p>
          <strong>{entrada}</strong>
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
          <strong>{valorDasParcelas}</strong>
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
