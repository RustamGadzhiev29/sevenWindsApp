/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useRef, useState } from "react";
import { InputRef, Form, Input, Table } from "antd";
import type { FormInstance } from "antd/es/form";
import style from "./TableApp.module.scss";
import { FolderFilled, FileFilled, DeleteFilled } from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  rowName: string;
  salary: string;
  equipmentCosts: string;
  overheads: string;
  estimatedProfit: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onDoubleClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  // title?: string;
  // WorksName: string;
  // sellary: string;
  // equipment: string;
  // expenses: string;
  // profit: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: Array<any>;
}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customExpandIcon = (props: any) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={style.allButtons} onMouseLeave={() => {}}>
      <FolderFilled
        className={style.icon}
        style={{ color: "#5F98F5" }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onClick={(e) => props.onExpand(props.record, e)}
      />
      <FolderFilled
        onClick={() => {}}
        className={style.icon}
        style={{ color: "#95FFAC" }}
      />
      <FileFilled
        onClick={() => {}}
        className={style.icon}
        style={{ color: "#7890B2" }}
      />
      <DeleteFilled
        onClick={() => {}}
        className={style.icon}
        style={{ color: "#DF4444" }}
      />
    </div>
  );
};

const TableApp: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: "1",
      id: 1,
      rowName: "WorksName",
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
      children: [
        {
          key: "11",
          id: 11,
          rowName: "WorksName",
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
          // WorksName: "WorksName",
          // sellary: "sellary",
          // equipment: "equipment",
          // expenses: "expenses",
          // profit: "profit",
          children: [
            {
              key: "12",
              id: 12,
              rowName: "WorksName",
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
              children: [],
              // WorksName: "WorksName",
              // sellary: "sellary",
              // equipment: "equipment",
              // expenses: "expenses",
              // profit: "profit",
            },
          ],
        },
      ],
    },
    {
      key: "2",
      id: 2,
      rowName: "WorksName",
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
      children: [],
    },
  ]);

  // const [count, setCount] = useState(2);

  // const handleDelete = (key: React.Key) => {
  //   const newData = dataSource.filter((item) => item.key !== key);
  //   setDataSource(newData);
  // };

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: "Уровень",
      dataIndex: "title",
      width: "30%",
      editable: false,
    },
    {
      title: "Наименование работ",
      dataIndex: "rowName",
      editable: true,
      width: "30%",
    },
    {
      title: "Основная з/п",
      dataIndex: "salary",
      editable: true,
      width: "30%",
    },
    {
      title: "Оборудование",
      dataIndex: "equipmentCosts",
      editable: true,
      width: "30%",
    },
    {
      title: "Накладные расходы",
      dataIndex: "overheads",
      editable: true,
      width: "30%",
    },
    {
      title: "Сметная прибыль",
      dataIndex: "estimatedProfit",
      editable: true,
      width: "30%",
    },
    // {
    //   title: "operation",
    //   dataIndex: "operation",
    //   render: (record: { key: React.Key }) =>
    //     dataSource.length >= 1 ? (
    //       // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    //       <a onClick={() => handleDelete(record.key)}>del</a>
    //     ) : null,
    //   // },
    //   //   render: () => (
    //   //     <span>This gonna be rendered in each row of the table</span>
    //   //   ),
    // },
  ];

  // const handleAdd = () => {
  //   const newData: DataType = {
  //     key: count,
  //     title: "title",
  //     WorksName: "WorksName",
  //     sellary: "sellary",
  //     equipment: "equipment",
  //     expenses: "expenses",
  //     profit: "profit",
  //     children: [
  //       {
  //         key: "2",
  //         title: "Уровень",
  //         WorksName: "WorksName",
  //         sellary: "sellary",
  //         equipment: "equipment",
  //         expenses: "expenses",
  //         profit: "profit",
  //       },
  //       {
  //         key: "2",
  //         title: "Уровень",
  //         WorksName: "WorksName",
  //         sellary: "sellary",
  //         equipment: "equipment",
  //         expenses: "expenses",
  //         profit: "profit",
  //       },
  //     ],
  //   };
  //   setDataSource([...dataSource, newData]);
  //   setCount(count + 1);
  // };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => {
      return row.id === item.id;
    });
    // console.log(row.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div>
      <div className={style.title}>
        <span>Строительно-монтажные работы</span>
      </div>
      {/* <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button> */}
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        dataSource={dataSource}
        columns={columns as ColumnTypes}
        expandIcon={({ expanded, onExpand, record }) =>
          customExpandIcon({ expanded, onExpand, record })
        }
        defaultExpandAllRows
      />
    </div>
  );
};

export default TableApp;
