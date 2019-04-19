/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.cotaquionline.com.br/#/"
                className={classes.block}
              >
                Início
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.cotaquionline.com.br/#/cartas-contempladas/novas"
                className={classes.block}
                
              >
                Comprar Cota Nova
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.cotaquionline.com.br/#/cartas-contempladas/imoveis"
                className={classes.block}
                
              >
                Comprar Cota de Imóvel
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.cotaquionline.com.br/#/cartas-contempladas/veiculos"
                className={classes.block}
                
              >
                Comprar Cota de Veículos
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.cotaquionline.com.br/#/seja-parceiro"
                className={classes.block}
                
              >
                Seja Parceiro
              </a>
            </ListItem>
       <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.cotaquionline.com.br/#/vender-cota"
                className={classes.block}
                
              >
                Vender Cota
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
