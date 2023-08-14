import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardContainer = () => {
  const TOTAL_SUPPLY = 10000000000;
  const [burntToken, setBurntToken] = useState(0);
  const [circulatingSupply, setCirculatingSupply] = useState(0);

  useEffect(() => {
    const FetchSupply = async () => {
      try {
        const url = `Insert API URL here.`;
        const response = await axios.get(url);
        console.log("fetch", response);

        if (response.status === 200) {
          console.log("Success");
          setCirculatingSupply(response.data?.circulating_supply);
          setBurntToken(TOTAL_SUPPLY - response.data?.circulating_supply);
        }
      } catch (err) {
        console.log(err);
      }
    };
    FetchSupply();

    //-- Mock Data--//
    // const mockData = 3722346769;
    // setCirculatingSupply(mockData);
    // setBurntToken(TOTAL_SUPPLY - mockData);
  }, []);

  return (
    <section className="CardContainer">
      <div className="CardList">
        <Card title="Total Supply" value={TOTAL_SUPPLY} />
        <Card title="Token Burnt" value={burntToken} />
        <Card title="Remaining Supply" value={circulatingSupply} />
      </div>

      <p className="supplyInfo">
        {/* Info about caching */}
        {/* *Amounts are cached for 5 minutes to reduce heavy calls on the RPC. */}
      </p>
    </section>
  );
};

export default CardContainer;
