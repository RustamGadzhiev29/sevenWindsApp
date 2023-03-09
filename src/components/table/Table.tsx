import React, { useEffect } from "react";

import style from "./Table.module.scss";
import Rows from "../rows/Rows";
import { useTypedDispatch, useAppSelector } from "../../redux/Store";
import { getRowsThunkCreator } from "../../redux/Reducer";

const Table: React.FC = () => {
  const tableHeaders = [
    { id: "1th", title: "Уровень", key: "name" },
    { id: "2th", title: "Наименовнаие работ", key: "value" },
    { id: "2th", title: "Основаная з/п ", key: "value" },
    { id: "2th", title: "Оборудование", key: "value" },
    { id: "2th", title: "Накладные расходы", key: "value" },
    { id: "2th", title: "Сметная прибыль", key: "value" },
  ];

  const items = useAppSelector((state) => state.data);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getRowsThunkCreator());
  }, []);

  return (
    <div className={style.tableConteainer}>
      <table className={style.table}>
        <thead>
          <tr>
            {tableHeaders.map(({ id, title }) => (
              <th key={id}>{title} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <Rows item={row} parentId={null} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
