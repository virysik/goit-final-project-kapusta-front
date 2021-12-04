// import axios from 'axios';

// export async function transactionsByDay(credentials) {
//   const transactions = await axios.get('/transactions/', {
//     params: credentials,
//   });
//   return transactions;
// }

// export async function outgoingTransaction(credentials) {
//   const { data } = await axios.post('/transactions/outgoings', credentials);
//   return data;
// }

// export async function incomingTransaction(credentials) {
//   const { data } = await axios.post('/transactions/incomings', credentials);
//   return data;
// }

// export async function incTransDate(credentials) {

// const { data } =  await axios.get('/transactions/incomings/date', {
//         params: credentials,
// });
//     return data;
// };

// export async function outTransDate (credentials) {
// const { data } = await axios.get('/transactions/outgoings/date', {
//         params: credentials,
// });
//     return data;
// };

// export async function deleteTransaction (id) {
//     await axios.delete(`/transactions/${id}`);
//     return id;
// };

// export async function detailInfo(credentials) {
//   const transactions = await axios.get('/transactions', {
//     params: credentials,
//   });
//   return transactions;
// }

// export async function detailInfoForReport(credentials) {
//   const { data } = await axios.get('/transactions/forReports', {
//     params: credentials,
//   });
//   return data;
// }

// export async function getSummaryOut(year) {
//   const { data } = await axios.get(`/transactions/outgoings?year=${year}`);
//   return data;
// }

// export async function getSummaryInc(year) {
//   const { data } = await axios.get(`/transactions/incomings?year=${year}`);
//   return data;
// }
