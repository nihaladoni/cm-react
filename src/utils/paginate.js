import _ from "lodash";

export const paginate = (items, PageNumber, pageSize) => {
  const startIndex = (PageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
