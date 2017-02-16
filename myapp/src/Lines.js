import React, { Component } from 'react';
import lineData from './line-data';

class Lines extends Component {
    render() {
        return (
            <ul style={{ textAlign: "left" }}>
              {
                lineData.map(line => (
                  <li key={line.line_cd}>
                    {line.line_name}
                  </li>
                ))
              }
            </ul>
        );
    }
}

export default Lines;
