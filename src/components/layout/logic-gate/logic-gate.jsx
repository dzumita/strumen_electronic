import React from 'react';
import './logic-gate.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicGate(props) {
  const {
    id, logic,
    x, y,
    onClickSetSelectElementID,
    selectStatus,
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div title={id} className="position-absolute logic-gate-container" key={id} onClick={() => { onClickSetSelectElementID(id); }}>

      <Draggable defaultPosition={{ x, y }}>
        <div className={`logic-gate${LogicElementSelect}`}>
          <div className="circle circle-left" />
          <div className="logic-gate-content">
            <span>{logic}</span>
          </div>
          <div className="circle circle-right" />
        </div>
      </Draggable>
    </div>
  );
}

LogicGate.propTypes = {
  selectStatus: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  logic: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
};

export default LogicGate;
