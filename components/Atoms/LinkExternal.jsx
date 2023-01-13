import { BsArrowUpRight } from 'react-icons/bs'

const LinkExternal = ({href, children}) => {
  return (
    <a className='inline-flex hover:underline text-xl' href={href}>{children}<BsArrowUpRight size={24}/></a>
  )
}

export default LinkExternal