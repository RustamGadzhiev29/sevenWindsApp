import rowsApi from "../api/Api";
import { DataType, DomainDataType } from "../types/types";

const GET_ROWS = "GET-ROWS";
const CREATE_ROW = "CREATE-ROW";
const CREATE_LOCAL_ROW = "CREATE-LOCAL-ROW";
const SET_EDITE_ROW = "SET-EDITE-ROW";
const UPDATE_ROW = "UPDATE-ROW";
const DELETE_ROW = "DELETE-ROW";

const initialState: Array<DomainDataType> = [];

export const reducer = (
  state: Array<DomainDataType> = initialState,
  action: ActionType
): Array<DomainDataType> => {
  switch (action.type) {
    case GET_ROWS: {
      return [...state, ...action.payload];
    }
    case CREATE_ROW: {
      const setRow = (arr: Array<DomainDataType>): Array<DomainDataType> => {
        return arr.map((ar: DomainDataType) => {
          if (ar.id !== action.payload.parentId) {
            if (ar.child) {
              return { ...ar, child: setRow(ar.child) };
            }
          }
          if (ar.id === action.payload.parentId)
            return { ...ar, child: [...ar.child, { ...action.payload.row }] };
          return ar;
        });
      };
      console.log(action.payload.parentId);

      if (action.payload.parentId === null) {
        return [
          ...state,
          {
            id: 0,
            parentId: action.payload.row.parentId,
            rowName: "string",
            total: 0,
            salary: 0,
            mimExploitation: 0,
            machineOperatorSalary: 0,
            materials: 0,
            mainCosts: 0,
            supportCosts: 0,
            equipmentCosts: 0,
            overheads: 0,
            estimatedProfit: 0,
            child: [],
            edite: true,
          },
        ];
      }
      return setRow(state);
    }
    case SET_EDITE_ROW: {
      const setEdit = (arr: Array<DomainDataType>): any => {
        return arr.map((ar) => {
          if (ar.id !== action.payload.id) {
            if (ar.child) {
              return { ...ar, child: setEdit(ar.child) };
            }
          }
          if (ar.id === action.payload.id)
            return { ...ar, edite: action.payload.edite };
          return ar;
        });
      };
      return setEdit(state);
    }
    case UPDATE_ROW: {
      const setEdit = (arr: Array<DomainDataType>): any => {
        return arr.map((ar) => {
          if (ar.id !== action.payload.id) {
            if (ar.child) {
              return { ...ar, child: setEdit(ar.child) };
            }
          }
          if (ar.id === action.payload.id)
            return {
              ...ar,
              id: action.payload.row.id,
              estimatedProfit: action.payload.row.estimatedProfit,
              overheads: action.payload.row.overheads,
              equipmentCosts: action.payload.row.equipmentCosts,
              machineOperatorSalary: action.payload.row.machineOperatorSalary,
              rowName: action.payload.row.rowName,
              edite: action.payload.row.edite,
            };
          return ar;
        });
      };
      return setEdit(state);
    }
    case DELETE_ROW: {
      const deleteRow = (arr: Array<DomainDataType>): Array<DomainDataType> => {
        return arr
          .map((ar) =>
            ar.child
              ? {
                  ...ar,
                  child: deleteRow(ar.child),
                }
              : ar
          )
          .filter((r) => r.id !== action.payload.id);
      };

      return deleteRow(state);
    }
    default:
      return state;
  }
};

export const getRowsAC = (rows: Array<DomainDataType>) =>
  ({
    type: GET_ROWS,
    payload: rows,
  } as const);

export const createRowAC = (row: DomainDataType, parentId: number | null) =>
  ({
    type: CREATE_ROW,
    payload: { row, parentId },
  } as const);

export const createLocalRowAC = (parentId: number | null) =>
  ({
    type: CREATE_LOCAL_ROW,
    payload: { parentId },
  } as const);

export const setEditRowAC = (id: number, edite: boolean) =>
  ({
    type: SET_EDITE_ROW,
    payload: {
      id,
      edite,
    },
  } as const);

export const updateRowAC = (id: number, row: DomainDataType) =>
  ({
    type: UPDATE_ROW,
    payload: {
      id,
      row,
    },
  } as const);

export const deleteRowAC = (id: number) =>
  ({
    type: DELETE_ROW,
    payload: { id },
  } as const);

export type ActionType =
  | ReturnType<typeof getRowsAC>
  | ReturnType<typeof createRowAC>
  | ReturnType<typeof createLocalRowAC>
  | ReturnType<typeof setEditRowAC>
  | ReturnType<typeof updateRowAC>
  | ReturnType<typeof deleteRowAC>;

export const getRowsThunkCreator = () => {
  return (dispatch: (action: ActionType) => void) => {
    rowsApi.getRows().then((res) => {
      dispatch(getRowsAC(res.data));
    });
  };
};

export const updateRowThunkCreator = (row: DomainDataType) => {
  return (dispatch: (action: ActionType) => void) => {
    rowsApi.updateRow(row).then((res) => {
      dispatch(updateRowAC(row.id, res));
    });
  };
};
export const createRowThunkCreator = (row: DomainDataType, id: number) => {
  return (dispatch: (action: ActionType) => void) => {
    rowsApi.createRow(row).then((res) => {
      dispatch(updateRowAC(id, res));
    });
  };
};

export const deleteRowThunkCreator = (id: number) => {
  return (dispatch: (action: ActionType) => void) => {
    rowsApi.deleteRow(id).then((res) => {
      dispatch(deleteRowAC(id));
    });
  };
};
