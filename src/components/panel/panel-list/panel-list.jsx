import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import IconButton from '../../button-icon';

function PanelList({
 display,
 onClickAdd,
 onClickChangeRemoveStatus,
 onClickToggleHiddenPopupSelect,
 onClickChangePin,
 onClickToggleHiddenPopupInfo,
 onClockHiddenDevStatus,
 onClickToggleHiddenListAdd,
 hiddenListAdd,
 hiddenListGate
}) {
  return (
    <div className={`panel-list ${display}`}>
      <div className="list-main list">
        <IconButton icon="bi-plus-circle" onClick={onClickToggleHiddenListAdd}/>
        <IconButton icon="bi-arrow-counterclockwise" onClick={() => window.location.reload()}/>
        <IconButton icon="bi-flag" onClick={onClockHiddenDevStatus}/>
        <IconButton icon="bi-info-circle" onClick={onClickToggleHiddenPopupInfo}/>
      </div>

      <div className={`list-add list list-additional ${(hiddenListAdd)? 'hidden' : ''}`}>
        <IconButton icon="bi-file-binary" onClick={onClickAdd}/>
        <IconButton icon="bi-bezier2"/>
        <IconButton icon="bi-chat-square-text"/>
      </div>

      <div className={`list-logic-gates list list-additional ${(hiddenListGate)? 'hidden' : ''}`}>
        <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus}/>
        <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupSelect}/>
        <IconButton icon="bi-pin" onClick={onClickChangePin}/>
      </div>
    </div>
  );
}

PanelList.defaultProps = {
  selectElementID: false,
  onClickAdd: () => {
  }
};

PanelList.propTypes = {
  display: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func,
  onClickToggleHiddenListAdd: PropTypes.func.isRequired,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickToggleHiddenPopupSelect: PropTypes.func.isRequired,
  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClickChangePin: PropTypes.func.isRequired,
  onClockHiddenDevStatus: PropTypes.func.isRequired,
  hiddenListAdd: PropTypes.bool.isRequired,
  hiddenListGate: PropTypes.bool.isRequired
};

export default PanelList;
