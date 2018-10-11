// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(element => {
    console.log(element.name);
  });
}

function logDriversByHometown(drivers, hTown) {
  drivers.forEach(element => {
    if (element.hometown === hTown) console.log(element.name);
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
}

function totalRevenue(drivers) {
  let sum = 0;
  drivers.forEach(driver => {
    sum += driver.revenue;
  });
  return sum;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
