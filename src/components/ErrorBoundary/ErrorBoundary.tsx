import * as React from 'react'

/**
 * An error screen that will be used as a fallback UI.
 * @see https://reactjs.org/docs/error-boundaries
 */
export class ErrorBoundary extends React.Component<Props> {
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  override state: State = { error: undefined }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  override render() {
    const { error } = this.state

    if (!error) {
      return this.props.children
    }

    return (
      <div className='max-w-md text-clip'>
        <h1 className='text-3xl font-light'>
          <strong className='font-normal'>Error {error.status || 500}</strong>: {error.message}
        </h1>
      </div>
    )
  }
}

type Props = {
  children: React.ReactNode
}

type State = {
  error: (Error & { status?: number }) | undefined
}
