import { memo } from "react"

function FooterCard({ list }) {
  return (
    <ul>
      {list.map((item, i) =>
        i === 0 ? (
          <li key={i}>
            <a className="liA" href="">
              {item}
            </a>
          </li>
        ) : (
          <li key={i}>
            <a href="">{item}</a>
          </li>
        )
      )}
    </ul>
  )
}

export default memo(FooterCard)
