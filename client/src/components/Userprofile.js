import React from 'react';

function formatDate(date){
  const standardDate = new Date(0);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  standardDate.setUTCMilliseconds(date);
  return standardDate.toLocaleDateString("it-IT", options);
}

const Userprofile = ({utente}) => {
  return(
    <div className="content-dashboard p-4">
      <h1>Userprofile</h1>
      <div className="row login color-user">
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Nome</p>
          <p>{utente.name}</p>
        </div>
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Cognome</p>
          <p>{utente.surname}</p>
        </div>
        <div className="w-100 d-none d-md-block"></div>
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Email</p>
          <p>{utente.email}</p>
        </div>
        <div className="col-6 col-sm-4">
          <p className="fw-bold">Data di nascita</p>
          <p>{formatDate(utente?.birthdate)}</p>
        </div>
      </div>
    </div>
  );
}
export default Userprofile;