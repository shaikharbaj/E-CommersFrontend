import React, { useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid'
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from '../../../components/Loader/Loader'
import styles from './allproduct.module.css'
import { clearErrors, clearMessage, deleteShopProduct, getAllShopProduct } from "../../Product/ProductSlice";
import { errorToast, successToast } from "../../../utils/toastMessage";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { products, isLoading,error,message} = useSelector((state) => state.product);
  const { seller } = useSelector((state) => state.shop);
  useEffect(() => {
    dispatch(getAllShopProduct(seller._id));
  }, [dispatch]);

  //for popup notification........
  useEffect(()=>{
        if(error)
        {
            errorToast(error);
            dispatch(clearErrors())
        }
        if(message){
             successToast(message);
             dispatch(clearMessage());
        }
  },[message,error]);

  const handleDelete=(id)=>{
      try {
        dispatch(deleteShopProduct(id));
      } catch (error) {
        console.log(error);
      }
  }

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.8,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
            <button style={{width:"100%",backgroundColor:"inherit",border:"none",textAlign:'right'}}>
              <AiOutlineEye size={20} />
            </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <button style={{width:"100%",backgroundColor:"inherit",border:"none",textAlign:'right'}} onClick={()=>handleDelete(params.id)}>
            <AiOutlineDelete size={20} />
            </button>
          </>
        );
      },
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.table_container}>
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}

    </>
  )
}

export default AllProduct