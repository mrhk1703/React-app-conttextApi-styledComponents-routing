import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
const TableCreate = styled("div")`
  padding: 16px;
  display: inline-block;
  width: 100%;
`;
const CreateButton = styled("button")`
  color: white;
  background-color: orange;
  padding: 12px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
const TablesListContainer = styled("div")`
  padding: 20px 0px;
  display: flex;
  flex-wrap: wrap;
`;
const TablesContainer = styled("div")`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 10px;
  width: 150px;
  height: 80px;
  text-align: center;
  align-content: center;
  border-radius: 10px;
`;

export const Tables = () => {
  const [tableName, setTableName] = useState("");
  const [tableRemark, setTableRemark] = useState("");
  const [tableList, setTableList] = useState([]);
  const tableNameHandler = (event: any) => {
    setTableName(event?.target.value);
  };
  const tableRemarkHandler = (event: any) => {
    setTableRemark(event?.target.value);
  };

  useEffect(() => {
    getTables();
  }, []);
  const getTables = () => {
    const tablesLocal = localStorage.getItem("tables");
    if (tablesLocal) {
      const tables = JSON.parse(tablesLocal);
      setTableList(tables);
    }
  };
  return (
    <>
      <TableCreate>
        <TextField
          type="text"
          style={{
            marginRight: "20px",
          }}
          placeholder="Table Name..."
          slotProps={{
            htmlInput: {
              style: {
                padding: "10px",
              },
            },
          }}
          value={tableName}
          onChange={tableNameHandler}
        />
        <TextField
          type="text"
          style={{
            marginRight: "20px",
          }}
          placeholder="Remark"
          slotProps={{
            htmlInput: {
              style: {
                padding: "10px",
              },
            },
          }}
          value={tableRemark}
          onChange={tableRemarkHandler}
        />
        <CreateButton
          type="button"
          onClick={() => {
            if (
              tableList.filter(
                (t: any) =>
                  t.name.toLowerCase() == tableName.trim().toLowerCase()
              ).length == 0
            ) {
              localStorage.setItem(
                "tables",
                JSON.stringify([
                  ...tableList,
                  {
                    name: tableName,
                    remark: tableRemark,
                  },
                ])
              );
              getTables();
            }
          }}
        >
          Add Table
        </CreateButton>
        <TablesListContainer>
          {tableList.map((table: any, index: number) => {
            return <TablesContainer key={index}>{table.name}</TablesContainer>;
          })}
        </TablesListContainer>
      </TableCreate>
    </>
  );
};
