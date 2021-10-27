import React, { Component } from "react";
import "./Todo.css";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      name: " ",
      time: Date,
      toDoArray: [],
      selectedArray: [],
      newToDo: "",
    };
    this.currentlySelected = this.currentlySelected.bind(this);
  }

  currentlySelected(selection) {
    console.log(selection);
  }

  componentDidMount = () => {
    let myThis = this;

    function myGet() {
      if (localStorage.getItem("token") === "null") {
        myThis.setState({
          name: <h1>Please log in to see your ToDo list :)</h1>,
        });
      } else {
        axios.get("https://ramziproject.co.uk/api/reactGetUser").then(
          (res) => {
            console.log(res.data);
            myThis.setState({ userData: res.data });
            myThis.setState({ name: "Hi " + myThis.state.userData.name });
            myThis.setState({ toDoArray: myThis.state.userData.toDo });
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }

    myGet();
  };

  render() {
    const columns = [
      { field: "id", headerName: "ID", width: 120 },
      {
        field: "toDo",
        headerName: "toDo",
        width: 1100,
        editable: false,
      },
    ];

    const rows = this.state.toDoArray.map((data, index) => {
      return { id: index, toDo: data };
    });

    // getSelectedRows: () => Map<GridRowId, { [key: string]: any }>

    return (
      <div className="todo-wrapper">
        <div className="table-wrapper" style={{ height: 400, width: "100%" }}>
          {this.state.name}
          <DataGrid
            onSelectionModelChange={this.currentlySelected}
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    );
  }
}

export default Todo;
