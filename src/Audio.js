import ReactAudioPlayer from "react-audio-player";
import "./Audio.css";
export default function Audio(props) {
  return (
    <span className="Audio">
      <ReactAudioPlayer src={props.audio} autoPlay={false} controls />
    </span>
  );
}
