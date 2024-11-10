// Function to generate matrix input fields
function generateMatrixInput() {
    const matrixContainer = document.getElementById("matrix-container");
    const matrixSize = parseInt(document.getElementById("matrix-size").value);
  
    // Clear previous input grid
    matrixContainer.innerHTML = "";
  
    // Set grid properties based on matrix size
    matrixContainer.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`;
  
    // Generate input fields with unique IDs
    for (let i = 0; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        const inputField = document.createElement("input");
        inputField.type = "number";
        inputField.className = "matrix-input";
        inputField.placeholder = `a${i + 1}${j + 1}`;
        inputField.id = `cell-${i}-${j}`;
        matrixContainer.appendChild(inputField);
      }
    }
  }
  
  
  
  