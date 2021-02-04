import React from 'react';

const Userprofile = () => {
  return(
    <div className="content-dashboard p-4">
      <h1>Userprofile</h1>
      <div className="row login color-user">
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Nome</p>
          <p>NOME UTENTE</p>
        </div>
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Cognome</p>
          <p>COGNOME UTENTE</p>
        </div>
        <div className="w-100 d-none d-md-block"></div>
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Email</p>
          <p>EMAIL UTENTE</p>
        </div>
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Data di nascita</p>
          <p>24/03/1946</p>
        </div>
      </div>
    </div>
  );
}
export default Userprofile;