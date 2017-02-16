import React, { Component } from 'react';
import lineData from './line-data';

class Lines extends Component {
    render() {
        return (
            <ul style={{ textAlign: "left" }}>
              {
                lineData.map((line, index) => (
                  <li key={index}>
                    {line.line_name}
                  </li>
                ))
              }
            </ul>
        );
    }
}

export default Lines;
