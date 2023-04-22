import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
    
    export default function Price (props) {
      // Our api key from coinapi.io
      const apiKey = '16F57248-11E0-4EC8-AF96-9EB0C49A25D5';
      // Grabbing the Currency symbol from the URL Params
      const params = useParams()
      const symbol = params.symbol
      // Using the other two variables to create our URL
      const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    
      //state to hold the coin data
      const [coin, setCoin] = useState("null");
    
      //function to fetch coin data
      const getCoin = async () => {
        try{
          const response = await fetch(url);
          const data = await response.json();
          setCoin(data);
    } catch(e){
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };
const loading = () => {
  return <h1>Loading...</h1>;
};

return coin && coin.rate ? loaded() : loading();
}
  

//16F57248-11E0-4EC8-AF96-9EB0C49A25D5