import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 200,
        paddingTop: '20px',
    },
});

export default function Tables() {
    const classes = useStyles();

    let [tableData, setTableData] = useState([]);

    useEffect(() => {
        async function getTableData() {
            let response = await fetch('https://disease.sh/v3/covid-19/countries');
            let data = await response.json();
            setTableData(data)
        };
        getTableData();
    }, []);

    console.log(tableData)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Country Name</TableCell>
                        <TableCell align="right">Cases</TableCell>
                        <TableCell align="right">Recoverd</TableCell>
                        <TableCell align="right">Deaths</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((value,i) => {
                        return (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {value.country}
                                </TableCell>
                                <TableCell align="right">{value.cases}</TableCell>
                                <TableCell align="right">{value.recovered}</TableCell>
                                <TableCell align="right">{value.deaths}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
