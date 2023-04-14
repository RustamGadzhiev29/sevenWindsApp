import React, { FC } from "react";

import { DomainDataType } from "../../types/types";

import { EditableRow } from "../editableRow/EditableRow";

import style from "./Rows.module.scss";

type PropsType = {
  item: DomainDataType;
  parentId: null | number;
};

export const Rows: FC<PropsType> = ({ item, parentId }) => {
  return (
    <>
      <tr key={item.id} className={style.row}>
        <EditableRow row={item} parentId={parentId} />
      </tr>
      {item.child.length !== 0 &&
        item.child.map((child) => {
          return <Rows item={child} parentId={item.id} />;
        })}
    </>
  );
};
