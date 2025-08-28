import Hero from '@/sections/Hero'
import Services from '@/sections/Services'

import Edge from '@/sections/Edge'
import Order from '@/sections/Order'
import Request from '@/sections/Request'

export const metadata = {
  title: '',
}

export default () => {
  return (
    <>
      <Hero />
      <Services />
      <Order />
      <Request />
      <Edge />
    </>
  )
}
