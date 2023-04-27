import React from "react";
import Layout from "../layout";

function Card(props) {
  return (
    <Layout>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={props.image} alt={props.alt} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {props.tag1}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {props.tag2}
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default Card;
