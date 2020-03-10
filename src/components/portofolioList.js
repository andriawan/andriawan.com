import PropTypes from "prop-types";
import React from "react";

function PortoFolioList(prop) {
  let { project_name, project_description, project_image_url } = prop.data;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={project_image_url}
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project_name}</div>
          <p className="text-gray-700 text-base">{project_description}</p>
        </div>
        <div className="px-6 py-4"></div>
      </div>
    </div>
  );
}

PortoFolioList.prototype = {
  data: PropTypes.object
};

export default PortoFolioList;
