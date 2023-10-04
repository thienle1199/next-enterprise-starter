import { Button } from "components/Button/Button"

export default function Web() {
  return (
    <>
      <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
        Get started
      </Button>
      <Button
        href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
        intent="secondary"
      >
        Deploy Now
      </Button>
    </>
  )
}
