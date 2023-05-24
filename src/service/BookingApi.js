const API = "http://localhost:8088/";

export const saveBooking = (pet, document, date, time, modalTitle, modalBody) => {

  const formData = {
    pet: pet,
    document: document,
    date: date,
    time: time
  }

  console.log(JSON.stringify(formData));

  fetch(API+'booking', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status == 500) {
        modalTitle = "Error!";
        modalBody = data.message;
      } else {
        modalTitle = "Datos guardados correctamente!";
        modalBody = "La reserva fue exitosa";
      }
    });
};

export const savePet = (name, userid, modalTitle, modalBody) => {

  const formData = {
    name: name,
    userid: userid,
  };

  fetch(API+'pet', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status == 500) {
        modalTitle = "Error!";
        modalBody = data.message;
      } else {
        modalTitle = "Datos guardados correctamente!";
        modalBody = "Ahora crea las reservas";
      }
    });
};

export const saveClient = (name, document, address, email, modalTitle, modalBody) => {

  const formData = {
    name: name,
    document: document,
    address: address,
    email: email,
  };

  fetch(API+'client', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

};
