import React, { useState, useEffect } from 'react';
import './style.css';

function FormListUser(user) {
  return (
    <li className="listuser">
      <label>{user.user}</label>
    </li>
  );
}

export default FormListUser;
