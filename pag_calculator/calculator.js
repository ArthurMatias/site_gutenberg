function calculateBodyFat() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const waist = parseFloat(document.getElementById('waist').value);
  const neck = parseFloat(document.getElementById('neck').value);
  const hip = parseFloat(document.getElementById('hip').value);
  const gender = document.getElementById('gender').value;

  let bodyFatPercentage;

  if (gender === 'male') {
      bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
      if (hip) {
          bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
      } else {
          alert("Por favor, insira a medida do quadril.");
          return;
      }
  }

  document.getElementById('result').innerText = `Percentual de gordura corporal: ${bodyFatPercentage.toFixed(2)}%`;
}