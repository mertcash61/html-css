const wrapper = docmnet.querySelector(".wrapper"),
   qrInput = wrapper.querySelector(".form input")
   generateBtn = wrapper.querySelector(".form button"),
   qrImg = wrapper.querySelector("qr-code img");
let preValue;

generation.addEventListener("click", () => {
   let qrValue = qrInput.value.trim();
   if(!qrValue || preValue === qrValue) return;
   preValue = qrValue;
   genrateBtn.innerText = "Generating QR Code...";
   qrıMG.src=
   'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}';
   qrImg.addEventListener("load", () => {
      wrapper.classList.add("active");
      generationBtn.inerText = "Generate QR Code";
   });
});

qrInput.addEventListener("keyup", () => {
   if(!qrInput.value.trim()){
      wrapper.classList.remove("active");
      preValue = "";
   }
})