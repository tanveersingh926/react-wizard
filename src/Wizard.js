import React, { useEffect } from 'react'

const Wizard = ({ children, innerProps }) => {
  const defaultProps = {
    data: { value: 'Tanveer' },
    getState: () => console.log('test'),
    setState: () => console.log('test')
  }
  useEffect(() => {
    innerProps(defaultProps)
  }, [])

  //   const test = React.Children.toArray(children)
  //   console.log(test)

  console.log(children)
  return (
    <div>{children[0]}</div>
  )
}

export const WizardPage = ({ children }) => (
    <>
      {children}
    </>
)
WizardPage.displayName = 'WizardPage'

export default Wizard
