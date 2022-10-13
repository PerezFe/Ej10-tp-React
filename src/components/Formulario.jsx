import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


const Formulario = () => {
  return (
    <section >
      <div className="d-flex  justify-content-center my-3" >
        <p className='mx-5'>Buscar por categoria</p>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </section>
  );
};

export default Formulario;
