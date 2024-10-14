import { useState } from "react";

export default function Busca(){
    
    const [cityName, setCityName] = useState<string>("");
    const [cityList, setCityList] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(event.target.value);
    };

    const loadCities = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
        );

        const data = await response.json();
            setCityList(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        loadCities();
    };

    const handleNavigate = (cityCode: number) => {
        const state = {
        cityCode: cityCode,
        };

        //navigate("/", { state });
    };
    
    return <>
        <h1>Busca</h1>
    </>
}