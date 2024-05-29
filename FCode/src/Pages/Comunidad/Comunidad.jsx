import "./Comunidad.css"
import DiscussionDetails from "../../Components/DiscussionDetails";
import DiscussionList from "../../Components/DiscussionList";
import { useState } from "react";

export default function Comunidad(){
    const [selectedDiscussion, setSelectedDiscussion] = useState(null);

    return (
        
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <h2>Discusiones</h2>
            <DiscussionList onDiscussionSelect={setSelectedDiscussion} />
          </div>
          <div className="col-md-8">
            <h2>Detalles de la Discusión</h2>
            <DiscussionDetails discussion={selectedDiscussion} />
          </div>
        </div>
      </div>
    );
}