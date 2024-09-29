import React, { useEffect } from "react";
import { useCustomers } from "../hooks/useCustomers";
import {
    Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
export const Customers = () => {
  const { customers, getCustomers } = useCustomers();
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>#</StyledTableCell>
          <StyledTableCell align="right">Customer Name</StyledTableCell>
          <StyledTableCell align="right">Phone Number</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {customers.map((customer, index) => (
          <StyledTableRow key={customer.id}>
            <StyledTableCell component="th" scope="row">
              {index+1}
            </StyledTableCell>
            <StyledTableCell align="right">{customer.name}</StyledTableCell>
            <StyledTableCell align="right">{customer.phone}</StyledTableCell>
            <StyledTableCell align="right">{customer.email}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};
