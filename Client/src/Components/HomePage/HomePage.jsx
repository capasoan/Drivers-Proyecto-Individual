import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";

const HomePage = ({ onSearch, drivers }) => {
//console.log("HomePage:", drivers);


    return (
        <div>
            <h1>Home Page</h1>
            <h2>La mejor pagina de la historia la encontraras en Home Page</h2>       
            <SearchBar onSearch={onSearch} />
            <Cards drivers={drivers} />
        </div>
    );
}

export default HomePage;
