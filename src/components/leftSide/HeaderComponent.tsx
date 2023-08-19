import { FC } from 'react'


type Props = {
  title: string;
}
const HeaderComponent: FC<Props> = ({ title }) => {
  return (
    <h2>
      {title}
    </h2>
  )
}

export default HeaderComponent
