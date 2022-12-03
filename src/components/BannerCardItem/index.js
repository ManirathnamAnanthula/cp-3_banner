import './index.css'

const BannerProfile = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={`card ${className}`} type="none">
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn">Show More</button>
      </div>
    </li>
  )
}
export default BannerProfile
