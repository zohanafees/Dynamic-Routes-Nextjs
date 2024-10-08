const page = ({ params }:any) => {
  // console.log(params);

  interface Countrytype {

    name:string,
    population:number,
    capitalCity:string
  }

  const objPK : Countrytype = {
    name: "pakistan",
    population: 251269164,
    capitalCity: "Islamabad",
  };
  const objban : Countrytype = {
    name: "bangladesh",
    population: 173562364,
    capitalCity: "Dhaka",
  };
  const objruss : Countrytype = {
    name: "russia",
    population: 144820423,
    capitalCity: "Moscow",
  };
  const objchin : Countrytype = {
    name: "china",
    population: 1419321278,
    capitalCity: "Beijing",
  };
  const objsau : Countrytype = {
    name: "saudiaArabia",
    population: 33962757,
    capitalCity: "Riyadh",
  };
  if (params.country_name == "pakistan") {
    return (
      <div>
        name: {objPK.name}
        <br></br>
        population: {objPK.population}
        <br></br>
        capital city: {objPK.capitalCity}
      </div>
    );
  }
  if (params.country_name == "bangladesh") {
    return (
      <div>
        name:{objban.name}
        <br></br>
        population: {objban.population}
        <br></br>
        capital city:{objban.capitalCity}
      </div>
    );
  }
  if (params.country_name == "russia") {
    return (
      <div>
        name:{objruss.name}
        <br></br>
        population:{objruss.population}
        <br></br>
        capital city:{objruss.capitalCity}
      </div>
    );
  }
  if (params.country_name == "china") {
    return (
      <div>
        name:{objchin.name}
        <br></br>
        population:{objchin.population}
        <br></br>
        capital City:{objchin.capitalCity}
      </div>
    );
  }
  if (params.country_name == "saudiaArabia") {
    return (
      <div>
        name:{objsau.name}
        <br></br>
        population:{objsau.population}
        <br></br>
        capital City:{objsau.capitalCity}
      </div>
    );
  }
  else {
    return(
      <div>
        country not found
      </div>
    )
  }
};

export default page;
