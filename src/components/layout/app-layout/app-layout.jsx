import React  from 'react';
import './app-layout.css';
import PropTypes from 'prop-types';

import LogicGate from '../logic-gate';
import LogicLine from "../logic-line";
import LayoutText from "../layout-text";

function AppLayout(props) {
  const { items, onClickSetSelectElementID, selectElementID, handleSetNewCord, widthLayout, heightLayout } = props;

  const gridListGate = items.map((item) => {
    if(item.group === 'gate') {
      const { id, type, x, y, turn, pin } = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="logic-gate-container" key={id}>
          <LogicGate
            id={id}
            logic={type}
            x={x} y={y}
            turn={turn}
            pin={pin}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  });

  const gridListLine = items.map((item) => {
    if (item.group === 'line') {
      const {id, type, x, y, pin, width, height, turn, active} = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="logic-gate-container" key={id}>
          <LogicLine
            id={id}
            logic={type}
            x={x} y={y}
            width={width}
            height={height}
            turn={turn}
            active={active}
            pin={pin}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  })

  const gridLayoutText = items.map((item) => {
    if (item.group === 'text') {
      const {id, type, x, y, pin, content, turn} = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="logic-gate-container" key={id}>
          <LayoutText
            id={id}
            logic={type}
            x={x} y={y}
            content={content}
            pin={pin}
            turn={turn}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  })

  const style = {
    width: `${widthLayout}px`,
    height: `${heightLayout}px`
  }

  return (
    <div className="app-layout" style={style}>
      <div className="background-layout"
           onClick={() => onClickSetSelectElementID(0)}
           onTouchStart={() => onClickSetSelectElementID(0)}
      />
      {gridListGate}
      {gridListLine}
      {gridLayoutText}
    </div>
  );
}

AppLayout.propTypes = {
  selectElementID: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired,

  widthLayout: PropTypes.any.isRequired,
  heightLayout: PropTypes.any.isRequired
};

export default AppLayout;
