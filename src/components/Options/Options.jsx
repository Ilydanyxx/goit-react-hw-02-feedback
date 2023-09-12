import React from 'react';

export default class Options({options}) {
  render() {
    return <div>{
      options.map(key => {
        return <button>
        {[key]}
      </button>
    })
    }</div>;
  }
}
