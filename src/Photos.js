import "bootstrap/dist/css/bootstrap.min.css";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img src={photo.src.tiny} alt="" className="img-fluid" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return "Loading.....";
  }
}
