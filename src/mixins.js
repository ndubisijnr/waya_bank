export default function tab() {
    const inputs = document.querySelectorAll('.otp-div input');
    inputs.forEach((input, index) => {
        input.dataset.index = index;
        input.addEventListener('input', handleOtp);
        input.addEventListener('keydown', handleKeyDown);
    });

    // function handleOtp(e) {
    //   const input = e.target;
    //   let value = input.value;
    //   input.value = value ? value[0] : "";
    //   let fieldIndex = parseInt(input.dataset.index);
    //   if (value.length > 0 && fieldIndex < inputs.length - 1) {
    //     inputs[fieldIndex + 1].focus();
    //   }
    // }

    function handleOtp(e) {
        const input = e.target;
        let value = input.value;
        let fieldIndex = parseInt(input.dataset.index);
        if (fieldIndex === inputs.length - 1 && value !== "") {
            inputs[fieldIndex].value = "";
            return;
        }
        input.value = value ? value[0] : "";
        if (value.length > 0 && fieldIndex < inputs.length - 1) {
            inputs[fieldIndex + 1].focus();
        }
    }


    function handleKeyDown(e) {
        const input = e.target;
        let fieldIndex = parseInt(input.dataset.index);
        if (e.key === "Backspace" && fieldIndex > 0) {
            inputs[fieldIndex - 1].focus();
            // e.preventDefault();
        }
    }

    const submit = () => {
        let otp = "";
        inputs.forEach((input) => {
            otp += input.value;
        });
        console.log(otp);
    };
} //handle otp inputs...
