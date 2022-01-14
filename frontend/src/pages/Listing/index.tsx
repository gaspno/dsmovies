import axios from "axios";
import MovieCard from "Components/MovieCard";
import Pagination from "Components/Pagination";
import { useEffect, useState } from "react";
import { base_Url } from "utils/request";

function Listing() {


    const [pageNumber,setPageNumber]=useState(0);

    useEffect(() =>{
        axios.get(base_Url+'/movies?size=12&page=0')
        .then(response => {
            console.log(response.data);
        });
    },[] )

  

    

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Listing;