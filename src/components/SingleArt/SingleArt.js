import { Link } from "react-router-dom";
import Card from "../Common/Card/Card";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./SingleArt.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import Loader from "../../icons/Loader";

function SingleArt(props) {
  const { artId } = useParams();
  const [artObject, setArtObject] = useState(null);
  const [loader, seLoader] = useState(false);

  useEffect(() => {
    getSingleArtObjects();
  }, [artId]);

  async function getSingleArtObjects() {
    seLoader(true);
    const data = await ApiService.getSingleArtObjects(artId);
    if (data.status === "SUCCESS") {
      setArtObject(data.artObject);
      seLoader(false);
    } else {
      seLoader(false);
    }
  }

  return (
    <div className="root">
      <Header handleSearch={(val) => console.log(val)} />
      {!loader ? (
        artObject ? (
          <div className="card_content">
            <div className="back_to_list">
              <Link to="/">
                <span>{"<"}</span>Back to the List
              </Link>
            </div>
            <Card data={artObject} />
            <div className="table">
              <div className="table_row">
                <div className="table_row_title">Title</div>
                <div className="table_row_val">{artObject?.title}</div>
              </div>
              <div className="table_row">
                <div className="table_row_title">Artist</div>
                <div className="table_row_val">
                  {artObject?.principalOrFirstMaker}
                </div>
              </div>
              <div className="table_row">
                <div className="table_row_title">Object Type</div>
                <div className="table_row_val">
                  {artObject?.objectTypes?.map((type, index) => (
                    <React.Fragment key={index}>
                      {type}
                      {index + 1 !== artObject?.objectTypes?.length && ", "}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="table_row">
                <div className="table_row_title">Measurements</div>
                <div className="table_row_val">{artObject?.subTitle}</div>
              </div>
              <div className="table_row">
                <div className="table_row_title">Description</div>
                <div className="table_row_val">{artObject?.description}</div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "calc(100vh - 209px)",
              width: "100%",
              zIndex: 100,
            }}
          >
            <p className="no_data">No data available</p>
          </div>
        )
      ) : (
        <Loader />
      )}

      <Footer />
    </div>
  );
}

export default SingleArt;
