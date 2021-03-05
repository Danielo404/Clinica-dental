var total = 0;
        
        function suma(consulta){

            if (consulta.checked) {
        
                total += parseInt(consulta.value);
                document.getElementById("precio").innerHTML = total + " €";
            }else{

                total -= parseInt(consulta.value);

                if (total >= 0) {
                    document.getElementById("precio").innerHTML = total + " €";
                }else{
                    document.getElementById("precio").innerHTML = "0 €";
                }
            }

        }