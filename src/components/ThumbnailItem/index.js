// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDetails, updateSelectedImageId, isSelected} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItemDetails

  const onClickThumbnailItem = () => {
    updateSelectedImageId(id)
  }

  const thumbnailClassName = isSelected ? 'active_thumbnail' : ''

  return (
    <li>
      <button
        type="button"
        onClick={onClickThumbnailItem}
        className={`image ${thumbnailClassName}`}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="buttonImage"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
