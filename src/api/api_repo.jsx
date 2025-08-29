import api from "./axios";

// Fetch popular Offices by type
export const getPopularOffices = async (type) => {
  const response = await api.get("/api/subscibers/popular", {
    params: { type },
  });
  return response.data.data;
};

// Register a new subscriber/agent
export const registerSubscriber = async (formData) => {
  const response = await api.post("/api/subscibers/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Fetch popular Properties with pagination and type filter
export const getPopularProperties = async (
  page = 1,
  items = 5,
  type = "عقاري" //سياحي
) => {
  const response = await api.get("/api/properties/top-rated", {
    params: {
      page,
      items,
      type,
    },
  });
  return response.data.data;
};
