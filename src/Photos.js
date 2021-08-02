import "bootstrap/dist/css/bootstrap.min.css";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="container">
          <div className="row">
            {props.photos.map(function (photo, index) {
              console.log(photo);
              return (
                <div className="col-4" key={index}>
                  <img src={photo.src.small} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return "Loading.....";
  }
}
