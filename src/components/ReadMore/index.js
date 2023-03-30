// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  ReactHeading,
  Caption,
  Image,
  Paragraph,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [showMore, setShowMore] = useState(false)
  const buttonHandler = () => {
    setShowMore(prevState => !prevState)
  }
  const description = showMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = showMore ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <ReactHeading>React Hooks</ReactHeading>
      <Caption>Hooks are a new addition to React</Caption>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph>{description}</Paragraph>
      <Button type="button" onClick={buttonHandler}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default ReadMore
