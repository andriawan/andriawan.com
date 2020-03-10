import PropTypes from "prop-types";
import React from "react";

function PortoFolioList(prop) {
  let { project_name, project_description, project_image_url, project_url } = prop.data;
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-48 object-cover"
          src={project_image_url}
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4">
          <div className="font-bold text-teal-400 p-2 rounded-full text-center text-lg mb-2">
            {project_name}
          </div>
          <p className="text-gray-700 text-center text-sm">
            {project_description}
          </p>
        </div>
        <div className="px-6 py-4 mb-4">
          <a
            href={project_url}
            style={{
              background: "linear-gradient(to right , #18adfd7d, #1fec93d1)"
            }}
            className="mt-2 block text-center text-white font-bold py-2 px-4 rounded"
          >
            Demo Apps
          </a>
        </div>
      </div>
    </div>
  );
}

PortoFolioList.prototype = {
  data: PropTypes.object
};

export default PortoFolioList;
