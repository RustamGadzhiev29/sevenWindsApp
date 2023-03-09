import { Form, Input } from "antd";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { DomainDataType } from "../../types/types";
import { useTypedDispatch } from "../../redux/Store";
import {
  setEditRowAC,
  updateRowThunkCreator,
  createRowThunkCreator,
  deleteRowThunkCreator,
  createRowAC,
} from "../../redux/Reducer";

import folder from "../../common/icons/folder.svg";
import deleteLogo from "../../common/icons/delete.svg";

import style from "./EditeableRow.module.scss";

type EditableRawPropsType = {
  row: DomainDataType;
  parentId: null | number;
};

export const EditableRow = React.memo(
  ({ row, parentId }: EditableRawPropsType) => {
    const [editeRow, setEditeRow] = useState(row);

    const [styles, setStyle] = useState({ display: "none" });

    // const [title, setTitle] = useState(row);
    const dispatch = useTypedDispatch();

    const onAddRowHendler = (parId: number | null) => {
      console.log(parId);
      // dispatch(createLocalRowAC(parId));
      // dispatch(createRowThunkCreator(editeRow, parentId));
      dispatch(
        createRowAC(
          {
            id: 0,
            parentId: parId,
            rowName: "string",
            total: 0,
            salary: 1,
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
          parId,
        ),
      );
      // setEdit(true);
    };
    const onRemoveRowHendler = (id: number) => {
      dispatch(deleteRowThunkCreator(id));
      // setEdit(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newTitle = e.currentTarget.value;
      const { name, value } = e.target;
      const list: DomainDataType = row;
      // @ts-ignore
      list[name as keyof typeof row] = value;
      setEditeRow(list);
      console.log(list);

      // setTitle(newTitle);`
    };

    const onDoubleClickHandler = (id: number) => {
      dispatch(setEditRowAC(id, true));
    };

    const onPressEnter = (id: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (id !== 0) {
        dispatch(setEditRowAC(id, false));
        dispatch(updateRowThunkCreator(editeRow));
        // console.log(id);
      } else {
        dispatch(setEditRowAC(id, false));
        dispatch(createRowThunkCreator(editeRow, id));
      }
    };

    return row.edite ? (
      <>
        <td>
          {parentId === null && (
            <button type="button" onClick={() => onAddRowHendler(parentId)}>
              <img src={folder} alt="logo" />
            </button>
          )}
          <button type="button" onClick={() => onAddRowHendler(row.id)}>
            <img src={folder} alt="logo" />
          </button>
          <button type="button" onClick={() => onRemoveRowHendler(row.id)}>
            <img src={deleteLogo} alt="logo" />
          </button>{" "}
        </td>
        <td>
          <Form>
            <Form.Item name="value" initialValue={row.rowName}>
              <Input
                name="rowName"
                onChange={onChangeHandler}
                size="middle"
                onPressEnter={(e) => onPressEnter(row.id, e)}
              />
            </Form.Item>
          </Form>
        </td>
        <td>
          <Form>
            <Form.Item name="value" initialValue={row.machineOperatorSalary}>
              <Input
                name="machineOperatorSalary"
                onChange={onChangeHandler}
                size="middle"
                onPressEnter={(e) => onPressEnter(row.id, e)}
              />
            </Form.Item>
          </Form>
        </td>
        <td>
          <Form>
            <Form.Item name="value" initialValue={row.equipmentCosts}>
              <Input
                name="equipmentCosts"
                onChange={onChangeHandler}
                size="middle"
                onPressEnter={(e) => onPressEnter(row.id, e)}
              />
            </Form.Item>
          </Form>
        </td>
        <td>
          <Form>
            <Form.Item name="value" initialValue={row.overheads}>
              <Input
                name="overheads"
                onChange={onChangeHandler}
                size="middle"
                onPressEnter={(e) => onPressEnter(row.id, e)}
              />
            </Form.Item>
          </Form>
        </td>
        <td>
          <Form>
            <Form.Item name="value" initialValue={row.estimatedProfit}>
              <Input
                name="estimatedProfit"
                onChange={onChangeHandler}
                size="middle"
                onPressEnter={(e) => onPressEnter(row.id, e)}
              />
            </Form.Item>
          </Form>
        </td>
      </>
    ) : (
      <>
        <td>
          <div
            className={style.buttonsContainer}
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
            }}
          >
            {parentId === null && (
              <button type="button" onClick={() => onAddRowHendler(parentId)}>
                <img src={folder} alt="logo" />
              </button>
            )}
            <button
              type="button"
              style={parentId !== null ? { display: "block" } : styles}
              onClick={() => onAddRowHendler(row.id)}
            >
              <img src={folder} alt="logo" />
            </button>
            <button
              type="button"
              style={styles}
              onClick={() => onRemoveRowHendler(row.id)}
            >
              <img src={deleteLogo} alt="logo" />
            </button>{" "}
          </div>
        </td>
        <td onDoubleClick={() => onDoubleClickHandler(row.id)}>
          {row.rowName}
        </td>
        <td onDoubleClick={() => onDoubleClickHandler(row.id)}>
          {row.machineOperatorSalary}
        </td>
        <td onDoubleClick={() => onDoubleClickHandler(row.id)}>
          {row.equipmentCosts}
        </td>
        <td onDoubleClick={() => onDoubleClickHandler(row.id)}>
          {row.overheads}
        </td>
        <td onDoubleClick={() => onDoubleClickHandler(row.id)}>
          {row.estimatedProfit}
        </td>
      </>
    );
  },
);
