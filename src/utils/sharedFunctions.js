import dayjs from "dayjs";

export const filterByKey = (data, key, value) => {
  return data.filter((item) => item[key] === value);
};

export const filterBySearch = (data, searchTerm) => {
  return data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm)
    )
  );
};

export const priorityColor = (priority) => {
  return priority === "low"
    ? "success"
    : priority === "medium"
    ? "warning"
    : "error";
};

export const validatePayload = (payload) => {
  return Object.values(payload).every(
    (value) => value !== "" && value !== null && value !== undefined
  );
};

export const formatDate = (date) => {
  return dayjs(date).format("MMM D, YYYY");
};

export const formatDateForm = (date) => {
  return dayjs(date).format("MM/DD/YYYY");
};

export const isDeadlinePassed = (deadline) => {
  return dayjs(deadline).isBefore(dayjs()); 
};
