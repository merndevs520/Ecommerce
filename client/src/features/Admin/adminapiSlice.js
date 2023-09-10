import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all permisston

export const GetAllpermition = createAsyncThunk(
  "auth/GetAllpermition",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/v1/permition",

        {
          withCredentials: true,
        }
      );
      console.log("slice :" + response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);
// create   permisston

export const Createpermition = createAsyncThunk(
  "auth/Createpermition",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/permition",
        data,
        {
          withCredentials: true,
        }
      );
      console.log("slice :" + response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);
// create   permisston

export const updatepermition = createAsyncThunk(
  "auth/updatepermition",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/v1/permition/${data._id}`,
        {
          name: data.name,
        },
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);

export const updatepermitionstatus = createAsyncThunk(
  "auth/updatepermitionstatus",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/v1/permition/status/${data._id}`,
        {
          status: data.status,
        },
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);

export const permitiondelete = createAsyncThunk(
  "auth/permitiondelete",
  async (data) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/api/v1/permition/${data._id}`,

        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);

/// role

// get all roll

export const GetAllrole = createAsyncThunk("auth/GetAllrole", async () => {
  try {
    const response = await axios.get(
      "http://localhost:9000/api/v1/role",

      {
        withCredentials: true,
      }
    );
    console.log("slice :" + response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
});

// create   role

export const Createrole = createAsyncThunk("auth/Createrole", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:9000/api/v1/role",
      data,
      {
        withCredentials: true,
      }
    );
    console.log("slice :" + response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
});

export const roledelete = createAsyncThunk("auth/roledelete", async (data) => {
  try {
    const response = await axios.delete(
      `http://localhost:9000/api/v1/role/${data._id}`,

      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
});

export const updateRole = createAsyncThunk("auth/updateRole", async (data) => {
  try {
    const response = await axios.put(
      `http://localhost:9000/api/v1/role/${data._id}`,
      data,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
});

// update role status

export const updaterolestatus = createAsyncThunk(
  "auth/updaterolestatus",
  async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/v1/role/status/${data._id}`,
        {
          status: data.status,
        },
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);

// get all user

export const GetAllusers = createAsyncThunk("auth/GetAllusers", async () => {
  try {
    const response = await axios.get(
      "http://localhost:9000/api/v1",

      {
        withCredentials: true,
      }
    );
    console.log("slice :" + response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
});
// get all user

export const Createusers = createAsyncThunk(
  "auth/Createusers",
  async (data) => {
    try {
      const response = await axios.post("http://localhost:9000/api/v1/", data, {
        withCredentials: true,
      });
      // console.log("slice :" + response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);
