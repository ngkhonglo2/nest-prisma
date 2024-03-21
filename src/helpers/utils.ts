export const queryParse = (query: any) => {
  let newQuery = query;
  for (let key in query) {
    if (query.hasOwnProperty(key)) {
      try {
        query[key] = JSON.parse(query[key]); 
      } catch (error) {
        console.log('error', error);
        // Bỏ qua lỗi nếu không thể chuyển đổi thành số hoặc boolean
      }
    }
  }
  return newQuery;
};
