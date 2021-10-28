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

    this.onChangeCreateToDo = this.onChangeCreateToDo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.currentlySelected = this.currentlySelected.bind(this);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
  }

  onChangeCreateToDo(e) {
    this.setState({ newToDo: e.target.value });
  }

  currentlySelected(selection) {
    this.setState({ selectedArray: selection });
  }

  onSubmit(e) {
    if (this.state.newToDo === "") {
      alert("Please fill the NewToDo box.");
    } else {
      const toDoObject = {
        newToDo: this.state.newToDo,
        email: this.state.userData.email,
      };

      var result;
      axios
        .post("https://ramziproject.co.uk/api/reactNewToDO", toDoObject)
        .then((res) => {
          result = res.data;
          if (result === "success") {
            //PROBABLY INCORRECT !!!
            this.setState({ newtoDo: "" });
            //this.props.history.push('/login');
          }
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          alert("You must be logged in :(");
        });
      this.setState({ newToDo: "" });
    }
  }

  onSubmitDelete(e) {
    let myThis = this;

    function mySender(array) {
      const indexObject = {
        indexArray: array,
        email: myThis.state.userData.email,
      };

      var result;
      axios
        .post("https://ramziproject.co.uk/api/reactDeleteToDo", indexObject)
        .then((res) => {
          result = res.data;
          if (result === "success") {
          }
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          alert("You must be logged in :(");
        });
      myThis.setState({ newToDo: "" });
    }

    mySender(this.state.selectedArray);
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
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>

        <div className="input-wrapper">
        <form id="deleteToDo" onSubmit={this.onSubmitDelete}>
          <div className="form-group">
            <input
              id="deleteToDoBt"
              style={{ maxWidth: "200px", minWidth: "200px" }}
              type="submit"
              value="Delete Selected"
              className="btn btn-success btn-block"
            />
          </div>
        </form>
        
        <form id="newToDo" onSubmit={this.onSubmit}>
          <div
            className="card"
            style={{ maxWidth: "600px", minWidth: "600px" }}
          >
            <h3 className="center">NewToDo</h3>
            <textarea
              id="textBox"
              type="field"
              name="name"
              value={this.state.newToDo}
              onChange={this.onChangeCreateToDo}
              className="form-control"
              id="name"
              cols="40"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              id="newToDoBt"
              style={{ maxWidth: "400px", minWidth: "400px" }}
              type="submit"
              value="Add New ToDo element"
              className="btn btn-success btn-block"
            />
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Todo;
