import { createSlice } from "@reduxjs/toolkit";
import {
  Createpermition,
  Createrole,
  Createusers,
  GetAllpermition,
  GetAllrole,
  GetAllusers,
  permitiondelete,
  roledelete,
  updateRole,
  updatepermition,
  updatepermitionstatus,
  updaterolestatus,
} from "./adminapiSlice";

//create auth slice
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    permission: [],
    role: [],
    users: [],
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    setAdminMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    // get  permition
    builder.addCase(GetAllpermition.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetAllpermition.fulfilled, (state, action) => {
      (state.permission = action.payload.data.permission),
        (state.loading = false);
      // (state.message = action.payload.data.message);
    });
    builder.addCase(GetAllpermition.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // create  permition
    builder.addCase(Createpermition.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Createpermition.fulfilled, (state, action) => {
      state.permission.push(action.payload.data.permission),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(Createpermition.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // update  permition
    builder.addCase(updatepermition.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updatepermition.fulfilled, (state, action) => {
      // state.permission=state.permission.filter((i)=> i._id !== action.payload.data.permission)
      // state.permission.push(action.payload.data.permission),
      (state.permission[
        state.permission.findIndex(
          (data) => data._id === action.payload.data.permission._id
        )
      ] = action.payload.data.permission),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(updatepermition.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
    // update  permition status
    builder.addCase(updatepermitionstatus.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updatepermitionstatus.fulfilled, (state, action) => {
      // state.permission=state.permission.filter((i)=> i._id !== action.payload.data.permission)
      // state.permission.push(action.payload.data.permission),
      (state.permission[
        state.permission.findIndex(
          (data) => data._id === action.payload.data.permission._id
        )
      ] = action.payload.data.permission),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(updatepermitionstatus.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // delete  permition
    builder.addCase(permitiondelete.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(permitiondelete.fulfilled, (state, action) => {
      state.permission = state.permission.filter(
        (i) => i._id !== action.payload.data.permission._id
      );
      state.message = action.payload.data.message;

      // state.permission.push(action.payload.data.permission),
    });
    builder.addCase(permitiondelete.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // role

    builder.addCase(GetAllrole.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetAllrole.fulfilled, (state, action) => {
      (state.role = action.payload.data.role), (state.loading = false);
      // (state.message = action.payload.data.message);
    });
    builder.addCase(GetAllrole.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
    // create  permition
    builder.addCase(Createrole.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Createrole.fulfilled, (state, action) => {
      state.role.push(action.payload.data.role),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(Createrole.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // delete  role
    builder.addCase(roledelete.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(roledelete.fulfilled, (state, action) => {
      state.role = state.role.filter(
        (i) => i._id !== action.payload.data.role._id
      );
      state.message = action.payload.data.message;

      // state.permission.push(action.payload.data.permission),
    });
    builder.addCase(roledelete.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
    // update  role status
    builder.addCase(updateRole.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateRole.fulfilled, (state, action) => {
      // state.permission=state.permission.filter((i)=> i._id !== action.payload.data.permission)
      // state.permission.push(action.payload.data.permission),
      (state.role[
        state.role.findIndex(
          (data) => data._id === action.payload.data.role._id
        )
      ] = action.payload.data.role),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(updateRole.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // update  permition status
    builder.addCase(updaterolestatus.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updaterolestatus.fulfilled, (state, action) => {
      // state.permission=state.permission.filter((i)=> i._id !== action.payload.data.permission)
      // state.permission.push(action.payload.data.permission),
      (state.role[
        state.role.findIndex(
          (data) => data._id === action.payload.data.role._id
        )
      ] = action.payload.data.role),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(updaterolestatus.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // get  all users
    builder.addCase(GetAllusers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetAllusers.fulfilled, (state, action) => {
      (state.users = action.payload.data.users), (state.loading = false);
      // (state.message = action.payload.data.message);
    });
    builder.addCase(GetAllusers.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    // create  user
    builder.addCase(Createusers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Createusers.fulfilled, (state, action) => {
      state.users.push(action.payload.data.user),
        (state.loading = false),
        (state.message = action.payload.data.message);
    });
    builder.addCase(Createusers.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
    // // update  permition
    // builder.addCase(updatepermition.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(updatepermition.fulfilled, (state, action) => {
    //   // state.permission=state.permission.filter((i)=> i._id !== action.payload.data.permission)
    //   // state.permission.push(action.payload.data.permission),
    //   (state.permission[
    //     state.permission.findIndex(
    //       (data) => data._id === action.payload.data.permission._id
    //     )
    //   ] = action.payload.data.permission),
    //     (state.loading = false),
    //     (state.message = action.payload.data.message);
    // });
    // builder.addCase(updatepermition.rejected, (state, action) => {
    //   (state.error = action.error.message), (state.loading = false);
    // });
    // // update  permition status
    // builder.addCase(updatepermitionstatus.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(updatepermitionstatus.fulfilled, (state, action) => {
    //   // state.permission=state.permission.filter((i)=> i._id !== action.payload.data.permission)
    //   // state.permission.push(action.payload.data.permission),
    //   (state.permission[
    //     state.permission.findIndex(
    //       (data) => data._id === action.payload.data.permission._id
    //     )
    //   ] = action.payload.data.permission),
    //     (state.loading = false),
    //     (state.message = action.payload.data.message);
    // });
    // builder.addCase(updatepermitionstatus.rejected, (state, action) => {
    //   (state.error = action.error.message), (state.loading = false);
    // });
    // // delete  permition
    // builder.addCase(permitiondelete.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(permitiondelete.fulfilled, (state, action) => {
    //   state.permission = state.permission.filter(
    //     (i) => i._id !== action.payload.data.permission._id
    //   );
    //   state.message = action.payload.data.message;

    //   // state.permission.push(action.payload.data.permission),
    // });
    // builder.addCase(permitiondelete.rejected, (state, action) => {
    //   (state.error = action.error.message), (state.loading = false);
    // });
  },
});

//export

// selectors
export const getAdminData = (state) => state.admin;
// action
export const { setAdminMessageEmpty } = adminSlice.actions;
// slice
export default adminSlice.reducer;
