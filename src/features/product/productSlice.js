import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteProducts, fetchProducts, postProducts } from './productAPI'


export const initialState = {
   products: [],
   isLoading:false,
   postSuccess:false,
   deleteSuccess:false,
   isError:false,
   error:"",
  } 

//   .....................................................................
  export const getProducts= createAsyncThunk('products/getProduct',
    async () => {
   const products=fetchProducts();
   return products
   
  })
// ............................................................
//   .....................................................................
  export const addProducts= createAsyncThunk('products/addProduct',
    async (data) => {
   const products=postProducts(data);
   return products
   
  })
// ............................................................
//   .....................................................................
  export const removeProducts= createAsyncThunk('products/removeProduct',
    async (id,thunkAPI) => {
   const products=await deleteProducts(id);
   thunkAPI.dispatch(removeFromList(id))
   return products
   
  })
// ............................................................


 const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        togglePostSuccess:(state)=>{
            state.postSuccess=false
        },
        toggledDeleteSuccess:(state)=>{
            state.postSuccess=false
        },
        removeFromList:(state,action)=>{
            state.products=state.products.filter(product=>product._id !== action.payload)

        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.isLoading=false;
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.products=[];
            state.isLoading=false;
            state.isError=true;
            state.error=action.error.message;
        })

        .addCase(addProducts.pending,(state)=>{
            state.isLoading=true;
            state.postSuccess=false
            state.isError=false;
        })
        .addCase(addProducts.fulfilled,(state)=>{
            state.postSuccess=true
            state.isLoading=false;
        })
        .addCase(addProducts.rejected,(state)=>{
            state.products=[];
            state.isLoading=false;
            state.isError=true;
            state.postSuccess=false
          
        })
        .addCase(removeProducts.pending,(state)=>{
            state.isLoading=true;
            state.deleteSuccess=false
            state.isError=false;
        })
        .addCase(removeProducts.fulfilled,(state)=>{
            state.deleteSuccess=true
            state.isLoading=false;
        })
        .addCase(removeProducts.rejected,(state)=>{
            state.products=[];
            state.isLoading=false;
            state.isError=true;
            state.deleteSuccess=false
          
        })




    }
})

export const {togglePostSuccess,toggledDeleteSuccess,removeFromList}=productsSlice.actions
export default productsSlice.reducer;