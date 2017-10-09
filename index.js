// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, string){
  return drivers.forEach(function(driver){
     if (driver.hometown === string){
       console.log(driver.name)
     }
  })
}

function driversByRevenue(drivers){
  let sorted_drivers = [...drivers]
  return sorted_drivers.sort( (a,b) => a.revenue - b.revenue)
}

function driversByName(drivers){
  let sorted_drivers = [...drivers]
  return sorted_drivers.sort((a,b) => a.name.localeCompare(b.name))
}

function totalRevenue(drivers){
  return drivers.reduce(function(sum, driver){
     return sum + driver.revenue
  }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
