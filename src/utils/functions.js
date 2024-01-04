export const modifyValueAmount = (value) => {
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    return String(value).replace(regex, ".");
};

export const handleFormat = (e) => {
    var num = e.target.value.replace(/\.|[A-Za-z]/g, "");
    if (!isNaN(num)) {
      num = num
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
      num = num.split("").reverse().join("").replace(/^[\.]/, "");
      e.target.value = num;
      return { target: { name: e.target.name, value: e.target.value } };
    } else {
      e.target.value = e.target.value.replace(/[^\d\.]*/g, "");
      return { target: { name: e.target.name, value: e.target.value } };
    }
  };
  