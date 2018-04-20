const SERVICES = [  "Computer Support",
  									"Printer Setup",
  									"Wifi Solution",
  									"Virus Removal",
  									"Electronic Setup",
  									"PC Tune-Up",
  									"Data Backup"
									];

const service = () => {
  const select = document.createElement('select');
  SERVICES.map(ser => {
    const option = document.createElement('option');
    const text = document.createTextNode(ser);
    option.appendChild(text);
    select.appendChild(option);
  });
  return select;
};

export default service;
