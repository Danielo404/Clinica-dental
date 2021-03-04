var total = 0;
        
        function suma(tratamiento){

            if (tratamiento.checked) {
        
                total += parseInt(tratamiento.value);
                document.getElementById("precio").innerHTML = total + " €";
            }else{

                total -= parseInt(tratamiento.value);

                if (total >= 0) {
                    document.getElementById("precio").innerHTML = total + " €";
                }else{
                    document.getElementById("precio").innerHTML = "0 €";
                }
            }

        }