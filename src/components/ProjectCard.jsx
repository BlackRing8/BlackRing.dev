import { Col } from "react-bootstrap";

export const ProjectCard = ({ Judul, desc, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{Judul}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </Col>
  )
}