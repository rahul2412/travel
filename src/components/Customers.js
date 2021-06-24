import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Customers(props) {
    const customers = props.customers
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Premium</TableCell>
                        <TableCell align="left">Max/Min bid</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.length > 0 && customers.map((customer) => (
                        <TableRow key={customer.id}>
                            <TableCell>{customer.firstname + " " + customer.lastname}&nbsp;&nbsp;&nbsp;
                                <img src={customer.avatarUrl} alt={"Customer" + customer.id} height={45} width={45} />
                            </TableCell>
                            <TableCell align="left">{customer.email}</TableCell>
                            <TableCell align="left">{customer.phone}</TableCell>
                            <TableCell align="left">premium</TableCell>
                            <TableCell align="left">Amount</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Customers