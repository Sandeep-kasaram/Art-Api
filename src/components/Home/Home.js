import { useEffect, useState } from "react";
// components
import Card from "../Common/Card/Card";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Loader from "../../icons/Loader";
// css 
import "./Home.css";
// service
import ApiService from "../../services/ApiService";
// library
import ReactPaginate from "react-paginate";


function Home() {
  const [artObjects, setArtObjects] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, count: 9 });
  const [count, setCount] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loader, seLoader] = useState(false);

  useEffect(() => {
    getArtObjects();
  }, [pagination.page, searchTerm]);

  async function getArtObjects() {
    seLoader(true);
    const data = await ApiService.getArtObjects(pagination, searchTerm);
    if (data.status === "SUCCESS") {
      setArtObjects(data?.artObjects);
      setCount(Math.ceil(data.countFacets.ondisplay / pagination.count));
      seLoader(false);
    } else {
      seLoader(false);
    }
  }

  return (
    <div className="root">
      <Header handleSearch={(val) => setSearchTerm(val)} />
      {!loader ? (
        artObjects.length > 0 ? (
          <>
            <div className="all_art_work">All artwork</div>
            <div className="content">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 w-100">
                {artObjects.map((data) => (
                  <div className="col" key={data.id}>
                    <Card data={data} hasClick />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "calc(100vh - 159px)",
              width: "100%",
              zIndex: 100,
            }}
          >
            <p className="no_data">No data available.!</p>
          </div>
        )
      ) : (
        <Loader />
      )}
      <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={count}
              pageRangeDisplayed={0}
              marginPagesDisplayed={1}
              onPageChange={(event) =>
                setPagination({ ...pagination, page: event.selected + 1 })
              }
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
      <Footer />
    </div>
  );
}

export default Home;
