// first function to load data from local storage
// second function to save data in local storage

/**
 *
 */
function loadData(key) {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (err) {
    return undefined;
  }
}
function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data));
}
export {loadData,saveData}
