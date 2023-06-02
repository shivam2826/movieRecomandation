// import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import DataTable, { createTheme } from "react-data-table-component";
import { increment, selectCount } from "../features/counter/counterSlice";
import axios from "axios";
createTheme("solarized", {
    text: {
        primary: "#268bd2",
        secondary: "#2aa198"
    },
    background: {
        default: "#002b36"
    },
    context: {
        background: "#cb4b16",
        text: "#FFFFFF"
    },
    divider: {
        default: "#073642"
    },
    action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)"
    }
});

export default function Table() {
    const dispatch = useDispatch();
    const products = useSelector(selectCount);
    // const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            dispatch(increment(res.data))
        })
    }, [])


    // console.log(33, count)
    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true
        },
        {
            name: "image",
            selector: (row) => <img src={row.image} width="50px" height="50px" />,
            sortable: true
        },
    ];


    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = products.filter(
        item => item.category && item.category.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <input onChange={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div className="App">
            scscs
        </div>

    );
}
