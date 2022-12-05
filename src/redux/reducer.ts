// import { ThunkDispatch } from "redux-thunk";
// import { ReducerType } from "./redux-store";

// export type RowTiype = {
//   equipmentCosts: string;
//   estimatedProfit: string;
//   machineOperatorSalary: string;
//   mainCosts: string;
//   materials: string;
//   mimExploitation: string;
//   overheads: string;
//   parentId: string;
//   rowName: string;
//   salary: string;
//   supportCosts: string;
// };


// function rowReducer (state: postsTypeState = initialState, action: ProfileActionTypes): postsTypeState {
//     switch (action.type) {
//         case ADD_ROW_ID_ENITITY: {

//             let newPost: postsType = {
//                 id: v1(),
//                 message: action.newPostText,
//                 countLikes: 0
//             };
//             return {
//                 ...state,
//                 posts: [...state.posts, newPost],
//             }
//         }
//         case SET_USER_PROFILE: {
//             return {...state, profile: action.profile}
//         }
//         case SET_STATUS_PROFILE: {
//             return {...state, status: action.status}
//         }
//         case SET_STATUS_UPDATE: {
//             return {...state, status: action.status}
//         }
//         case DELETE_POST: {
//             debugger
//             // return state.posts.filter(tl => tl.id != action.postId)

//             return {...state,
//                 posts: state.posts.filter(p => p.id !== action.postId)}
//         }
//         case SET_SAVE_PHOTO:
//             return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}


//         default:
//             return state
//     }


// }
// /// ////////*********TYPES**********//////////

// const ADD_ROW_ID_ENITITY = "ADD_ROWS_ID_ENTITY";
// const SET_ROWS_ENITITY = "SET_ROWS_ENITITY";
// const ADD_ROW_ENITITY = "ADD_ROW_ENITITY";
// const SET_ROW_ENITITY_UPDATE = "SET_ROW_ENITITY_UPDATE";
// const DELETE_ROW_ENITITY = "DELETE_ROW_ENITITY";

// type addRowIdEnitityType = {
//   type: typeof ADD_ROW_ID_ENITITY;
// };

// type setRowsEnitityType = {
//   type: typeof SET_ROWS_ENITITY;
//   status: string;
// };
// type addRowEnitityType = {
//   type: typeof ADD_ROW_ENITITY;
//   postId: number | string;
// };

// type setRowEnitityUpdateType = {
//   type: typeof SET_ROW_ENITITY_UPDATE;
//   status: string;
// };
// type deleteRowEnitityType = {
//   type: typeof DELETE_ROW_ENITITY;
// };

// const initialState: RowTiype = {};

// /// ////////*********ACTIONS**********//////////

// export const addRowIdEnitityAC = (): addRowIdEnitityType => ({type: ADD_POST, newPostText})


// export const setUserProfile = (profile: ProfileType | null): setUserProfileType => ({
//     type: SET_USER_PROFILE, profile: profile

// })

// export const setStatusProfile = (status: string): setStatusProfileType => ({
//     type: SET_STATUS_PROFILE, status
// })
// export const setStatusUpdate = (status: string): setStatusUpdateType => ({
//     type: SET_STATUS_UPDATE, status
// })
// export const deletePostAC = (postId: number|string): deletePostType => ({
//     type: DELETE_POST, postId
// })
// export const setSavePhotoAC = (photo: PhotosType): setSavePhotoType => ({
//     type: SET_SAVE_PHOTO, photo
// })


// export const addPostActionCreator = (
//   newPostText: string
// ): AddPostActionCreatorType => ({ type: ADD_POST, newPostText });

// export const setUserProfile = (
//   profile: ProfileType | null
// ): setUserProfileType => ({
//   type: SET_USER_PROFILE,
//   profile: profile,
// });

// export const setStatusProfile = (status: string): setStatusProfileType => ({
//   type: SET_STATUS_PROFILE,
//   status,,
// });
// export const setStatusUpdate = (status: string): setStatusUpdateType => ({
//   type: SET_STATUS_UPDATE,
//   status,,
// });
// export const deletePostAC = (postId: number | string): deletePostType => ({
//   type: DELETE_POST,
//   postId,,
// });
// export const setSavePhotoAC = (photo: PhotosType): setSavePhotoType => ({
//   type: SET_SAVE_PHOTO,
//   photo,,
// });
