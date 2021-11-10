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
      signedIn: false,
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

  componentDidMount = () => {
    //alert(localStorage.getItem("token"));
    //alert(this.state.signedIn);

    let temp = localStorage.getItem("token");
    if (!(temp === "null") && !(temp === null)) {
      this.setState({ signedIn: true });
    } else {
      this.setState({ signedIn: false });
      this.props.history.push("/login");
      window.location.reload();
    }

    let myThis = this;

    function myGet() {
      if (localStorage.getItem("token") === "null") {
        myThis.setState({
          name: <h1>Please log in to see your ToDo list :)</h1>,
        });
      } else {
        axios.get("https://ramziproject.co.uk/api/reactGetUser").then(
          (res) => {
    
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
        
        })
        .catch((error) => {
          console.log(error);
          alert("You must be logged in :(");
        });
      myThis.setState({ newToDo: "" });
    }

    mySender(this.state.selectedArray);
  }

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
          <form id="newToDo" onSubmit={this.onSubmit}>
            <h3 className="center">NewToDo</h3>
            <textarea
              id="textBox"
              name="name"
              value={this.state.newToDo}
              onChange={this.onChangeCreateToDo}
              className="form-control"
              id="name"
              cols="40"
              rows="3"
            ></textarea>

       
              <input
                id="newToDoBt"
         
                type="submit"
                value="Add New ToDo element"
                className="button-newtodo"
              />
  
          </form>
          <form id="deleteToDo" onSubmit={this.onSubmitDelete}>
            <div className="form-group">
              <input
                id="deleteToDoBt"
                style={{ maxWidth: "200px", minWidth: "200px" }}
                type="submit"
                value="Delete Selected"
                className="button-deletetodo"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Todo;
