
  function calcular(event){
    event.preventDefault()
    const AlcoolNumber = document.getElementById("alcool").value;
    const GasolinaNumber = document.getElementById("gasolina").value;
    const ModalAlcool = document.querySelector(".ag-result")
    const Modalgasolina = document.querySelector(".ag-result1")
    const TituloModal = document.querySelector("h2")
    const SpanAlcool = document.querySelector(".alcoolspan")
    const SpanGasolina = document.querySelector(".gasolinaspan")
    
    SpanAlcool.innerHTML = "O valor do Alcool é: " + AlcoolNumber
    SpanGasolina.innerHTML = "O valor da gasolina é: " + GasolinaNumber
    const calcule = (Number(AlcoolNumber) / Number(GasolinaNumber))
    console.log (calcule)
    if(calcule < 0.7){
        ModalAlcool.style.display = "flex";
        TituloModal.innerHTML = 'Compensa utilizar alcool'
    }else{
        ModalAlcool.style.display = "flex";
        TituloModal.innerHTML = 'Compensa utilizar gasolina'
    }

  }