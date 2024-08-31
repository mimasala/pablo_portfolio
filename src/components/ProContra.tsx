
type proContraProps = {
  pro: JSX.Element | string
  contra: JSX.Element | string
}

const ProContra = ({ pro, contra }: proContraProps) => {
  return (<>
    <div className="hidden lg:block">
      <h1 className="text-9xl font-bold">PRO / CONTRA</h1>
      <br />
      <div className="flex space-x-16">
        <div className="w-2/5">
          <h1 className="text-xl">Das lief besonders gut.</h1>
          <p>
            {pro}
          </p>
        </div>
        <div className="w-2/5">
          <h1 className="text-xl">Hier habe ich noch Potenzial</h1>
          <p>
            {contra}
          </p>
        </div>
      </div>
    </div>
    <div className="lg:hidden">
      <h1 className="text-3xl font-bold">PRO / CONTRA</h1>
      <h1 className="text-xl">Das lief besonders gut.</h1>
      <p>
        {pro}
      </p>
      <hr className="my-5" />
      <h1 className="text-xl">Hier habe ich noch Potenzial</h1>
      <p>
        {contra}
      </p>
    </div>
  </>)
}

export default ProContra
