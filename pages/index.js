import { addEstimates, renderEstimates } from "./api/estimatesapi";
import { useState } from "react";

import  Header  from "../components/Header";


export default function Home () {

    const [type, setType] = useState("");
    const [electricity_unit, setElectricity_unit] = useState("");
    const [electricity_value, setElectricity_value] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const estimate = {
            type,
            electricity_unit,
            electricity_value,
            country,
            state,
        };
        try {
          const response = await addEstimates(estimate);
          if (response.status !== 201) {
            alert("Estimativas adicionadas com sucesso!");
          }
        } catch (error)
         {
            console.log(error)
          alert("Erro ao adicionar estimativas");
        } finally {
          setType("");
          setElectricity_unit("");
          setElectricity_value("");
          setCountry("");
          setState("");
         
      }
      };

 

    return(
        <>
        <Header/>

        <h2>Calcule sua emissões de CO2 e ajude a cuidar do meio ambiente!</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" id="type" name="type" value={type} onChange={(event) => {setType(event.target.value)}}></input>
            <input type="text" id="electricity_unit" name="electricity_unit" value={electricity_unit} onChange={(event) => {setElectricity_unit(event.target.value)}}></input>
            <input type="text" id="electricity_value" name="electricity_value" value={electricity_value} onChange={(event) => {setElectricity_value(event.target.value)}}></input>
            <input type="text" id="country" name="country" value={country} onChange={(event) => {setCountry(event.target.value)}}></input>
            <input type="text" id="state" name="state" value={state} onChange={(event) => {setState(event.target.value)}}></input>
            <button type="submit">Enviar estimativas</button>

        </form>
        

        
        </>
    )
}