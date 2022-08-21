import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.p, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const AnimatedText = ({ children}) => (
  <StyledDiv
    initial={{ w: 0}}
    animate={{ w: "100%"}}
    transition={{ duration: 0.8}}
  >
    {children}
  </StyledDiv>
)

export default AnimatedText