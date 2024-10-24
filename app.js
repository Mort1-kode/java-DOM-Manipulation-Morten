const farger = [
  { farge: "red", navn: "Rød" },
  { farge: "blue", navn: "Blå" },
  { farge: "green", navn: "Grønn" },
  { farge: "yellow", navn: "Gul" },
  { farge: "purple", navn: "Lilla" },
];

const fargeBoks = document.querySelector("#fargeboks");

farger.forEach(function (fargeVelger) {
  const fargeKnapp = document.createElement(`div`);

  fargeKnapp.classList.add(`fargeknapp`);

  fargeKnapp.style.backgroundColor = fargeVelger.farge;

  fargeKnapp.textContent = fargeVelger.navn;

  fargeBoks.append(fargeKnapp);
});
