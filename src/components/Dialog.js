
const Dialog = ({ handleClose }) => {
  return (
    <div className="dialog">
      <p>Welcome to the rating system</p>
      <button className="dialog-close" onClick={handleClose}>Close</button>
    </div>
  )
}

export default Dialog;