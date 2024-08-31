import NavBar from './NavBar'

const WorkContentContainer = ({ children }: any) => {
  return (<>
    <div className='w-full flex justify-center py-20 px-8'>
      <NavBar />
      <div className='xl:w-2/3 w-full'>
        {children}
      </div>
    </div>
  </>)
}

export default WorkContentContainer
