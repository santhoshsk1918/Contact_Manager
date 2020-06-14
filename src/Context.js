import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT": {
      let { contacts } = state;
      let newContacts = contacts.filter((o) => o.id !== action.payload);
      return {
        ...state,
        contacts: newContacts,
      };
    }

    case "ADD_CONTACT": {
      let { contacts } = state;
      
      return {
        ...state, 
        contacts: [action.payload, ...contacts]
      }
      
    }

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    // Contact List
    contacts: [
      {
        id: 1,
        name: "Santhosh S Kashyap",
        email: "sankas@aa.com",
        phone: "9900032052",
      },
      {
        id: 2,
        name: "Anusha AJ",
        email: "anusha@aa.com",
        phone: "8882314211",
      },
      {
        id: 3,
        name: "Sneha S Kashyap",
        email: "sneha@aa.com",
        phone: "9900501122",
      },
      {
        id: 4,
        name: "Sannidhi N Rao",
        email: "sanni@aa.com",
        phone: "4125124124",
      },
      {
        id: 5,
        name: "Naveen S Rao",
        email: "naveen@aa.com",
        phone: "687421457",
      },
    ],
    // Dispach of the context this method is available everywhere
    dispach: (action) => this.setState((state) => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
