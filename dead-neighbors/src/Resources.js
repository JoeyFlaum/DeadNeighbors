import React from "react";
import WHO from "./Images/WHO.jpg";
import NIH from "./Images/NIH.jpg";
import DeadPeople from "./HomePage/DeadPeople";

const Resources = ({deadPerson}) => {
  return (
    <>
        <div className = "dead-card">
      <DeadPeople 
                deadPersonCount={deadPerson}
                key={
                  deadPerson
                } /*key change forces render(updated props are sent)*//>
               </div>
    <div className="resources">
      <div className="infoCard cdc">
          <img
            src="http://www.cdc.gov/coronavirus/2019-ncov/images/Coronavirus-badge-300.png"
            alt="Coronavirus Disease 2019 (COVID-19)"
          />
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://www.cdc.gov/coronavirus/2019-ncov/index.html?s_cid=bb-coronavirus-2019-ncov-NCIRD"
        >
        <button><div className = "click-me">Centers for Disease Control</div></button>
        </a>
      </div>
      <div className="infoCard who">
         <div className = 'copywright'>© WHO / Blink Media - Bart Verweij</div>
          <img src={WHO} alt="World Health Organization Teaching Class Awareness" />
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        >
        <button><div className = "click-me">World Heath Organization</div></button>
        </a>
      </div>
      <div className="infoCard nih">
          <img src={NIH} alt="National Institues of Health Virus"/>
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://covid19.nih.gov/"
        >
        <button><div className = "click-me">National Institutes of Health</div></button>
        </a>
      </div>
    </div>

                </>
  );
};
export default Resources;
