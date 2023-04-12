import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, name, imageUrl, duration, genre} = trackDetails

  return (
    <li className="item">
      <div className="left-container">
        <img src={imageUrl} className="track-image" alt={name} />
        <div className="pop-container">
          <h1 className="name">{name}</h1>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="right-container">
        <p className="duration">{duration}</p>
        <button
          className="button"
          type="button"
          onClick={() => deleteTrack(id)}
          data-testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
