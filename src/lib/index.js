const root = document.getElementById('root');

const serviceList = ['Screen is cracked',
                     'Liquid or water damage',
                     'Restore or update not working as expected',
                     'Buttons not working',
                     'Screen or display quality',
                     'Operating system does not respond',
                     'Cannot lock or unlock phone'];



const createList = () => {
  let headerDiv = document.createElement('div');
  let outerDiv = document.createElement('div');
  let tableDiv = document.createElement('div');
  let table = document.createElement('table');
  let h1 = document.createElement('h1');
  h1.classList.add('header');
  h1.append("Select a service");
  headerDiv.append(h1);
  outerDiv.append(headerDiv);
  outerDiv.classList.add('outer-div');
  serviceList.forEach(service => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.append(service);
    td.classList.add('table-rows');
    tr.append(td);
    table.append(tr);
    tableDiv.append(table);
  });
  outerDiv.append(tableDiv);
  return outerDiv;
};

root.append(createList());
