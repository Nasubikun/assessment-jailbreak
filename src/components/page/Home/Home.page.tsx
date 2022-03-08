import { Footer } from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"
import { LayoutDefault } from "@/components/ui/LayoutDefault"

import { Home } from "./Home"

export const HomePage = (): JSX.Element => {
  return (
    <LayoutDefault header={<Header />} footer={<Footer />}>
      <Home />
    </LayoutDefault>
  )
}
