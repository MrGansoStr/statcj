
export const ThereErrors = (line, type = "alpha") => {
  if (type === "alpha") {
    let isValid = line.match(/\d+?/g);
    if (line.length === 0) {
      return true;
    }
    if (isValid === null) {
      return true;
    }
    else {
      return false;
    }
  }
  else if(type === "percentil") {
    console.log("percentil")
    if(line > 100 || line < 0) {
      return true
    }
    else {
      return false;
    }
  }
}