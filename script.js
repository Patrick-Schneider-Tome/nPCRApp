function converterParaMgdl(ureia_g, volume_ml) {
    // Converte ureia de g para mg/dL
    return (ureia_g * 1000) / (volume_ml / 100);
  }
  
  function calcular() {
    const peso = parseFloat(document.getElementById('peso').value);
    const ureia_g = parseFloat(document.getElementById('ureia_g').value);
    const volume_ml = parseFloat(document.getElementById('volume_ml').value);
  
    if (isNaN(peso) || isNaN(ureia_g) || isNaN(volume_ml)) {
      alert('Preencha todos os campos corretamente.');
      return;
    }
  
    // Converte ureia
    const ureia_mgdl = converterParaMgdl(ureia_g, volume_ml);
    document.getElementById('ureiaResult').innerText = `Ureia: ${ureia_mgdl.toFixed(2)} mg/dL`;
  
    // Calcula nPCR
    const fator_ajuste = 0.031;
    const volume_l = volume_ml / 1000;
    const npcr = (ureia_mgdl * volume_l * fator_ajuste) / peso;
    document.getElementById('npcrResult').innerText = `nPCR: ${npcr.toFixed(2)} g/kg/dia`;
  }
  