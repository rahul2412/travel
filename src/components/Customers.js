import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableFooter } from '@material-ui/core';
import { TablePagination } from '@material-ui/core';

function Customers(props) {
    const customers = props.customers
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const findMaxBid = customer => {
        let bids = []
        for (let i = 0; i < customer.bids.length; i++)
            bids.push(customer.bids[i].amount)
        bids.sort()
        if (bids.length === 0) return 0
        else return bids[bids.length - 1]
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Customer name</b></TableCell>
                        <TableCell align="left"><b>Email</b></TableCell>
                        <TableCell align="left"><b>Phone</b></TableCell>
                        <TableCell align="left"><b>Premium</b></TableCell>
                        <TableCell align="left"><b>Max/Min bid</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.length > 0 && customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>{customer.firstname + " " + customer.lastname}&nbsp;&nbsp;&nbsp;
                                    <img src={customer.avatarUrl} alt={"Customer" + customer.id} height={45} width={45} />
                                </TableCell>
                                <TableCell align="left">{customer.email}</TableCell>
                                <TableCell align="left">{customer.phone}</TableCell>
                                <TableCell align="left">{"" + customer.hasPremium}</TableCell>
                                <TableCell align="left">{findMaxBid(customer)}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
                {customers.length > 0 &&
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[3, 5, 10]}
                                colSpan={3}
                                count={customers.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                }
            </Table>
        </TableContainer>
    );
}

export default Customers