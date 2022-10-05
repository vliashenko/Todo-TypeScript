import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(location?.state?.from ?? "/")
  };

  return (
    <div className="container">
      <h1>Info Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nihil
        aperiam nulla, vel consequatur odit rem. Laboriosam provident eligendi
        unde quam explicabo repellendus asperiores ducimus magni, nihil animi
        aliquid dignissimos. Libero exercitationem doloremque culpa. Natus ab
        dolore sunt reprehenderit, consectetur debitis rerum in nostrum voluptas
        eum nam vel provident quas praesentium, odit perspiciatis odio vitae!
        Suscipit exercitationem, ad cupiditate sapiente dolore dolor temporibus
        quaerat minima commodi officiis neque eligendi perspiciatis amet libero
        aliquid consequatur, iste iure architecto consectetur quod. Aspernatur
        asperiores nemo nihil, minima accusamus quo quos aperiam, explicabo
        mollitia ipsum eos beatae illo repudiandae inventore voluptatum
        laudantium fugiat autem?

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nihil
        aperiam nulla, vel consequatur odit rem. Laboriosam provident eligendi
        unde quam explicabo repellendus asperiores ducimus magni, nihil animi
        aliquid dignissimos. Libero exercitationem doloremque culpa. Natus ab
        dolore sunt reprehenderit, consectetur debitis rerum in nostrum voluptas
        eum nam vel provident quas praesentium, odit perspiciatis odio vitae!
        Suscipit exercitationem, ad cupiditate sapiente dolore dolor temporibus
        quaerat minima commodi officiis neque eligendi perspiciatis amet libero
        aliquid consequatur, iste iure architecto consectetur quod. Aspernatur
        asperiores nemo nihil, minima accusamus quo quos aperiam, explicabo
        mollitia ipsum eos beatae illo repudiandae inventore voluptatum
        laudantium fugiat autem?
      </p>
        <button
         className="btn"
         onClick={onGoBack}
        >
          Go Back
        </button>
    </div>
  );
};

export default AboutPage;
