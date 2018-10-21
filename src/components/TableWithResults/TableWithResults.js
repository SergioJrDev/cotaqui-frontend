import React from "react";
import { getAllCartas } from "../../services/cartas";
import Table from "../Table/Table";

class TableWithResults extends React.Component {
  state = {
    results: []
  };

  componentDidMount = async () => {
    try {
      const { response } = await getAllCartas();
      this.setState({
        results: Object.values(response)
      });
    } catch (error) {}
  };
  render() {
    const { results = [] } = this.state;
    const resultsFiltered = results
      .filter(result => !result.interessado)
      .slice(0, 5);
    if (resultsFiltered.length === 0) {
      return null;
    }
    return (
      <div>
        {resultsFiltered.length > 0 && (
          <Table rows={resultsFiltered.slice(0, 5)} />
        )}
      </div>
    );
  }
}

export default TableWithResults;
