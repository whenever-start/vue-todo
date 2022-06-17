// 产生 n 位数的ID
export const generateId = (n = 5) => Math.floor(Math.random() * Math.pow(10, n));

// 格式化时间：MM-DD 或 YYYY-MM-DD
export const formateTime = (timestamp) => new Date(timestamp).toLocaleString().split(' ')[0];
