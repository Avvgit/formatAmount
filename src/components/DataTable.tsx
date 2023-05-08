import React from "react";
import Table from "./atoms/Table";
import TableCell from "./atoms/TableCell";
import TableHead from "./atoms/TableHead";
import { DataRow } from "../MockData";
import InfoBox from "./atoms/InfoBox";
import styled from "styled-components";

interface DataTableProps {
  data: DataRow[];
}

const TableContainer = styled.div`
  display: flex;
`;

// formatAmount function toma la moneda y monto como argumentos y devuelve el monto formateado.
const formatAmount = (currency: string, amount?: number): string => {
  if (amount === undefined) {
    return "";
  }

  const formatter = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: currency === "UF" ? 2 : 0,
    maximumFractionDigits: currency === "UF" ? 2 : 0,
  });

  return formatter.format(amount);
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <InfoBox>
        <p>
          <b>formatAmount:</b> Es la funcion para validar y formatear
          automáticamente los montos en la columna "Monto" según la moneda
          recibida. Toma la moneda y el monto como argumentos y devuelva el
          monto correspondiente formateado segun:
        </p>
        <hr />
        <ul>
          <li>CLP, EUR, USD sin decimales. Ejemplo: 1990645 = 1.990.645</li>
          <li>UF con dos decimales. Ejemplo: 700.58 = 700,58</li>
        </ul>
        <p>
          Para formatear los montos se utilizó la función Intl.NumberFormat().
        </p>
        <hr />
        <p>
          <b>Nota:</b> Se define los Type Amount: number; | 1990645 | 700.58 |
        </p>
      </InfoBox>
      <Table>
        <thead>
          <tr>
            <TableHead>ID</TableHead>
            <TableHead>Moneda</TableHead>
            <TableHead>Monto</TableHead>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.currency}</TableCell>
              <TableCell>{formatAmount(row.currency, row.amount)}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
