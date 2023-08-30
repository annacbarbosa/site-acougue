function validateForm(event) {
    event.preventDefault();

    //  nome
    let nomeInput = document.getElementById("nome");
    let nomeValue = nomeInput.value.trim();
    if (nomeValue === "" || nomeValue.split(" ").length < 2) {
      alert("Por favor, informe pelo menos dois nomes.");
      nomeInput.focus();
      return;
    }

    //  email
    let emailInput = document.getElementById("email");
    let emailValue = emailInput.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      alert("Ops! o email informado não é um endereço de email válido.");
      emailInput.focus();
      return;
    }

    // telefone
    let telefoneInput = document.getElementById("numero");
    let telefoneValue = telefoneInput.value.replace(/[()\s-]/g, "");
    if (telefoneValue.length !== 11) {
      alert("Por favor, preencha exatamente 11 caracteres numéricos.");
      telefoneInput.focus();
      return;
    }

    // mensagem
    let mensagemInput = document.getElementById("mensagem");
    let mensagemValue = mensagemInput.value.trim();
    if (mensagemValue.length < 5) {
      alert("Mensagem não é grande o suficiente.");
      mensagemInput.focus();
      return;
    }

    submitForm();
  }

  function submitForm() {
    alert("Formulário enviado com sucesso!");
    document.getElementById("myForm").reset();
  }

  // radio button
  function radioButton(option) {
    let selectedOptions = document.getElementsByClassName("selected");
    if (selectedOptions.length === 0) {
      let selectedRadio = document.getElementById("option" + option);
      selectedRadio.classList.add("selected");
    } else {
      let radios = document.getElementsByClassName("radio");
      for (let i = 0; i < radios.length; i++) {
        radios[i].classList.remove("selected");
      }

      let selectedRadio = document.getElementById("option" + option);
      selectedRadio.classList.add("selected");
    }
  }

  // select
  let isOptionsOpen = false;
  let selectedOptions = [];

  function toggleOptions() {
    const optionsList = document.getElementById("options-list");
    const arrow = document.querySelector(".arrow");

    isOptionsOpen = !isOptionsOpen;

    if (isOptionsOpen) {
      optionsList.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
    } else {
      optionsList.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  }

  function selectOption(option) {
    const selectedOption = document.getElementById("selected-option");

    if (selectedOptions.includes(option)) {
      const optionIndex = selectedOptions.indexOf(option);
      selectedOptions.splice(optionIndex, 1);
    } else {
      selectedOptions.push(option);
    }

    if (selectedOptions.length > 0) {
      selectedOption.innerText = selectedOptions.join(", ");
      selectedOption.classList.add("selected-option");
    } else {
      selectedOption.innerText = "Selecione uma opção";
      selectedOption.classList.remove("selected-option");
    }

    toggleOptions();
  }

  // checkbox
function toggleCheckbox(option) {
  var checkboxes = document.querySelectorAll(".checkbox-option .checkbox");
  var todosCheckbox = document.querySelector(".checkbox-option[data-option='todos'] .checkbox");

  checkboxes.forEach(function (checkbox) {
    if (option === "todos") {
      checkbox.classList.toggle("selected");
    } else if (checkbox.parentNode.getAttribute("data-option") === option) {
      checkbox.classList.toggle("selected");
      todosCheckbox.classList.remove("selected");
    } else {
      checkbox.classList.remove("selected");
    }
  });
}
  


