import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetallBrand = createAsyncThunk("product/getallBrand", async () => {
  try {
    const response = await axios.get(`http://localhost:9000/api/v1/brand`);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const CreateBrand = createAsyncThunk(
  "product/createBrand",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:9000/api/v1/brand`,
        data,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Tag

export const CreateTag = createAsyncThunk("product/createTag", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:9000/api/v1/tag/`,
      data,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const GetAllTag = createAsyncThunk("product/GetAllTag", async () => {
  try {
    const response = await axios.get(
      `http://localhost:9000/api/v1/tag/`,

      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// update tag status
export const UpdateTagStatus = createAsyncThunk(
  "product/UpdateTagStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/v1/tag/${id}`,
        { status },

        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete tag
export const DeleteTag = createAsyncThunk("product/DeleteTag", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:9000/api/v1/tag/${id}`,

      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get all catagorys
export const GetAllCatagorys = createAsyncThunk(
  "product/GetAllCatagorys",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/v1/catagory`,

        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get all catagorys
export const CreateCatagory = createAsyncThunk(
  "product/CreateCatagory",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:9000/api/v1/catagory`,
        data,

        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  "auth/createLogout",
  async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/v1/logout/`,

        { withCredentials: true }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const userMe = createAsyncThunk("auth/userMe", async (data) => {
  try {
    const response = await axios.get("http://localhost:9000/api/v1/me", {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const userPasRest = createAsyncThunk(
  "auth/userPasRest",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/resetpassword",
        data,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const userPasRestVerify = createAsyncThunk(
  "auth/userPasRestVerify",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/resetpasswordverify",
        data,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
