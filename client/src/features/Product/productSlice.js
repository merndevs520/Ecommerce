import { createSlice } from "@reduxjs/toolkit";
import {
  CreateBrand,
  CreateCatagory,
  CreateTag,
  DeleteTag,
  GetAllCatagorys,
  GetAllTag,
  GetallBrand,
  UpdateTagStatus,
  userLogout,
  userMe,
  userPasRest,
  userPasRestVerify,
} from "./productapiSlice";

//create auth slice
const ProductSlice = createSlice({
  name: "product",
  initialState: {
    brand: [],
    tag: [],
    catagory: [],
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    //get all brand
    builder.addCase(GetallBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetallBrand.fulfilled, (state, action) => {
      (state.brand = action.payload.data),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(GetallBrand.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // create brand

    builder.addCase(CreateBrand.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(CreateBrand.fulfilled, (state, action) => {
      (state.loading = false),
        (state.message = action.payload.data.message),
        state.brand.push(action.payload.data.brand);
      // localStorage.setItem("user", JSON.stringify(action.payload.data.user));
    });

    builder.addCase(CreateBrand.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });

    // create tag

    builder.addCase(CreateTag.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(CreateTag.fulfilled, (state, action) => {
      (state.loading = false),
        (state.message = action.payload.data.message),
        state.tag.push(action.payload.data.tag);
      // localStorage.setItem("user", JSON.stringify(action.payload.data.user));
    });

    builder.addCase(CreateTag.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });

    // get all tag
    builder.addCase(GetAllTag.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetAllTag.fulfilled, (state, action) => {
      (state.tag = action.payload.data),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(GetAllTag.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
    // update  tag status
    builder.addCase(UpdateTagStatus.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UpdateTagStatus.fulfilled, (state, action) => {
      // state.permission=state.permission.filter((i)=> i._id !== action.payload.data.permission)
      // state.permission.push(action.payload.data.permission),
      (state.tag[
        state.tag.findIndex((data) => data._id === action.payload.data.tag._id)
      ] = action.payload.data.tag),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(UpdateTagStatus.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // delete  tag
    builder.addCase(DeleteTag.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(DeleteTag.fulfilled, (state, action) => {
      state.tag = state.tag.filter(
        (i) => i._id !== action.payload.data.tag._id
      );
      state.message = action.payload.data.message;
    });
    builder.addCase(DeleteTag.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // get all  catagory
    builder.addCase(GetAllCatagorys.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetAllCatagorys.fulfilled, (state, action) => {
      state.catagory = action.payload.data.catagory;
      state.message = action.payload.data.message;
    });
    builder.addCase(GetAllCatagorys.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // create    catagory
    builder.addCase(CreateCatagory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreateCatagory.fulfilled, (state, action) => {
      state.catagory.push(action.payload.data.catagory);
      state.message = action.payload.data.message;
    });
    builder.addCase(CreateCatagory.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // logout

    builder.addCase(userLogout.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(userLogout.fulfilled, (state, action) => {
      (state.loading = false),
        (state.message = action.payload.data.message),
        (state.user = null);
      localStorage.removeItem("user");
    });

    // get me

    builder.addCase(userMe.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userMe.fulfilled, (state, action) => {
      (state.loading = false),
        (state.message = action.payload.data.message),
        (state.user = action.payload.data.me);
    });

    builder.addCase(userMe.rejected, (state, action) => {
      (state.loading = false), console.log(action.error.message);
      (state.error = action.error.message), (state.user = null);
      localStorage.removeItem("user");
    });

    // reset link
    builder.addCase(userPasRest.fulfilled, (state, action) => {
      state.message = action.payload.data.message;
    });
    builder.addCase(userPasRest.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // reset pass
    builder.addCase(userPasRestVerify.fulfilled, (state, action) => {
      state.message = action.payload.data.message;
    });
    builder.addCase(userPasRestVerify.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

//export

// selectors
export const getUserData = (state) => state.product;
// action
export const { setMessageEmpty } = ProductSlice.actions;
// slice
export default ProductSlice.reducer;
