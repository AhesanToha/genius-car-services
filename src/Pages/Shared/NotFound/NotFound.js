import React from "react";

import notfound from "../../../images/notfound.jpg";
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
  return (
    <div>
    <PageTitle title={'NotFound'}></PageTitle>

      <img className="w-100" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
