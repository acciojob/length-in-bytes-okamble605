const byteSize = (str) => {
  const blob = new Blob([str]);  // Create a Blob from the input string
  return blob.size;              // Return the size in bytes
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
