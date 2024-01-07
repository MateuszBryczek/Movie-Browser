// import {call, put, takeLatest, delay} from 'redux-saga/effects';

// export function* listSaga({
//     actions,
//     search, 
//     getPopular,
// }) {
// function fetchListHandler ({payload:{query,page}}){
//     yield delay (500);

//     try {
// const response = yield (
//     query?.trim()
//     ?call(search,{page,query})
//     :call(getPopular,{page})
// );

// yield put (actions.fetchSuccess({
// data: response.results.data,
// pagination: {
//     page:response.results.data.page,
//     totalPages: response.results.data.total_pages,
//     totalResults: response.results.data.total_results,
// },
// }));
// }catch (error){
// yield put(actions.fetchError());
// }
// }
// yield takeLatest(actions.fetch.type, fetchListHandler);
// }
