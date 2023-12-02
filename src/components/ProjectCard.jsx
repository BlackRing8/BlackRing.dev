import { Col } from "react-bootstrap";

export const ProjectCard = ({ Judul, desc, imgUrl, urlProj }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <a href={urlProj}>
          <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{Judul}</h4>
            <span>{desc}</span>
          </div>
        </div>
        </a> 
    </Col>
  )
}