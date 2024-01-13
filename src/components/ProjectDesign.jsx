import { Col } from "react-bootstrap";

export const ProjectDesign = ({ Nama,  designUrl, urlDesign }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <a href={urlDesign}>
            <div className="proj-imgbx">
            <img src={designUrl}/>
                <div className="proj-txtx">
                    <h4>{Nama}</h4>
                </div>
            </div>
        </a>
    </Col>
  )
}
